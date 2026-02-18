import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  addAddress,
  toggleWishlist,
  logoutUser,
  getAddresses,
  deleteAddress,
  changePassword
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

router.post("/address", protect, addAddress);
router.get("/address", protect, getAddresses);
router.delete("/address/:id", protect, deleteAddress);
router.put("/change-password", protect, changePassword);
router.post("/wishlist", protect, toggleWishlist);


export default router;
