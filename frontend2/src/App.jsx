import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./assets/pages/SellerLogin";
import Dashboard from "./assets/pages/Dashboard";
import Products from "./assets/pages/Products";
import Orders from "./assets/pages/SellerOrders";
import Users from "./assets/pages/Users.jsx";
import SellerRegister from "./assets/pages/SallerRegister";
import SellerLogin from "./assets/pages/SellerLogin";
import AddProduct from "./assets/pages/AddProduct";
import SellerSummary from "./assets/pages/SellerSummry";
import EditProduct from "./assets/pages/EditProduct";
import SellerProfile from "./assets/pages/SellerProfile";
const App = () => {
  return (
    <div>
       <Routes>

      {/* Auth */}
      <Route path="/" element={<SellerRegister />} />
      <Route path="/seller/register" element={<SellerRegister />} />
      <Route path="/seller/login" element={<SellerLogin />} />

      {/* Seller Dashboard Layout */}
      <Route path="/seller" element={<Dashboard />}>

      <Route path="profile" element={<SellerProfile />} />

        {/* Default dashboard page */}
        <Route index element={<SellerSummary />} />

        <Route path="dashboard" element={<SellerSummary />} />

        <Route path="products" element={<Products />} />

        <Route path="add-product" element={<AddProduct />} />

        <Route path="orders" element={<Orders />} />

        <Route path="users" element={<Users />} />

        <Route path="edit-product" element={<EditProduct />} />

        <Route
            path="products/edit-product/:id"
            element={<EditProduct />}
          />

      </Route>

    </Routes>
    </div>
  );
};

export default App;
