  import express from "express";
  import {
    createOrder,
    getUserOrders,getSellerOrders,
    updateOrderStatus,getAllOrders
  } from "../controllers/orderController.js";
  import { protect } from "../middlewares/authMiddleware.js";


  const router = express.Router();

  router.post("/", protect, createOrder);
  router.get("/my", protect, getUserOrders);
  router.put("/:id/status", protect, updateOrderStatus);
  router.get("/seller/my-orders", protect, getSellerOrders);
  // router.get("/",protect,getAllOrders);

  export default router;
