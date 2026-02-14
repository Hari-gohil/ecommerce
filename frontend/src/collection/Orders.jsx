import React, { useEffect, useState } from "react";
import { getMyOrders } from "../api/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await getMyOrders();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      alert("Please login first");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl font-semibold">Loading Orders...</div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-xl font-semibold">No Orders Found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">My Orders</h2>

        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-md p-6 mb-6"
          >
            {/* Order Header */}
            <div className="flex justify-between mb-4">
              <div>
                <p className="font-semibold">Order ID:</p>
                <p className="text-gray-600">{order._id}</p>
              </div>

              <div>
                <p className="font-semibold">Order Status:</p>
                <p className="text-blue-600 capitalize">
                  {order.orderStatus}
                </p>
              </div>

              <div>
                <p className="font-semibold">Payment:</p>
                <p className="text-green-600 capitalize">
                  {order.paymentStatus}
                </p>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Items:</h3>

              {order.orderItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-3"
                >
                  <div>
                    <p className="font-medium">
                      {item.product?.title || "Product"}
                    </p>
                    <p className="text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <div className="font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping Address */}
            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold mb-2">Shipping Address:</h3>
              <p>{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.phone}</p>
              <p>
                {order.shippingAddress.address},{" "}
                {order.shippingAddress.city},{" "}
                {order.shippingAddress.state} -{" "}
                {order.shippingAddress.pincode}
              </p>
            </div>

            {/* Total */}
            <div className="border-t pt-4 mt-4 flex justify-between">
              <p className="font-bold text-lg">Total Amount:</p>
              <p className="font-bold text-lg text-green-600">
                ₹{order.totalAmount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
