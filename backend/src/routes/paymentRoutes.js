import express from "express";
import {
  createPayment,
  getPaymentByOrder,
} from "../controllers/paymentController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createPayment);
router.get("/:orderId", protect, getPaymentByOrder);

export default router;
