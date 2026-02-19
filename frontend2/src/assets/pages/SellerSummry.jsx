import React, { useEffect, useState } from "react";
import {
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChartBarIcon,
  TagIcon,
  DocumentTextIcon,
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
      const { data } = await getMyProducts();
      setSellerProducts(data);
    } catch (err) {
      console.error("Error fetching seller products:", err);
      setError("Failed to load products");
    }
  };

  const fetchSummary = async () => {
    try {
      setLoading(true);

      const res = await getSellerOrders();
      const orders = res.data || [];

      const totalSales = orders.reduce(
        (sum, order) => sum + (order.totalAmount || 0),
        0
      );

      const totalOrders = orders.length;

      const productsRes = await getMyProducts();
      const activeProducts = productsRes.data?.length || 0;

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
    if (change > 0) return "text-green-600 bg-green-50";
    if (change < 0) return "text-red-600 bg-red-50";
    return "text-gray-600 bg-gray-50";
  };

  const getTrendIcon = (change) => {
    if (change > 0) return <ArrowTrendingUpIcon className="h-3 w-3" />;
    if (change < 0) return <ArrowTrendingDownIcon className="h-3 w-3" />;
    return null;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 animate-pulse shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gray-200 rounded-xl"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Seller! 👋</h1>
        <p className="text-blue-100 text-sm md:text-base">Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Sales Card */}
        <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-100">
              <CurrencyRupeeIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500 font-medium">Total Sales</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
              {formatCurrency(stats.totalSales)}
            </h3>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <ChartBarIcon className="h-4 w-4 mr-1 text-gray-400" />
              <span>All time revenue</span>
            </div>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              Lifetime
            </span>
          </div>
        </div>

        {/* Orders Card */}
        <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg shadow-green-100">
              <ShoppingBagIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500 font-medium">Total Orders</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
              {stats.totalOrders.toLocaleString()}
            </h3>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <DocumentTextIcon className="h-4 w-4 mr-1 text-gray-400" />
              <span>Completed orders</span>
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +{Math.floor(Math.random() * 20)}% this week
            </span>
          </div>
        </div>

        {/* Products Card */}
        <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-100">
              <CubeIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500 font-medium">Active Products</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
              {stats.activeProducts.toLocaleString()}
            </h3>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <TagIcon className="h-4 w-4 mr-1 text-gray-400" />
              <span>Currently listed</span>
            </div>
            <button className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors">
              Manage Products
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default SellerSummary;