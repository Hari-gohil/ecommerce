// // import React, { useEffect, useState } from "react";
// // import { getMyOrders } from "../api/api";

// // const MyOrders = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);

// // useEffect(() => {
// //   const fetchOrders = async () => {
// //     try {
// //       const { data } = await getMyOrders();
// //       setOrders(data);
// //     } catch (error) {
// //       console.log("Error fetching orders:", error.response?.data);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   fetchOrders();
// // }, []);

// //   if (loading) return <h3>Loading orders...</h3>;

// //   if (!orders || orders.length === 0)
// //     return <h3>You have no orders yet.</h3>;

// //   return (
// //     <div className="container mt-4">
// //       <h2>My Orders</h2>

// //       {orders.map((order) => (
// //         <div key={order._id} className="card p-3 mb-3">
// //           <h5>Order ID: {order._id}</h5>
// //           <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
// //           <p>Total Amount: ₹{order.totalAmount}</p>
// //           <p>Order Status: <strong>{order.orderStatus}</strong></p>
// //           <p>Payment Status: <strong>{order.paymentStatus}</strong></p>

// //           <h6 className="mt-3">Products:</h6>

// //           {order.orderItems?.map((item, index) => (
// //             <div key={index} className="border p-2 mb-2">
// //               <p>
// //                 <strong>
// //                   {item.product?.name || "Product Deleted"}
// //                 </strong>
// //               </p>
// //               <p>Quantity: {item.quantity}</p>
// //               <p>Price: ₹{item.price}</p>
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MyOrders;








// import React, { useEffect, useState } from "react";
// import { getMyOrders } from "../api/api";

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedOrder, setExpandedOrder] = useState(null);
//   const [selectedFilter, setSelectedFilter] = useState("all");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const { data } = await getMyOrders();
//         setOrders(data);
//       } catch (error) {
//         console.log("Error fetching orders:", error.response?.data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const toggleOrderExpand = (orderId) => {
//     setExpandedOrder(expandedOrder === orderId ? null : orderId);
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       placed: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
//       processing: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20",
//       shipped: "bg-purple-50 text-purple-700 ring-1 ring-purple-600/20",
//       delivered: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
//       cancelled: "bg-rose-50 text-rose-700 ring-1 ring-rose-600/20",
//       returned: "bg-orange-50 text-orange-700 ring-1 ring-orange-600/20",
//     };
//     return colors[status?.toLowerCase()] || "bg-gray-50 text-gray-700 ring-1 ring-gray-600/20";
//   };

//   const getPaymentStatusColor = (status) => {
//     const colors = {
//       paid: "bg-emerald-50 text-emerald-700",
//       completed: "bg-emerald-50 text-emerald-700",
//       pending: "bg-yellow-50 text-yellow-700",
//       failed: "bg-rose-50 text-rose-700",
//       refunded: "bg-orange-50 text-orange-700",
//     };
//     return colors[status?.toLowerCase()] || "bg-gray-50 text-gray-700";
//   };

//   const getStatusIcon = (status) => {
//     const icons = {
//       placed: "📝",
//       processing: "⚙️",
//       shipped: "📦",
//       delivered: "✅",
//       cancelled: "❌",
//       returned: "↩️",
//     };
//     return icons[status?.toLowerCase()] || "🔄";
//   };

//   const getPaymentIcon = (status) => {
//     const icons = {
//       paid: "💳",
//       completed: "✅",
//       pending: "⏳",
//       failed: "❌",
//       refunded: "💰",
//     };
//     return icons[status?.toLowerCase()] || "💵";
//   };

//   const filteredOrders = selectedFilter === "all" 
//     ? orders 
//     : orders.filter(order => order.orderStatus?.toLowerCase() === selectedFilter);

//   const formatOrderId = (id) => {
//     if (!id) return "N/A";
//     return `#${id.slice(-12).toUpperCase()}`;
//   };

//   const calculateItemTotal = (price, quantity) => {
//     return (price * quantity) || 0;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-3xl shadow-xl p-16 flex flex-col items-center justify-center border border-slate-200/60">
//             <div className="relative">
//               <div className="w-20 h-20 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-10 h-10 bg-blue-600 rounded-full animate-pulse"></div>
//               </div>
//             </div>
//             <p className="text-slate-700 font-semibold mt-8 text-xl">Loading your orders...</p>
//             <p className="text-sm text-slate-500 mt-3">Please wait while we fetch your order history</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!orders || orders.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-3xl shadow-xl p-16 text-center border border-slate-200/60">
//             <div className="max-w-lg mx-auto">
//               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center shadow-inner">
//                 <svg className="w-20 h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                 </svg>
//               </div>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">No orders yet</h2>
//               <p className="text-slate-600 mb-10 text-lg">Looks like you haven't placed any orders yet. Start shopping to see your orders here!</p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-600/25 text-lg">
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   Start Shopping
//                 </button>
//                 <button className="inline-flex items-center px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 transition-all duration-200 text-lg">
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                   Browse Products
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section with Enhanced Stats */}
//         <div className="mb-10">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg shadow-blue-600/20">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                 </svg>
//               </div>
//               <div>
//                 <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">My Orders</h1>
//                 <p className="text-slate-600 mt-2 text-lg">Track, manage, and review all your purchases</p>
//               </div>
//             </div>
            
//             {/* Order Statistics */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//               <div className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-slate-200">
//                 <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Orders</p>
//                 <p className="text-3xl font-bold text-slate-900 mt-1">{orders.length}</p>
//               </div>
//               <div className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-slate-200">
//                 <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Spent</p>
//                 <p className="text-3xl font-bold text-emerald-600 mt-1">
//                   ₹{orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0).toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Filter Tabs */}
//           <div className="flex flex-wrap items-center gap-3 mt-8">
//             <span className="text-sm font-medium text-slate-600 mr-2">Filter by:</span>
//             {["all", "placed", "processing", "shipped", "delivered", "cancelled"].map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setSelectedFilter(filter)}
//                 className={`px-5 py-2.5 rounded-xl text-sm font-medium capitalize transition-all duration-200 ${
//                   selectedFilter === filter
//                     ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
//                     : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
//                 }`}
//               >
//                 {filter === "all" ? "All Orders" : filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Orders List */}
//         <div className="space-y-8">
//           {filteredOrders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
//             >
//               {/* Order Header - ORDER ID PROMINENTLY DISPLAYED */}
//               <div className="px-6 py-5 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200">
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                   <div className="flex items-start gap-5">
//                     {/* Order Icon */}
//                     <div className="bg-white p-3.5 rounded-xl shadow-sm border border-slate-200 hidden sm:block">
//                       <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                       </svg>
//                     </div>
                    
//                     {/* Order Details - ORDER ID HIGHLIGHTED */}
//                     <div>
//                       <div className="flex items-center gap-3 flex-wrap mb-2">
//                         <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded-full">
//                           ORDER PLACED
//                         </span>
//                         <span className="text-sm font-medium text-slate-600">
//                           {new Date(order.createdAt).toLocaleDateString('en-IN', { 
//                             day: 'numeric', 
//                             month: 'long', 
//                             year: 'numeric',
//                           })}
//                         </span>
//                       </div>
                      
//                       {/* ORDER ID - LARGE AND CLEAR */}
//                       <div className="flex items-center gap-3 mb-2">
//                         <span className="text-xs font-semibold text-slate-400 uppercase">Order ID:</span>
//                         <span className="font-mono text-lg font-bold text-slate-900 bg-slate-100 px-4 py-1.5 rounded-lg">
//                           {formatOrderId(order._id)}
//                         </span>
//                         <button 
//                           onClick={() => navigator.clipboard.writeText(order._id)}
//                           className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
//                           title="Copy full Order ID"
//                         >
//                           <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
//                           </svg>
//                         </button>
//                       </div>
                      
//                       {/* Full Order ID (smaller) */}
//                       <p className="text-xs text-slate-400 font-mono mt-1">
//                         Full ID: {order._id}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 ml-0 lg:ml-auto">
//                     {/* Status Badges */}
//                     <div className="flex flex-col items-end gap-2">
//                       <div className="flex items-center gap-2">
//                         <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold ${getStatusColor(order.orderStatus)}`}>
//                           <span>{getStatusIcon(order.orderStatus)}</span>
//                           <span className="capitalize">{order.orderStatus || 'Pending'}</span>
//                         </span>
//                         <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold ${getPaymentStatusColor(order.paymentStatus)}`}>
//                           <span>{getPaymentIcon(order.paymentStatus)}</span>
//                           <span className="capitalize">{order.paymentStatus || 'Pending'}</span>
//                         </span>
//                       </div>
//                       <p className="text-xs text-slate-500">
//                         Updated: {new Date(order.updatedAt || order.createdAt).toLocaleDateString('en-IN')}
//                       </p>
//                     </div>
                    
//                     <button 
//                       onClick={() => toggleOrderExpand(order._id)}
//                       className="p-3.5 hover:bg-slate-100 rounded-xl transition-all duration-200 border border-transparent hover:border-slate-200"
//                     >
//                       <svg 
//                         className={`w-5 h-5 text-slate-600 transform transition-transform duration-300 ${expandedOrder === order._id ? 'rotate-180' : ''}`} 
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Products Preview with Images */}
//               <div className="px-6 py-5 bg-white">
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                   <div className="flex items-center gap-4">
//                     <div className="flex -space-x-3">
//                       {order.orderItems?.slice(0, 4).map((item, idx) => (
//                         <div 
//                           key={idx} 
//                           className="w-14 h-14 rounded-xl border-2 border-white bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden shadow-md"
//                           style={{ zIndex: 4 - idx }}
//                         >
//                           {item.product?.images?.[0] ? (
//                             <img 
//                               src={item.product.images[0]} 
//                               alt={item.product.name || 'Product'} 
//                               className="w-full h-full object-cover"
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = 'https://via.placeholder.com/56/94a3b8/ffffff?text=No+Image';
//                               }}
//                             />
//                           ) : (
//                             <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                             </svg>
//                           )}
//                         </div>
//                       ))}
//                       {order.orderItems?.length > 4 && (
//                         <div className="w-14 h-14 rounded-xl border-2 border-white bg-slate-200 flex items-center justify-center shadow-md font-bold text-slate-600">
//                           +{order.orderItems.length - 4}
//                         </div>
//                       )}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-slate-900 text-lg">
//                         {order.orderItems?.length} {order.orderItems?.length === 1 ? 'Item' : 'Items'}
//                       </p>
//                       <p className="text-sm text-slate-500 mt-1">
//                         {order.orderItems?.reduce((total, item) => total + (item.quantity || 0), 0)} units total
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-6">
//                     <div className="text-right">
//                       <p className="text-sm text-slate-500 mb-1">Total Amount</p>
//                       <p className="text-3xl font-bold text-slate-900">₹{order.totalAmount?.toLocaleString()}</p>
//                       <p className="text-xs text-slate-400 mt-1">Including all taxes</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Expanded Details */}
//               {expandedOrder === order._id && (
//                 <div className="border-t border-slate-200 bg-slate-50/80">
//                   <div className="px-6 py-7 space-y-7">
//                     {/* Shipping Information */}
//                     {order.shippingAddress && (
//                       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                         <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
//                           <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                           </svg>
//                           Shipping Address
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           <div>
//                             <p className="text-sm text-slate-500 mb-1">Delivery Address</p>
//                             <p className="font-medium text-slate-900 text-base">{order.shippingAddress.name || 'N/A'}</p>
//                             <p className="text-sm text-slate-600 mt-2">
//                               {order.shippingAddress.address}<br />
//                               {order.shippingAddress.city}, {order.shippingAddress.state}<br />
//                               {order.shippingAddress.pincode}
//                             </p>
//                           </div>
//                           <div>
//                             <p className="text-sm text-slate-500 mb-1">Contact Information</p>
//                             <p className="text-sm text-slate-600 flex items-center gap-2 mt-2">
//                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                               </svg>
//                               {order.shippingAddress.phone || 'No phone provided'}
//                             </p>
//                             <p className="text-sm text-slate-600 flex items-center gap-2 mt-2">
//                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                               </svg>
//                               {order.shippingAddress.email || 'No email provided'}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     {/* Products List with Full Details */}
//                     <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//                       <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
//                         <h4 className="text-base font-semibold text-slate-900 flex items-center gap-2">
//                           <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                           </svg>
//                           Order Items ({order.orderItems?.length || 0})
//                         </h4>
//                       </div>
//                       <div className="divide-y divide-slate-200">
//                         {order.orderItems?.map((item, index) => (
//                           <div key={index} className="p-6 hover:bg-slate-50 transition-colors">
//                             <div className="flex flex-col sm:flex-row sm:items-start gap-6">
//                               {/* Product Image */}
//                               <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 overflow-hidden flex-shrink-0">
//                                 {item.product?.images?.[0] ? (
//                                   <img 
//                                     src={item.product.images[0]} 
//                                     alt={item.product.name || 'Product'} 
//                                     className="w-full h-full object-cover"
//                                     onError={(e) => {
//                                       e.target.onerror = null;
//                                       e.target.src = 'https://via.placeholder.com/96/94a3b8/ffffff?text=No+Image';
//                                     }}
//                                   />
//                                 ) : (
//                                   <div className="w-full h-full flex items-center justify-center">
//                                     <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                     </svg>
//                                   </div>
//                                 )}
//                               </div>

//                               {/* Product Details */}
//                               <div className="flex-1">
//                                 <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//                                   <div>
//                                     <h5 className="text-lg font-semibold text-slate-900 mb-2">
//                                       {item.product?.name || "Product Deleted"}
//                                     </h5>
                                    
//                                     {/* Product Specifications */}
//                                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
//                                       <div>
//                                         <p className="text-xs text-slate-500 mb-1">Quantity</p>
//                                         <p className="font-medium text-slate-900">{item.quantity || 0}</p>
//                                       </div>
//                                       <div>
//                                         <p className="text-xs text-slate-500 mb-1">Unit Price</p>
//                                         <p className="font-medium text-slate-900">₹{item.price?.toLocaleString()}</p>
//                                       </div>
//                                       <div>
//                                         <p className="text-xs text-slate-500 mb-1">Total</p>
//                                         <p className="font-bold text-slate-900">₹{calculateItemTotal(item.price, item.quantity).toLocaleString()}</p>
//                                       </div>
//                                     </div>

//                                     {/* Additional Product Info */}
//                                     {item.product && (
//                                       <div className="flex flex-wrap gap-3 mt-4">
//                                         {item.product.brand && (
//                                           <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-full text-slate-600">
//                                             Brand: {item.product.brand}
//                                           </span>
//                                         )}
//                                         {item.product.category && (
//                                           <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-full text-slate-600">
//                                             Category: {item.product.category}
//                                           </span>
//                                         )}
//                                         {item.product.sku && (
//                                           <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-full text-slate-600 font-mono">
//                                             SKU: {item.product.sku}
//                                           </span>
//                                         )}
//                                       </div>
//                                     )}
//                                   </div>

//                                   {/* Item Status */}
//                                   {item.status && (
//                                     <div className={`px-4 py-2 rounded-lg text-xs font-semibold ${getStatusColor(item.status)}`}>
//                                       <span className="capitalize">{item.status}</span>
//                                     </div>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Order Summary & Payment Details */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                       {/* Order Summary */}
//                       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                         <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
//                           <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                           </svg>
//                           Order Summary
//                         </h4>
//                         <div className="space-y-3">
//                           <div className="flex justify-between text-sm">
//                             <span className="text-slate-600">Subtotal</span>
//                             <span className="font-medium text-slate-900">₹{order.totalAmount?.toLocaleString()}</span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="text-slate-600">Shipping</span>
//                             <span className="font-medium text-emerald-600">Free</span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="text-slate-600">Tax</span>
//                             <span className="font-medium text-slate-900">Included</span>
//                           </div>
//                           <div className="border-t border-slate-200 pt-3 mt-3">
//                             <div className="flex justify-between">
//                               <span className="font-semibold text-slate-900">Total</span>
//                               <span className="text-xl font-bold text-blue-600">₹{order.totalAmount?.toLocaleString()}</span>
//                             </div>
//                             <p className="text-xs text-slate-500 mt-2">Payment Status: <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${getPaymentStatusColor(order.paymentStatus)}`}>
//                               {getPaymentIcon(order.paymentStatus)} {order.paymentStatus || 'Pending'}
//                             </span></p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Order Timeline */}
//                       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                         <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
//                           <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                           </svg>
//                           Order Timeline
//                         </h4>
//                         <div className="space-y-4">
//                           <div className="flex items-start gap-3">
//                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                               <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                               </svg>
//                             </div>
//                             <div>
//                               <p className="font-medium text-slate-900">Order Placed</p>
//                               <p className="text-sm text-slate-500">
//                                 {new Date(order.createdAt).toLocaleDateString('en-IN', { 
//                                   day: 'numeric', 
//                                   month: 'long', 
//                                   year: 'numeric',
//                                   hour: '2-digit',
//                                   minute: '2-digit'
//                                 })}
//                               </p>
//                             </div>
//                           </div>
                          
//                           {order.orderStatus?.toLowerCase() === 'shipped' && (
//                             <div className="flex items-start gap-3">
//                               <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                                 <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
//                                 </svg>
//                               </div>
//                               <div>
//                                 <p className="font-medium text-slate-900">Shipped</p>
//                                 <p className="text-sm text-slate-500">
//                                   {new Date(order.updatedAt).toLocaleDateString('en-IN', { 
//                                     day: 'numeric', 
//                                     month: 'long', 
//                                     year: 'numeric',
//                                     hour: '2-digit',
//                                     minute: '2-digit'
//                                   })}
//                                 </p>
//                               </div>
//                             </div>
//                           )}
                          
//                           {order.orderStatus?.toLowerCase() === 'delivered' && (
//                             <div className="flex items-start gap-3">
//                               <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                                 <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                               </div>
//                               <div>
//                                 <p className="font-medium text-slate-900">Delivered</p>
//                                 <p className="text-sm text-slate-500">
//                                   {new Date(order.updatedAt).toLocaleDateString('en-IN', { 
//                                     day: 'numeric', 
//                                     month: 'long', 
//                                     year: 'numeric',
//                                     hour: '2-digit',
//                                     minute: '2-digit'
//                                   })}
//                                 </p>
//                               </div>
//                             </div>
//                           )}
                          
//                           {order.orderStatus?.toLowerCase() === 'cancelled' && (
//                             <div className="flex items-start gap-3">
//                               <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                                 <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                               </div>
//                               <div>
//                                 <p className="font-medium text-slate-900">Cancelled</p>
//                                 <p className="text-sm text-slate-500">
//                                   {new Date(order.updatedAt).toLocaleDateString('en-IN', { 
//                                     day: 'numeric', 
//                                     month: 'long', 
//                                     year: 'numeric',
//                                     hour: '2-digit',
//                                     minute: '2-digit'
//                                   })}
//                                 </p>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex flex-wrap gap-3 pt-2">
//                       <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 flex items-center gap-2">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                         </svg>
//                         Track Order
//                       </button>
//                       <button className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
//                         </svg>
//                         Invoice
//                       </button>
//                       <button className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                         </svg>
//                         Write Review
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;



import React, { useEffect, useState } from "react";
import { getMyOrders } from "../api/api";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await getMyOrders();
        setOrders(data);
      } catch (error) {
        console.log("Error fetching orders:", error.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusColor = (status) => {
    const colors = {
      placed: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
      processing: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20",
      shipped: "bg-purple-50 text-purple-700 ring-1 ring-purple-600/20",
      delivered: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
      cancelled: "bg-rose-50 text-rose-700 ring-1 ring-rose-600/20",
      returned: "bg-orange-50 text-orange-700 ring-1 ring-orange-600/20",
    };
    return colors[status?.toLowerCase()] || "bg-gray-50 text-gray-700 ring-1 ring-gray-600/20";
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      paid: "bg-emerald-50 text-emerald-700",
      completed: "bg-emerald-50 text-emerald-700",
      pending: "bg-yellow-50 text-yellow-700",
      failed: "bg-rose-50 text-rose-700",
      refunded: "bg-orange-50 text-orange-700",
    };
    return colors[status?.toLowerCase()] || "bg-gray-50 text-gray-700";
  };

  const getStatusIcon = (status) => {
    const icons = {
      placed: "📝",
      processing: "⚙️",
      shipped: "📦",
      delivered: "✅",
      cancelled: "❌",
      returned: "↩️",
    };
    return icons[status?.toLowerCase()] || "🔄";
  };

  const getPaymentIcon = (status) => {
    const icons = {
      paid: "💳",
      completed: "✅",
      pending: "⏳",
      failed: "❌",
      refunded: "💰",
    };
    return icons[status?.toLowerCase()] || "💵";
  };

  const filteredOrders = selectedFilter === "all" 
    ? orders 
    : orders.filter(order => order.orderStatus?.toLowerCase() === selectedFilter);

  const formatOrderId = (id) => {
    if (!id) return "N/A";
    return `#${id.slice(-12).toUpperCase()}`;
  };

  const calculateItemTotal = (price, quantity) => {
    return (price * quantity) || 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 sm:py-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-16 flex flex-col items-center justify-center border border-slate-200/60">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-slate-700 font-semibold mt-6 sm:mt-8 text-lg sm:text-xl text-center">Loading your orders...</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 sm:mt-3 text-center">Please wait while we fetch your order history</p>
          </div>
        </div>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 sm:py-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-16 text-center border border-slate-200/60">
            <div className="max-w-lg mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-28 h-28 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-inner">
                <svg className="w-14 h-14 sm:w-20 sm:h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">No orders yet</h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8 sm:mb-10 px-4">Looks like you haven't placed any orders yet. Start shopping to see your orders here!</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Start Shopping
                </button>
                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-xl sm:rounded-2xl hover:bg-slate-50 transition-all duration-200 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Browse Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-0">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-600/20 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">My Orders</h1>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 mt-1 sm:mt-2">Track, manage, and review all your purchases</p>
              </div>
            </div>
            
            {/* Order Statistics */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 px-2 sm:px-0">
              <div className="bg-white px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200">
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Orders</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-0.5 sm:mt-1">{orders.length}</p>
              </div>
              <div className="bg-white px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200">
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Spent</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600 mt-0.5 sm:mt-1">
                  ₹{orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Filter Tabs - Horizontal Scroll on Mobile */}
          <div className="relative mt-4 sm:mt-8">
            <div className="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar px-2 sm:px-0">
              <div className="flex items-center gap-1.5 sm:gap-3 flex-nowrap">
                <span className="text-xs sm:text-sm font-medium text-slate-600 mr-1 sm:mr-2 sticky left-0 bg-slate-50 px-2 py-1 rounded-full">Filter:</span>
                {["all", "placed", "processing", "shipped", "delivered", "cancelled"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium capitalize whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                      selectedFilter === filter
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {filter === "all" ? "All" : filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {filteredOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Order Header */}
              <div className="px-3 sm:px-6 py-3 sm:py-5 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-start lg:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 sm:gap-5">
                    {/* Order Icon - Hidden on very small screens */}
                    <div className="hidden xs:block bg-white p-2 sm:p-3.5 rounded-lg sm:rounded-xl shadow-sm border border-slate-200">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    
                    {/* Order Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap mb-1 sm:mb-2">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                          ORDERED
                        </span>
                        <span className="text-[10px] sm:text-sm font-medium text-slate-600">
                          {new Date(order.createdAt).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      
                      {/* Order ID Section */}
                      <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 mb-1">
                        <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase">Order ID:</span>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <span className="font-mono text-xs sm:text-sm lg:text-base font-bold text-slate-900 bg-slate-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none">
                            {formatOrderId(order._id)}
                          </span>
                          <button 
                            onClick={() => navigator.clipboard.writeText(order._id)}
                            className="p-1 sm:p-2 hover:bg-slate-200 rounded-lg transition-colors flex-shrink-0"
                            title="Copy full Order ID"
                          >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Full Order ID - Hidden on mobile */}
                      <p className="hidden sm:block text-[10px] sm:text-xs text-slate-400 font-mono mt-1 truncate">
                        Full ID: {order._id}
                      </p>
                    </div>
                  </div>

                  {/* Status and Expand Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
                    {/* Status Badges - Stack on mobile */}
                    <div className="flex flex-col xs:flex-row xs:items-end gap-1.5 sm:gap-2">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className={`inline-flex items-center gap-0.5 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold ${getStatusColor(order.orderStatus)}`}>
                          <span>{getStatusIcon(order.orderStatus)}</span>
                          <span className="capitalize">{order.orderStatus || 'Pending'}</span>
                        </span>
                        <span className={`inline-flex items-center gap-0.5 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold ${getPaymentStatusColor(order.paymentStatus)}`}>
                          <span>{getPaymentIcon(order.paymentStatus)}</span>
                          <span className="capitalize hidden xs:inline">{order.paymentStatus || 'Pending'}</span>
                        </span>
                      </div>
                      <p className="text-[8px] sm:text-xs text-slate-500 text-right">
                        Updated: {new Date(order.updatedAt || order.createdAt).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => toggleOrderExpand(order._id)}
                      className="p-2 sm:p-3.5 hover:bg-slate-100 rounded-lg sm:rounded-xl transition-all duration-200 border border-transparent hover:border-slate-200 flex-shrink-0"
                    >
                      <svg 
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-600 transform transition-transform duration-300 ${expandedOrder === order._id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Preview */}
              <div className="px-3 sm:px-6 py-3 sm:py-5 bg-white">
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex -space-x-2 sm:-space-x-3">
                      {order.orderItems?.slice(0, 4).map((item, idx) => (
                        <div 
                          key={idx} 
                          className="w-10 h-10 sm:w-12 sm:h-14 rounded-lg sm:rounded-xl border-2 border-white bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden shadow-md"
                          style={{ zIndex: 4 - idx }}
                        >
                          {item.product?.images?.[0] ? (
                            <img 
                              src={item.product.images[0]} 
                              alt={item.product.name || 'Product'} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/56/94a3b8/ffffff?text=No+Image';
                              }}
                            />
                          ) : (
                            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                      ))}
                      {order.orderItems?.length > 4 && (
                        <div className="w-10 h-10 sm:w-12 sm:h-14 rounded-lg sm:rounded-xl border-2 border-white bg-slate-200 flex items-center justify-center shadow-md font-bold text-xs sm:text-sm text-slate-600">
                          +{order.orderItems.length - 4}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 text-sm sm:text-base lg:text-lg">
                        {order.orderItems?.length} {order.orderItems?.length === 1 ? 'Item' : 'Items'}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">
                        {order.orderItems?.reduce((total, item) => total + (item.quantity || 0), 0)} units
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 sm:gap-6">
                    <div className="text-right">
                      <p className="text-[10px] sm:text-sm text-slate-500">Total</p>
                      <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-900">₹{order.totalAmount?.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedOrder === order._id && (
                <div className="border-t border-slate-200 bg-slate-50/80">
                  <div className="px-3 sm:px-6 py-4 sm:py-7 space-y-4 sm:space-y-7">
                    {/* Shipping Information */}
                    {order.shippingAddress && (
                      <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Shipping Address
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <p className="text-xs sm:text-sm text-slate-500 mb-1">Delivery Address</p>
                            <p className="font-medium text-slate-900 text-sm sm:text-base">{order.shippingAddress.name || 'N/A'}</p>
                            <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2 break-words">
                              {order.shippingAddress.address}<br />
                              {order.shippingAddress.city}, {order.shippingAddress.state}<br />
                              {order.shippingAddress.pincode}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-slate-500 mb-1">Contact</p>
                            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 break-all">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="break-all">{order.shippingAddress.phone || 'No phone'}</span>
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 break-all">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="break-all">{order.shippingAddress.email || 'No email'}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Products List */}
                    <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 flex items-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          Items ({order.orderItems?.length || 0})
                        </h4>
                      </div>
                      <div className="divide-y divide-slate-200">
                        {order.orderItems?.map((item, index) => (
                          <div key={index} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors">
                            <div className="flex flex-col xs:flex-row xs:items-start gap-3 sm:gap-6">
                              {/* Product Image */}
                              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg sm:rounded-xl border border-slate-200 overflow-hidden flex-shrink-0 mx-auto xs:mx-0">
                                {item.product?.images?.[0] ? (
                                  <img 
                                    src={item.product.images[0]} 
                                    alt={item.product.name || 'Product'} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = 'https://via.placeholder.com/96/94a3b8/ffffff?text=No+Image';
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                )}
                              </div>

                              {/* Product Details */}
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                  <div>
                                    <h5 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 mb-1 sm:mb-2 break-words">
                                      {item.product?.name || "Product Deleted"}
                                    </h5>
                                    
                                    {/* Product Specifications */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-2">
                                      <div>
                                        <p className="text-[10px] sm:text-xs text-slate-500">Qty</p>
                                        <p className="text-xs sm:text-sm font-medium text-slate-900">{item.quantity || 0}</p>
                                      </div>
                                      <div>
                                        <p className="text-[10px] sm:text-xs text-slate-500">Price</p>
                                        <p className="text-xs sm:text-sm font-medium text-slate-900">₹{item.price?.toLocaleString()}</p>
                                      </div>
                                      <div>
                                        <p className="text-[10px] sm:text-xs text-slate-500">Total</p>
                                        <p className="text-xs sm:text-sm font-bold text-slate-900">₹{calculateItemTotal(item.price, item.quantity).toLocaleString()}</p>
                                      </div>
                                    </div>

                                    {/* Additional Product Info */}
                                    {item.product && (
                                      <div className="flex flex-wrap gap-1 sm:gap-3 mt-2 sm:mt-4">
                                        {item.product.brand && (
                                          <span className="text-[8px] sm:text-xs bg-slate-100 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-600">
                                            {item.product.brand}
                                          </span>
                                        )}
                                        {item.product.category && (
                                          <span className="text-[8px] sm:text-xs bg-slate-100 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-600">
                                            {item.product.category}
                                          </span>
                                        )}
                                      </div>
                                    )}
                                  </div>

                                  {/* Item Status */}
                                  {item.status && (
                                    <div className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[8px] sm:text-xs font-semibold ${getStatusColor(item.status)} self-start`}>
                                      <span className="capitalize">{item.status}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Summary & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Order Summary */}
                      <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Summary
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-slate-600">Subtotal</span>
                            <span className="font-medium text-slate-900">₹{order.totalAmount?.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-slate-600">Shipping</span>
                            <span className="font-medium text-emerald-600">Free</span>
                          </div>
                          <div className="border-t border-slate-200 pt-2 sm:pt-3 mt-2">
                            <div className="flex justify-between">
                              <span className="font-semibold text-slate-900 text-sm sm:text-base">Total</span>
                              <span className="text-base sm:text-lg lg:text-xl font-bold text-blue-600">₹{order.totalAmount?.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Order Timeline */}
                      <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Timeline
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-medium text-slate-900">Order Placed</p>
                              <p className="text-[10px] sm:text-xs text-slate-500 break-words">
                                {new Date(order.createdAt).toLocaleDateString('en-IN', { 
                                  day: 'numeric', 
                                  month: 'short', 
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                          
                          {order.orderStatus?.toLowerCase() === 'shipped' && (
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-slate-900">Shipped</p>
                                <p className="text-[10px] sm:text-xs text-slate-500 break-words">
                                  {new Date(order.updatedAt).toLocaleDateString('en-IN', { 
                                    day: 'numeric', 
                                    month: 'short', 
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          )}
                          
                          {order.orderStatus?.toLowerCase() === 'delivered' && (
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-slate-900">Delivered</p>
                                <p className="text-[10px] sm:text-xs text-slate-500 break-words">
                                  {new Date(order.updatedAt).toLocaleDateString('en-IN', { 
                                    day: 'numeric', 
                                    month: 'short', 
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          )}
                          
                          {order.orderStatus?.toLowerCase() === 'cancelled' && (
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-slate-900">Cancelled</p>
                                <p className="text-[10px] sm:text-xs text-slate-500 break-words">
                                  {new Date(order.updatedAt).toLocaleDateString('en-IN', { 
                                    day: 'numeric', 
                                    month: 'short', 
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                      <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 flex items-center justify-center gap-1 sm:gap-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span className="hidden xs:inline">Track</span>
                      </button>
                      <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-slate-300 text-slate-700 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1 sm:gap-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        <span className="hidden xs:inline">Invoice</span>
                      </button>
                      <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-slate-300 text-slate-700 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1 sm:gap-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="hidden xs:inline">Review</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add custom CSS for hide-scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
          .xs\\:flex {
            display: flex;
          }
          .xs\\:hidden {
            display: none;
          }
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:items-center {
            align-items: center;
          }
          .xs\\:items-start {
            align-items: flex-start;
          }
          .xs\\:gap-2 {
            gap: 0.5rem;
          }
          .xs\\:inline {
            display: inline;
          }
          .xs\\:max-w-[200px] {
            max-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default MyOrders;