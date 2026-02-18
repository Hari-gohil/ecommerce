import React, { useEffect, useState } from "react";
import {
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import { getMyProducts, getSellerOrders } from "../services/SellerApi";

const SellerSummary = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    activeProducts: 0,
    salesChange: 0,
    ordersChange: 0,
    productsChange: 0,
  });
  const [loading, setLoading] = useState(true);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [error, setError] = useState("");
  const sellerId = localStorage.getItem("sellerId");

  useEffect(() => {
    fetchSummary();
  }, [sellerId]);

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const fetchSellerProducts = async () => {
  try {
    const { data } = await getMyProducts(); // call your API
    setSellerProducts(data); // ✅ update sellerProducts state
  } catch (err) {
    console.error("Error fetching seller products:", err);
    setError("Failed to load products"); // ✅ now setError exists
  }
};

  const fetchSummary = async () => {
    try {
      setLoading(true);
      // Fetch all orders for this seller
      const res = await getSellerOrders(sellerId);
      const orders = res.data || [];

      // Calculate totals dynamically
      const totalSales = orders.reduce(
        (sum, order) => sum + (order.totalAmount || 0),
        0,
      );
      const totalOrders = orders.length;

      // If you have a separate API for products, you can fetch activeProducts dynamically
      // For now we keep it 0 or from previous API
      const activeProducts = stats.activeProducts;

      setStats({
        totalSales,
        totalOrders,
        activeProducts,
        salesChange: 0,
        ordersChange: 0,
        productsChange: 0,
      });
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTrendColor = (change) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  const getTrendIcon = (change) => {
    if (change > 0) return <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />;
    if (change < 0) return <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />;
    return null;
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl border p-4 md:p-6 animate-pulse"
          >
            <div className="h-16 md:h-20 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Sales Card */}
      <div className="bg-white rounded-xl border p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-3 md:mb-4">
          <div className="flex items-center mb-2 xs:mb-0">
            <div className="p-2 bg-blue-50 rounded-lg mr-3">
              <CurrencyRupeeIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            </div>
            <span
              className={`flex items-center text-xs md:text-sm font-medium ${getTrendColor(stats.salesChange)}`}
            >
              {getTrendIcon(stats.salesChange)}
              {Math.abs(stats.salesChange)}%
            </span>
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          ₹{stats.totalSales.toLocaleString()}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">Total Sales</p>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">All Orders</p>
        </div>
      </div>

      {/* Orders Card */}
      <div className="bg-white rounded-xl border p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-3 md:mb-4">
          <div className="flex items-center mb-2 xs:mb-0">
            <div className="p-2 bg-green-50 rounded-lg mr-3">
              <ShoppingBagIcon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
            </div>
            <span
              className={`flex items-center text-xs md:text-sm font-medium ${getTrendColor(stats.ordersChange)}`}
            >
              {getTrendIcon(stats.ordersChange)}
              {Math.abs(stats.ordersChange)}%
            </span>
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          {stats.totalOrders.toLocaleString()}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">Total Orders</p>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">All Orders</p>
        </div>
      </div>

      {/* Products Card */}
      <div className="bg-white rounded-xl border p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-purple-50 rounded-lg mr-3">
            <CubeIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
          </div>
          <span
            className={`flex items-center text-xs md:text-sm font-medium ${getTrendColor(
              stats.productsChange
            )}`}
          >
            {getTrendIcon(stats.productsChange)}
            {Math.abs(stats.productsChange)}%
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          {stats.activeProducts.toLocaleString()}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">Active Products</p>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">Currently selling</p>
        </div>
      </div>
    </div>
  );
};

export default SellerSummary;
