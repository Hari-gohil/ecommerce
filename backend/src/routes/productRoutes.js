import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,getMyProducts,updateProduct 
} from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createProduct);
router.get("/", getAllProducts);
router.get("/seller/my-products", protect, getMyProducts);

router.get("/:id", getProductById);
router.delete("/:id", protect, deleteProduct);

router.put("/:id", protect, updateProduct);

export default router;
