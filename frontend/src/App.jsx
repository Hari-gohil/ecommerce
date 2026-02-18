import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./collection/Navbar";
import About from "./collection/About";
import Cart from "./collection/Cart";
import Shop from "./collection/Shop";
import Orders from "./collection/Orders";
import MainLR from "./collection/MainLR";

import Ethics from "./Subcomponent/Ethics";
import Culture from "./Subcomponent/Culture";
import Sustainability from "./Subcomponent/Sustainability";
import Stories from "./Subcomponent/Stories";
import Policy from "./Subcomponent/Policy";
import Profile from "./collection/Profile";

import Footer from "./collection/Footer";
import Logout from "./collection/Logout";
import ProductDetail from "./collection/ProductDetail";
import ProductList from "./collection/ProductList";
import OrderForm from "./collection/OrderForm";
import MyOrders from "./collection/MyOrders";

import Signin from "./collection/Signin";
import Signup from "./collection/Signup";

function App() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAuth = userInfo?.token;

  return (
    <Routes>
      {/* Default */}
      <Route
        path="/"
        element={
          isAuth ? <Navigate to="/home" /> : <Navigate to="/auth/signin" />
        }
      />

      {/* Auth Layout */}
      <Route path="/auth" element={<MainLR />}>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* Home */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <ProductList />
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="/ethics"
        element={
          <>
            <Navbar />
            <Ethics />
            <Footer />
          </>
        }
      />
      <Route
        path="/culture"
        element={
          <>
            <Navbar />
            <Culture />
            <Footer />
          </>
        }
      />
      <Route
        path="/sustainability"
        element={
          <>
            <Navbar />
            <Sustainability />
            <Footer />
          </>
        }
      />
      <Route
        path="/stories"
        element={
          <>
            <Navbar />
            <Stories />
            <Footer />
          </>
        }
      />
      <Route
        path="/policy"
        element={
          <>
            <Navbar />
            <Policy />
            <Footer />
          </>
        }
      />

      <Route
        path="/orders"
        element={
          <>
            <Navbar />
            <Orders />
            <Footer />
          </>
        }
      />
      <Route path="/my-orders" element={<MyOrders />} />

      <Route path="/order" element={<OrderForm />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/product/:id"
        element={
          <>
            <Navbar />
            <ProductDetail />
          </>
        }
      />

      <Route
        path="/profile"
        element={
          <>
            <Navbar />
            <Profile />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
