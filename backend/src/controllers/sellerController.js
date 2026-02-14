import Seller from "../models/Seller.js";
import jwt from "jsonwebtoken";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

export const registerSeller = async (req, res) => {
  const { shopName, email, password, gstNumber, address } = req.body;

  const exists = await Seller.findOne({ email });
  if (exists) return res.status(400).json({ message: "Seller already exists" });

  const seller = await Seller.create({
    shopName,
    email,
    password,
    gstNumber,
    address,
  });

  res.status(201).json({
    _id: seller._id,
    shopName: seller.shopName,
    email: seller.email,
    token: generateToken(seller._id),
  });
};
export const loginSeller = async (req, res) => {
  const { email, password } = req.body;

  const seller = await Seller.findOne({ email });

  if (!seller || !(await seller.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    _id: seller._id,
    shopName: seller.shopName,
    email: seller.email,
    token: generateToken(seller._id),
  });
};
