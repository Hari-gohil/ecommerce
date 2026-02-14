import express from "express";
import { registerSeller, loginSeller } from "../controllers/sellerController.js";
import { getSellerSummary } from "../controllers/sellerSummaryController.js";
const router = express.Router();

router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.get("/summary/:id", getSellerSummary);
export default router;
