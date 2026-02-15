import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCart, removeFromCart, updateCartQuantity } from "../api/api";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Fetch Cart
  const fetchCart = async () => {
    try {
      const { data } = await getCart();
      setCart(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Remove Item
  const removeItem = async (productId) => {
    try {
      await removeFromCart(productId);
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  // Calculate Subtotal
  const calculateSubtotal = () => {
    if (!cart?.items) return 0;
    return cart.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  // Calculate Total Discount
  const calculateTotalDiscount = () => {
    if (!cart?.items) return 0;
    return cart.items.reduce(
      (total, item) =>
        total +
        (item.product.price - item.product.discountPrice) * item.quantity,
      0,
    );
  };

  // Calculate Final Amount
  const calculateFinalAmount = () => {
    if (!cart?.items) return 0;
    return cart.items.reduce(
      (total, item) => total + item.product.discountPrice * item.quantity,
      0,
    );
  };

  // Update Quantity
  const updateQuantity = async (productId, newQuantity) => {
  if (newQuantity < 1) return;

  // 1️⃣ Update UI instantly
  setCart((prevCart) => ({
    ...prevCart,
    items: prevCart.items.map((item) =>
      item.product._id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ),
  }));

  // 2️⃣ Update backend
  try {
    await updateCartQuantity(productId, newQuantity);
  } catch (error) {
    console.error(error);
  }
};

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );

  if (!cart || cart.items.length === 0)
    return (
      <div className="container mx-auto p-6 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything to your cart yet
        </p>
        <button
          onClick={() => (window.location.href = "/products")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );

  return (
    <div className="container mx-auto p-4 lg:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Shopping Cart
        </h1>
        <p className="text-gray-600">
          {cart.items.length} {cart.items.length === 1 ? "Item" : "Items"}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="lg:w-2/3">
          {cart.items.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-200 p-4 mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                {/* Product Image */}
                <div className="w-full sm:w-24 h-24 flex-shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/96?text=No+Image";
                    }}
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h2 className="font-semibold text-lg text-gray-800">
                        {item.product.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-1">
                        {item.product.brand}
                      </p>
                      {item.product.description && (
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {item.product.description}
                        </p>
                      )}
                    </div>

                    {/* Price Section */}
                    <div className="mt-2 sm:mt-0 text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{item.product.discountPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{item.product.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">
                        Save ₹
                        {(
                          item.product.price - item.product.discountPrice
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">Quantity:</span>

                      <div className="flex items-center border rounded-lg">
                        {/* Decrease Button */}
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity - 1)
                          }
                          className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>

                        {/* Quantity Number */}
                        <span className="px-4 py-1 font-medium">
                          {item.quantity}
                        </span>

                        {/* Increase Button */}
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity + 1)
                          }
                          className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.product._id)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>
                  Subtotal ({cart.items.length}{" "}
                  {cart.items.length === 1 ? "item" : "items"})
                </span>
                <span>₹{calculateSubtotal().toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Total Discount</span>
                <span>- ₹{calculateTotalDiscount().toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total Amount</span>
                  <span>₹{calculateFinalAmount().toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Inclusive of all taxes
                </p>
              </div>
            </div>

            <button 
            onClick={() => navigate("/order")}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Proceed to Checkout
            </button>

            <button
              onClick={() => (window.location.href = "/products")}
              className="w-full mt-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
