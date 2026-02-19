import Seller from "../models/Seller.js";
import jwt from "jsonwebtoken";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

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

export const getSellerUsers = async (req, res) => {
  try {
    const sellerId = req.user.id;

    const orders = await Order.find()
      .populate("user", "name email phone")
      .populate("orderItems.product");

    const userMap = {};

    orders.forEach((order) => {
      let sellerOrderTotal = 0;
      let hasSellerProduct = false;

      order.orderItems.forEach((item) => {
        if (
          item.product &&
          item.product.seller.toString() === sellerId
        ) {
          hasSellerProduct = true;
          sellerOrderTotal += item.price * item.quantity;
        }
      });

      if (!hasSellerProduct) return;

      const user = order.user;
      if (!user) return;

      if (!userMap[user._id]) {
        userMap[user._id] = {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          orders: 0,
          totalSpent: 0,
        };
      }

      userMap[user._id].orders += 1;
      userMap[user._id].totalSpent += sellerOrderTotal;
    });

    res.json(Object.values(userMap));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



export const getSellerProfile = async (req, res) => {
  try {
    const seller = await Seller.findById(req.user.id).select("-password");

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.json(seller);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

