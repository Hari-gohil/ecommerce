import React from "react";
import Home from "./collection/Home";
import Navbar from "./collection/Navbar";
import About from "./collection/About";
import Contect from "./collection/Contect";
import Cart from "./collection/Cart";
import Signin from "./collection/Signin";
import Signup from "./collection/Signup";
import Profile from "./collection/Profile";
import Shop from "./collection/Shop";
import Orders from "./collection/Orders";
import MainLR from "./collection/MainLR";
import { Routes, Route } from "react-router-dom";
import Ethics from "./Subcomponent/Ethics";
import Culture from "./Subcomponent/Culture";
import Sustainability from "./Subcomponent/Sustainability";
import Stories from "./Subcomponent/Stories";
import Policy from "./Subcomponent/Policy";
import Footer from "./collection/Footer";
import Logout from "./collection/Logout";
import ProductDetail  from './collection/ProductDetail';
import ProductList from "./collection/ProductList";
import OrderForm from "./collection/OrderForm";
import MyOrders from "./collection/MyOrders";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<><Navbar /><ProductList /><Footer /></>} />
        <Route path="/products" element={<><Navbar /><Home /><Footer /></>} />

        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/ethics" element={<><Navbar /><Ethics /><Footer /></>} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/culture" element={<><Navbar /><Culture /><Footer /></>} />

        <Route path="/sustainability" element={<><Navbar /><Sustainability /><Footer /></>} />

        <Route path="/stories" element={<><Navbar /><Stories /><Footer /></>} />

        <Route path="/policy" element={<><Navbar /><Policy /><Footer /></>} />

        <Route path="/orders" element={<><Navbar /><Orders /><Footer /></>} />

        <Route path="/my-orders" element={<MyOrders />} />

      <Route path="/" element={<MainLR />}>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="order" element={<OrderForm/> } /> 

        <Route path="/mainlr" element={<MainLR />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/product/:id" element={<><Navbar/> <ProductDetail /> </>} />


      </Routes>
      
    </div>
  );
}

export default App;
