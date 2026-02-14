import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user.id,
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      totalAmount: req.body.totalAmount,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    // Check authentication
    if (!req.user || !req.user.id) {
  return res.status(401).json({ message: "Not authorized" });
}

const orders = await Order.find({ user: req.user.id })
  .populate({
    path: "orderItems.product",
    model: "Product",
  })
  .sort({ createdAt: -1 });

    return res.status(200).json(orders);

  } catch (error) {
    console.error("Get User Orders Error:", error);

    return res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};


export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Optional: validate allowed status
    const allowedStatus = ["placed", "shipped", "delivered", "cancelled"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    order.orderStatus = status;
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update order status",
      error: error.message,
    });
  }
};



export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate({
        path: "orderItems.product",
        model: "Product",
      })
      .sort({ createdAt: -1 });

    res.status(200).json(orders);

  } catch (error) {
    console.error("Get All Orders Error:", error);

    res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};



export const getSellerOrders = async (req, res) => {
  try {
    // ✅ Check authentication
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const sellerId = req.user.id;

    // ✅ Find seller products
    const sellerProducts = await Product.find({ seller: sellerId }).select("_id");

    if (!sellerProducts.length) {
      return res.status(200).json([]); // No products = no orders
    }

    const productIds = sellerProducts.map(product => product._id);

    // ✅ Find orders that contain seller products
    const orders = await Order.find({
      "orderItems.product": { $in: productIds },
    })
      .populate("user", "name email")
      .populate({
        path: "orderItems.product",
        model: "Product",
      })
      .sort({ createdAt: -1 });

    return res.status(200).json(orders);

  } catch (error) {
    console.error("Get Seller Orders Error:", error);
    return res.status(500).json({
      message: "Failed to fetch seller orders",
      error: error.message,
    });
  }
};
