import axios from "axios";

/* =====================
   Base Axios Instance
===================== */

const API = axios.create({
//   baseURL: "https://ecommerce-zfl4.onrender.com/api",
   baseURL: "http://localhost:3000/api"
});

/* =====================
   Attach JWT Token
===================== */

API.interceptors.request.use((req) => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    req.headers.Authorization = `Bearer ${JSON.parse(userInfo).token}`;
  }

  return req;
});

/* =====================
   USER
===================== */

export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (data) => API.post("/users/login", data);
export const getUserProfile = () => API.get("/users/profile");
export const updateUserProfile = (data) => API.put("/users/profile", data);
export const addAddress = (data) => API.post("/users/address", data);
export const toggleWishlist = (productId) =>
  API.post("/users/wishlist", { productId });

/* =====================
   SELLER
===================== */

export const createSeller = (data) => API.post("/sellers", data);
export const getSellerProfile = () => API.get("/sellers/profile");

/* =====================
   PRODUCTS
===================== */

export const getProducts = () => API.get("/products");
export const getProductById = (id) => API.get(`/products/${id}`);
export const createProduct = (data) => API.post("/products", data);

/* =====================
   CATEGORIES
===================== */

export const getCategories = () => API.get("/categories");

/* =====================
   CART
===================== */

export const getCart = () => API.get("/cart");
export const addToCart = (data) => API.post("/cart", data);
export const removeFromCart = (id) => API.delete(`/cart/${id}`);
export const updateCartQuantity = (id, quantity) =>
  API.put(`/cart/${id}`, { quantity });

/* =====================
   ORDERS
===================== */

export const createOrder = (data) => API.post("/orders", data);
export const getMyOrders = () => API.get("/orders/my");

/* =====================
   PAYMENTS
===================== */

export const createPayment = (data) => API.post("/payments", data);

/* =====================
   REVIEWS
===================== */

export const addReview = (data) => API.post("/reviews", data);

export default API;
