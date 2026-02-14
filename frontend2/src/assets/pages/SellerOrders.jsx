// import React, { useEffect, useState } from "react";
// import {
//   getSellerOrders,
//   updateOrderStatus,
// } from "../services/SellerApi";

// const SellerOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await getSellerOrders();
//       setOrders(res.data || []);
//       // console.log(res.data);

//     } catch (error) {
//       console.log("Error fetching orders:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       await updateOrderStatus(orderId, { status: newStatus });
//       fetchOrders(); // refresh list
//     } catch (error) {
//       console.log("Failed to update status", error);
//     }
//   };

//   if (loading) return <div className="p-6">Loading orders...</div>;

//   return (
//     <div className="p-6 min-h-screen bg-gray-50">
//       <h1 className="text-2xl font-bold mb-6">My Orders</h1>

//       {orders.length === 0 ? (
//         <p>No orders found</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white p-6 rounded-lg shadow mb-6"
//           >
//             {/* Order Header */}
//             <div className="flex justify-between mb-4">
//               <div>
//                 <p className="font-semibold">Order ID:</p>
//                 <p className="text-sm text-gray-600">{order._id}</p>
//               </div>

//               <div>
//                 <p className="font-semibold">Status:</p>
//                 <select
//                   value={order.orderStatus}
//                   onChange={(e) =>
//                     handleStatusChange(order._id, e.target.value)
//                   }
//                   className="border p-2 rounded"
//                 >
//                   <option value="placed">Placed</option>
//                   <option value="shipped">Shipped</option>
//                   <option value="delivered">Delivered</option>
//                   <option value="cancelled">Cancelled</option>
//                 </select>
//               </div>
//             </div>

//             {/* Customer Info */}
//             <div className="mb-4">
//               <p className="font-semibold">Customer:</p>
//               <p>{order.shippingAddress?.name}</p>
//               <p className="text-sm text-gray-600">
//                 {order.shippingAddress?.phone}
//               </p>
//               <p className="text-sm text-gray-600">
//                 {order.shippingAddress?.address},{" "}
//                 {order.shippingAddress?.city},{" "}
//                 {order.shippingAddress?.state} -{" "}
//                 {order.shippingAddress?.pincode}
//               </p>
//             </div>

//             {/* Order Items */}
//             <div>
//               <p className="font-semibold mb-2">Products:</p>

//               {order.orderItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="flex justify-between border-b py-2"
//                 >
//                   <div>
//                     <p>{item.product?.title}</p>
//                     <p className="text-sm text-gray-500">
//                       Qty: {item.quantity}
//                     </p>
//                   </div>
//                   <p>₹{item.price}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Total */}
//             <div className="text-right mt-4 font-bold">
//               Total: ₹{order.totalAmount}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default SellerOrders;

import React, { useEffect, useState } from "react";
import { getSellerOrders, updateOrderStatus } from "../services/SellerApi";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await getSellerOrders();
      setOrders(res.data || []);
    } catch (error) {
      console.log("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      placed: "bg-blue-50 text-blue-700 ring-blue-600/20",
      shipped: "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
      delivered: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
      cancelled: "bg-rose-50 text-rose-700 ring-rose-600/20",
    };
    return colors[status] || "bg-gray-50 text-gray-700 ring-gray-600/20";
  };

  const getStatusIcon = (status) => {
    const icons = {
      placed: "📝",
      shipped: "📦",
      delivered: "✅",
      cancelled: "❌",
    };
    return icons[status] || "🔄";
  };

const handleStatusChange = async (orderId, newStatus) => {
  try {
    await updateOrderStatus(orderId, { status: newStatus });
    fetchOrders(); // Refresh the list to see updated status
  } catch (error) {
    console.log("Failed to update status", error);
  }
};

  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center max-w-md w-full mx-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-100 border-t-blue-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-gray-600 font-medium mt-6">
            Loading your orders...
          </p>
          <p className="text-sm text-gray-400 mt-2">Please wait</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </span>
                Seller Orders
              </h1>
              <p className="text-gray-500 mt-1 ml-1">
                Manage and track all your customer orders
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200">
                <span className="text-sm font-medium text-gray-600">
                  Total Orders
                </span>
                <span className="ml-2 text-2xl font-bold text-gray-900">
                  {orders.length}
                </span>
              </div>
              <button className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No orders yet
              </h3>
              <p className="text-gray-500 mb-6">
                When customers place orders, they will appear here with
                real-time updates.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-600/20">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                View Products
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ₹
                      {orders
                        .reduce(
                          (sum, order) => sum + (order.totalAmount || 0),
                          0,
                        )
                        .toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Pending Orders</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {orders.filter((o) => o.orderStatus === "placed").length}
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Shipped</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {orders.filter((o) => o.orderStatus === "shipped").length}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Delivered</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {
                        orders.filter((o) => o.orderStatus === "delivered")
                          .length
                      }
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders List */}
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Order Header */}
                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-2.5 rounded-lg shadow-sm border border-gray-200">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order
                          </p>
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusColor(order.orderStatus)}`}
                          >
                            <span>{getStatusIcon(order.orderStatus)}</span>
                            <span className="capitalize">
                              {order.orderStatus}
                            </span>
                          </span>
                        </div>
                        <p className="font-mono text-sm font-semibold text-gray-900 mt-1">
                          #{order._id.slice(-12).toUpperCase()}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </span>
                      </div>
                      <select
                        value={order.orderStatus}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                      >
                        <option value="placed">Placed</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <button
                        onClick={() => toggleOrderExpand(order._id)}
                        className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${expandedOrder === order._id ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Customer & Products Preview */}
                <div className="px-6 py-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Customer Info */}
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-2.5 rounded-full">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {order.shippingAddress?.name || "Customer"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {order.shippingAddress?.phone || "No phone"}
                        </p>
                      </div>
                    </div>

                    {/* Products Preview with Images */}
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {order.orderItems?.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 rounded-lg border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm"
                            style={{ zIndex: 3 - idx }}
                          >
                            {item.product?.images?.[0] ? (
                              <img
                                src={item.product.images[0]}
                                alt={item.product.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src =
                                    "https://via.placeholder.com/40?text=No+Image";
                                }}
                              />
                            ) : (
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            )}
                          </div>
                        ))}
                        {order.orderItems?.length > 3 && (
                          <div className="w-10 h-10 rounded-lg border-2 border-white bg-gray-100 flex items-center justify-center shadow-sm">
                            <span className="text-xs font-medium text-gray-600">
                              +{order.orderItems.length - 3}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Total Amount</p>
                        <p className="text-xl font-bold text-gray-900">
                          ₹{order.totalAmount?.toLocaleString() || 0}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedOrder === order._id && (
                  <div className="border-t border-gray-200 bg-gray-50/50">
                    <div className="px-6 py-5 space-y-6">
                      {/* Full Shipping Address */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Shipping Address
                        </h4>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <p className="font-medium text-gray-900">
                            {order.shippingAddress?.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {order.shippingAddress?.phone}
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            {order.shippingAddress?.address},<br />
                            {order.shippingAddress?.city},{" "}
                            {order.shippingAddress?.state}
                            <br />
                            {order.shippingAddress?.pincode}
                          </p>
                        </div>
                      </div>

                      {/* All Products with Details */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Order Items
                        </h4>
                        <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
                          {order.orderItems?.map((item, index) => (
                            <div
                              key={item._id || index}
                              className="p-4 flex items-center gap-4"
                            >
                              {/* Product Image */}
                              <div className="w-16 h-16 bg-gray-100 rounded-lg border border-gray-200 flex-shrink-0 overflow-hidden">
                                {item.product?.images?.[0] ? (
                                  <img
                                    src={item.product.images[0]}
                                    alt={item.product.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src =
                                        "https://via.placeholder.com/64?text=No+Image";
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <svg
                                      className="w-8 h-8 text-gray-400"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>

                              {/* Product Details */}
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate">
                                  {item.product?.title || "Product Name"}
                                </p>
                                {item.product?.brand && (
                                  <p className="text-sm text-gray-500 mt-0.5">
                                    {item.product.brand}
                                  </p>
                                )}
                                <div className="flex items-center gap-4 mt-2">
                                  <span className="text-sm text-gray-500">
                                    Qty: {item.quantity}
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    ×
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    ₹{item.price?.toLocaleString()}
                                  </span>
                                </div>
                              </div>

                              {/* Total */}
                              <div className="text-right">
                                <p className="text-xs text-gray-500 mb-1">
                                  Item Total
                                </p>
                                <p className="font-bold text-gray-900">
                                  ₹
                                  {(
                                    item.price * item.quantity
                                  )?.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Order Summary */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Order Summary
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              Order ID: {order._id}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">
                              Total Amount
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                              ₹{order.totalAmount?.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerOrders;
