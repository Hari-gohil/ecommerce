import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    transactionId: String,
    paymentGateway: String,
    amount: Number,
    status: {
      type: String,
      enum: ["success", "failed", "pending"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
