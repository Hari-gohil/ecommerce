import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-zfl4.onrender.com/api", // backend port
    // baseURL: "http://localhost:3000/api"
});

/* ================= TOKEN INTERCEPTOR ================= */

API.interceptors.request.use((req) => {
  const sellerInfo = localStorage.getItem("sellerInfo");

  if (sellerInfo) {
    const token = JSON.parse(sellerInfo).token;

    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

/* ================= AUTH ================= */

export const registerSeller = (data) =>
  API.post("/sellers/register", data);

export const loginSeller = (data) =>
  API.post("/sellers/login", data);

export const getSellerProducts = (sellerId) =>
  API.get(`/products/seller/${sellerId}`);

/* ================= PRODUCTS ================= */

// Create Product
export const createProduct = (productData) =>
  API.post("/products", productData);

// Get All Products
export const getAllProducts = () =>
  API.get("/products");
export const getMyProducts = () =>
  API.get("/products/seller/my-products");

// Update Product
export const updateProduct = (productId, productData) =>
  API.put(`/products/${productId}`, productData);

// Upload Image
export const uploadProductImage = (formData) =>
  API.post("/upload/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  

// Get Product By ID
export const getProductById = (id) =>
  API.get(`/products/${id}`);

// Delete Product
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

export const getSellerSummary = (sellerId) =>
  API.get(`/sellers/summary/${sellerId}`);

/* ================= ORDERS ================= */

// Get All Orders (Admin/Seller filtering frontend ma)
export const getAllOrders = () =>
  API.get("/orders");

// Get Seller Orders (Recommended - backend filtered)
export const getSellerOrders = () =>
  API.get("/orders/seller/my-orders");

// Update Order Status
export const updateOrderStatus = (orderId, data) =>
  API.put(`/orders/${orderId}/status`, data); // data = { status: 'shipped' }

// Get Single Order
export const getOrderById = (id) =>
  API.get(`/orders/${id}`);
