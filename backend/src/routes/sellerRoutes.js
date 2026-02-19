// import express from "express";
// import { registerSeller, loginSeller } from "../controllers/sellerController.js";
// import { getSellerSummary } from "../controllers/sellerSummaryController.js";
// import { getSellerUsers } from "../controllers/sellerController.js";
// import { protect } from "../middleware/authSeller.js";
// const router = express.Router();

// router.post("/register", registerSeller);
// router.post("/login", loginSeller);
// router.get("/summary/:id", getSellerSummary);

// export default router;


import express from "express";
import {
  registerSeller,
  loginSeller,
  getSellerUsers,
} from "../controllers/sellerController.js";

import { getSellerSummary } from "../controllers/sellerSummaryController.js";
import { protect } from "../middlewares/authSeller.js";

const router = express.Router();

router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.get("/summary/:id", getSellerSummary);

router.get("/users", protect, getSellerUsers);

export default router;

