import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    discountPrice: Number,
    stock: { type: Number, default: 0 },
    images: [String],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },

    brand: String,
    rating: { type: Number, default: 0 },
    specs: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
