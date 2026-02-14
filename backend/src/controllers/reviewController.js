import Review from "../models/Review.js";

export const addReview = async (req, res) => {
  const review = await Review.create({
    user: req.user.id,
    product: req.body.product,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  res.status(201).json(review);
};

export const getProductReviews = async (req, res) => {
  const reviews = await Review.find({ product: req.params.productId })
    .populate("user", "name");
  res.json(reviews);
};
