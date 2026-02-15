// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const OrderForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const product = location.state?.product;

//   const [shippingAddress, setShippingAddress] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("token");

//   if (!product) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
//           <svg className="w-16 h-16 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//           </svg>
//           <h3 className="text-2xl font-bold text-gray-900 mb-3">No Product Selected</h3>
//           <p className="text-gray-600 mb-4">Please select a product before proceeding.</p>
//           <button 
//             className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//             onClick={() => navigate("/products")}
//           >
//             Browse Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     setShippingAddress({
//       ...shippingAddress,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const placeOrder = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const orderData = {
//         orderItems: [
//           {
//             product: product._id,
//             quantity: quantity,
//             price: product.price,
//           },
//         ],
//         shippingAddress,
//         paymentMethod,
//         totalAmount: product.price * quantity,
//       };

//       await axios.post(
//         "http://localhost:3000/api/orders",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("🎉 Order Placed Successfully!");
//       navigate("/my-orders");
//     } catch (error) {
//       alert(error.response?.data?.message || "Order failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Column - Product Summary */}
//         <div className="lg:w-5/12">
//           <div className="sticky top-8 bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
//               {/* Product Card */}
//               <div className="flex items-start gap-4 pb-6 mb-4 border-b border-gray-200">
//                 {product.image && (
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
//                   />
//                 )}
//                 <div className="flex-1">
//                   <h5 className="font-bold text-gray-900 mb-1">{product.name}</h5>
//                   <p className="text-sm text-gray-500 mb-2">{product.category || "Product"}</p>
//                   <p className="text-xl font-bold text-blue-600">₹{product.price}</p>
//                 </div>
//               </div>

//               {/* Price Breakdown */}
//               <div className="mb-6">
//                 <h6 className="font-bold text-gray-900 mb-4">Price Details</h6>
//                 <div className="space-y-3">
//                   <div className="flex justify-between text-gray-600">
//                     <span>Price ({quantity} item{quantity > 1 ? 's' : ''})</span>
//                     <span className="text-gray-900">₹{product.price * quantity}</span>
//                   </div>
//                   <div className="flex justify-between text-gray-600">
//                     <span>Delivery Charges</span>
//                     <span className="text-green-600 font-medium">Free</span>
//                   </div>
//                   <div className="border-t border-gray-200 pt-3 mt-3">
//                     <div className="flex justify-between font-bold">
//                       <span className="text-gray-900">Total Amount</span>
//                       <span className="text-xl text-blue-600">₹{product.price * quantity}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Quantity Selector */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-900 mb-3">Quantity</label>
//                 <div className="flex items-center gap-3">
//                   <button 
//                     type="button"
//                     className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     disabled={quantity <= 1}
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
//                     </svg>
//                   </button>
//                   <span className="w-12 text-center text-xl font-bold text-gray-900">
//                     {quantity}
//                   </span>
//                   <button 
//                     type="button"
//                     className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
//                     onClick={() => setQuantity(quantity + 1)}
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Shipping Form */}
//         <div className="lg:w-7/12">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h3>
              
//               <form onSubmit={placeOrder} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {/* Name */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
//                     <div className="relative">
//                       <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                         </svg>
//                       </span>
//                       <input
//                         type="text"
//                         name="name"
//                         className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         placeholder="Enter your full name"
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
//                     <div className="relative">
//                       <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                         </svg>
//                       </span>
//                       <input
//                         type="tel"
//                         name="phone"
//                         className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         placeholder="10-digit mobile number"
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
//                   <div className="relative">
//                     <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </span>
//                     <input
//                       type="email"
//                       name="email"
//                       className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       placeholder="you@example.com"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
//                   <div className="relative">
//                     <span className="absolute top-3 left-3 text-gray-500">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                       </svg>
//                     </span>
//                     <textarea
//                       name="address"
//                       rows="2"
//                       className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       placeholder="House number, building, street, area"
//                       onChange={handleChange}
//                       required
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   {/* City */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
//                     <input
//                       type="text"
//                       name="city"
//                       className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       placeholder="Enter city"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   {/* State */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
//                     <select
//                       name="state"
//                       className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
//                       onChange={handleChange}
//                       required
//                       defaultValue=""
//                     >
//                       <option value="" disabled>Select state</option>
//                       <option value="Andhra Pradesh">Andhra Pradesh</option>
//                       <option value="Delhi">Delhi</option>
//                       <option value="Gujarat">Gujarat</option>
//                       <option value="Karnataka">Karnataka</option>
//                       <option value="Maharashtra">Maharashtra</option>
//                       <option value="Tamil Nadu">Tamil Nadu</option>
//                       <option value="Telangana">Telangana</option>
//                       <option value="Uttar Pradesh">Uttar Pradesh</option>
//                       <option value="West Bengal">West Bengal</option>
//                     </select>
//                   </div>

//                   {/* Pincode */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
//                     <input
//                       type="text"
//                       name="pincode"
//                       className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       placeholder="PIN"
//                       maxLength="6"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Payment Method */}
//                 <div>
//                   <label className="block text-sm font-bold text-gray-900 mb-3">Payment Method</label>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {/* COD Option */}
//                     <div 
//                       className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
//                         paymentMethod === "COD" 
//                           ? "border-blue-500 bg-blue-50" 
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                       onClick={() => setPaymentMethod("COD")}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className={`rounded-full p-2 ${
//                           paymentMethod === "COD" ? "bg-blue-100" : "bg-gray-100"
//                         }`}>
//                           <svg className={`w-6 h-6 ${
//                             paymentMethod === "COD" ? "text-blue-600" : "text-gray-500"
//                           }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a4 4 0 00-8 0v2M5 13h14v6H5v-6z" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h6 className="font-bold text-gray-900">Cash on Delivery</h6>
//                           <p className="text-xs text-gray-500">Pay when you receive</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Online Payment Option */}
//                     <div 
//                       className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
//                         paymentMethod === "Online" 
//                           ? "border-blue-500 bg-blue-50" 
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                       onClick={() => setPaymentMethod("Online")}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className={`rounded-full p-2 ${
//                           paymentMethod === "Online" ? "bg-blue-100" : "bg-gray-100"
//                         }`}>
//                           <svg className={`w-6 h-6 ${
//                             paymentMethod === "Online" ? "text-blue-600" : "text-gray-500"
//                           }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h6 className="font-bold text-gray-900">Online Payment</h6>
//                           <p className="text-xs text-gray-500">Credit/Debit card, UPI</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button 
//                   type="submit" 
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                   disabled={loading}
//                 >
//                   {loading ? (
//                     <>
//                       <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing Order...
//                     </>
//                   ) : (
//                     <>
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                       </svg>
//                       Place Order • ₹{product.price * quantity}
//                     </>
//                   )}
//                 </button>

//                 <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-1">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                   Your order is secure and encrypted
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderForm;








// full working code

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const OrderForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const cart = location.state?.cart;
//   const product = location.state?.product;

//   // ===== GET TOKEN CORRECTLY =====
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   const token = userInfo?.token;

//   useEffect(() => {
//     if (!cart && !product) {
//       navigate("/products");
//     }
//   }, [cart, product, navigate]);

//   const [shippingAddress, setShippingAddress] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // ===== TOTAL AMOUNT =====
//   let totalAmount = 0;

//   if (product) {
//     totalAmount = product.price * quantity;
//   }

//   if (cart) {
//     totalAmount = cart.items.reduce(
//       (total, item) => total + item.product.price * item.quantity,
//       0
//     );
//   }

//   const handleChange = (e) => {
//     setShippingAddress({
//       ...shippingAddress,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ===== PLACE ORDER =====
//   const placeOrder = async (e) => {
//     e.preventDefault();

//     if (!token) {
//       alert("Please login first");
//       return navigate("/login");
//     }

//     try {
//       setLoading(true);

//       let orderItems = [];

//       if (product) {
//         orderItems = [
//           {
//             product: product._id,
//             quantity: quantity,
//             price: product.price,
//           },
//         ];
//       }

//       if (cart) {
//         orderItems = cart.items.map((item) => ({
//           product: item.product._id,
//           quantity: item.quantity,
//           price: item.product.price,
//         }));
//       }

//       const orderData = {
//         orderItems,
//         shippingAddress,
//         paymentMethod,
//         totalAmount,
//       };

//       await axios.post(
//         "http://localhost:3000/api/orders",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("🎉 Order Placed Successfully!");

//       // ===== CLEAR CART =====
//       if (cart) {
//         await axios.delete("http://localhost:3000/api/cart/clear", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       navigate("/my-orders");

//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.message || "Order failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!product && !cart) return null;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">

//         {/* ================= LEFT: ORDER SUMMARY ================= */}
//         <div className="lg:w-5/12">
//           <div className="bg-white rounded-xl shadow p-6">

//             <h3 className="text-2xl font-bold mb-6">
//               Order Summary
//             </h3>

//             {/* BUY NOW */}
//             {product && (
//               <div className="mb-4 border-b pb-4">
//                 <h4 className="font-bold">{product.name}</h4>
//                 <p className="text-blue-600 font-bold">
//                   ₹{product.price}
//                 </p>
//               </div>
//             )}

//             {/* CART ITEMS */}
//             {cart &&
//               cart.items.map((item) => (
//                 <div
//                   key={item._id}
//                   className="mb-4 border-b pb-4"
//                 >
//                   <h4 className="font-semibold">
//                     {item.product?.name}
//                   </h4>
//                   <p className="text-gray-600 text-sm">
//                     ₹{item.product?.price} × {item.quantity}
//                   </p>
//                 </div>
//               ))}

//             {/* PRICE DETAILS */}
//             <div className="mt-6">
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal</span>
//                 <span>₹{totalAmount}</span>
//               </div>

//               <div className="flex justify-between mb-2">
//                 <span>Delivery</span>
//                 <span className="text-green-600">Free</span>
//               </div>

//               <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span className="text-blue-600">
//                   ₹{totalAmount}
//                 </span>
//               </div>
//             </div>

//             {/* QUANTITY (BUY NOW ONLY) */}
//             {product && (
//               <div className="mt-6">
//                 <label className="font-bold block mb-2">
//                   Quantity
//                 </label>

//                 <div className="flex items-center gap-3">
//                   <button
//                     type="button"
//                     className="border px-3 py-1"
//                     onClick={() =>
//                       setQuantity(Math.max(1, quantity - 1))
//                     }
//                   >
//                     -
//                   </button>

//                   <span className="font-bold">
//                     {quantity}
//                   </span>

//                   <button
//                     type="button"
//                     className="border px-3 py-1"
//                     onClick={() =>
//                       setQuantity(quantity + 1)
//                     }
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             )}

//           </div>
//         </div>

//         {/* ================= RIGHT: FORM ================= */}
//         <div className="lg:w-7/12">
//           <div className="bg-white rounded-xl shadow p-6">

//             <h3 className="text-2xl font-bold mb-6">
//               Shipping Information
//             </h3>

//             <form onSubmit={placeOrder} className="space-y-4">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//                 required
//               />

//               <textarea
//                 name="address"
//                 placeholder="Address"
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//                 required
//               />

//               <div className="grid grid-cols-3 gap-3">
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   className="border p-2 rounded"
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="state"
//                   placeholder="State"
//                   className="border p-2 rounded"
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="pincode"
//                   placeholder="Pincode"
//                   className="border p-2 rounded"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* PAYMENT */}
//               <div className="flex gap-4 mt-4">
//                 <button
//                   type="button"
//                   className={`border p-3 rounded w-full ${
//                     paymentMethod === "COD"
//                       ? "border-blue-600"
//                       : ""
//                   }`}
//                   onClick={() => setPaymentMethod("COD")}
//                 >
//                   Cash on Delivery
//                 </button>

//                 <button
//                   type="button"
//                   className={`border p-3 rounded w-full ${
//                     paymentMethod === "Online"
//                       ? "border-blue-600"
//                       : ""
//                   }`}
//                   onClick={() =>
//                     setPaymentMethod("Online")
//                   }
//                 >
//                   Online Payment
//                 </button>
//               </div>

//               {/* SUBMIT */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-blue-600 text-white py-3 rounded mt-4"
//               >
//                 {loading
//                   ? "Processing..."
//                   : `Place Order • ₹${totalAmount}`}
//               </button>

//             </form>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default OrderForm;



// improving with UI

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const OrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart;
  const product = location.state?.product;

  // ===== GET TOKEN CORRECTLY =====
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;

  useEffect(() => {
    if (!cart && !product) {
      navigate("/products");
    }
  }, [cart, product, navigate]);

  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  // ===== TOTAL AMOUNT =====
  let totalAmount = 0;

  if (product) {
    totalAmount = product.price * quantity;
  }

  if (cart) {
    totalAmount = cart.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  // ===== PLACE ORDER =====
  const placeOrder = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login first");
      return navigate("/login");
    }

    try {
      setLoading(true);

      let orderItems = [];

      if (product) {
        orderItems = [
          {
            product: product._id,
            quantity: quantity,
            price: product.price,
          },
        ];
      }

      if (cart) {
        orderItems = cart.items.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        }));
      }

      const orderData = {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalAmount,
      };

      await axios.post(
        "http://localhost:3000/api/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("🎉 Order Placed Successfully!");

      // ===== CLEAR CART =====
      if (cart) {
        await axios.delete("http://localhost:3000/api/cart/clear", {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      navigate("/my-orders");

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Order failed");
    } finally {
      setLoading(false);
    }
  };

  if (!product && !cart) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Checkout</h2>
          <p className="mt-2 text-gray-600">Complete your purchase by providing your details</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ================= LEFT: ORDER SUMMARY ================= */}
          <div className="lg:w-5/12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
              
              {/* Header with accent */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Order Summary
                </h3>
              </div>

              <div className="p-6">

                {/* BUY NOW - Single Product */}
                {product && (
                  <div className="mb-6 border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      {product.image && (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                        />
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg">{product.name}</h4>
                        <p className="text-blue-600 font-bold text-xl mt-1">₹{product.price}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CART ITEMS */}
                {cart && cart.items.length > 0 && (
                  <div className="mb-6 border-b border-gray-200 pb-6">
                    <h4 className="font-medium text-gray-700 mb-4">Items ({cart.items.length})</h4>
                    <div className="space-y-4">
                      {cart.items.map((item) => (
                        <div key={item._id} className="flex items-start space-x-3">
                          {item.product?.image && (
                            <img 
                              src={item.product.image} 
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                            />
                          )}
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{item.product?.name}</h5>
                            <p className="text-sm text-gray-600 mt-1">
                              ₹{item.product?.price} × {item.quantity}
                            </p>
                            <p className="text-sm font-semibold text-blue-600 mt-1">
                              ₹{item.product?.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PRICE DETAILS */}
                <div className="bg-gray-50 rounded-xl p-5 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Price Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium">₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Charges</span>
                      <span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full text-sm">Free</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span className="text-gray-900">Total Amount</span>
                        <span className="text-blue-600">₹{totalAmount}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QUANTITY (BUY NOW ONLY) */}
                {product && (
                  <div className="mt-6">
                    <label className="font-semibold text-gray-700 block mb-3">
                      Select Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center font-bold text-lg"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <span className="font-bold text-xl text-gray-900 min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center font-bold text-lg"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* ================= RIGHT: FORM ================= */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              
              {/* Header with accent */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Shipping Information
                </h3>
              </div>

              <div className="p-6">
                <form onSubmit={placeOrder} className="space-y-5">

                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="9876543210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Address Details */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <textarea
                      name="address"
                      placeholder="Enter your full address"
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Mumbai"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="Maharashtra"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="400001"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* PAYMENT METHOD */}
                  <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === "COD"
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}
                        onClick={() => setPaymentMethod("COD")}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">Cash on Delivery</span>
                      </button>

                      <button
                        type="button"
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === "Online"
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}
                        onClick={() => setPaymentMethod("Online")}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span className="font-medium">Online Payment</span>
                      </button>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        `Place Order • ₹${totalAmount}`
                      )}
                    </button>
                    
                    {/* Secure Checkout Note */}
                    <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Your information is secure and encrypted
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderForm;
