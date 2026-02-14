import Product from "./../models/Product.js";
import Order from "./../models/Order.js"; // if you have orders

export const getSellerSummary = async (req, res) => {
  const sellerId = req.params.id;

  try {
    // Products count
    const activeProducts = await Product.countDocuments({ seller: sellerId });

    // Orders (optional)
    const orders = await Order.find({ seller: sellerId });

    const totalOrders = orders.length;

    const totalSales = orders.reduce(
      (sum, order) => sum + order.totalAmount,
      0
    );

    res.json({
      totalSales,
      totalOrders,
      activeProducts,
    });
  } catch (error) {
    res.status(500).json({ message: "Summary error" });
  }
};
