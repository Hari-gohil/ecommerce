import Product from "../models/Product.js";
import Review from "../models/Review.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,        // other product fields
      seller: req.user.id // this ensures the product belongs to the logged-in seller
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  const products = await Product.find()
  
    .populate("seller");
  res.json(products);
};

// export const getProductById = async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   res.json(product);
// };
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("seller");

    if (!product) return res.status(404).json({ message: "Product not found" });

    // Fetch reviews
    const reviews = await Review.find({ product: product._id });

    // Calculate average rating
    let avgRating = 0;
    if (reviews.length > 0) {
      const total = reviews.reduce((acc, item) => acc + item.rating, 0);
      avgRating = total / reviews.length;
    }

    // Send product with dynamic rating
    res.json({ ...product.toObject(), rating: avgRating.toFixed(1), reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    const review = await Review.create({
      user: req.user.id,
      product: productId,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Optional: check if product belongs to seller
    if (product.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({
      seller: req.user.id,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
