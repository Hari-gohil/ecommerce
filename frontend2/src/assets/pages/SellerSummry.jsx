import React from "react";
import {
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getSellerSummary } from "../services/SellerApi";

const SellerSummary = () => {

  const [stats, setStats] = useState({
  totalSales: 0,
  totalOrders: 0,
  activeProducts: 0,
});
useEffect(() => {
  fetchSummary();
}, []);

const fetchSummary = async () => {
  const res = await getSellerSummary(sellerId);
  setStats(res.data);
};
const sellerId = localStorage.getItem("sellerId");
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Sales */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex justify-between mb-4">
          <CurrencyRupeeIcon className="h-6 w-6 text-blue-600" />
          <span className="flex text-green-600 text-sm">
            <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
            {stats.salesChange}%
          </span>
        </div>
        <h3 className="text-2xl font-bold">{stats.totalSales}</h3>
        <p>Total Sales</p>
      </div>

      {/* Orders */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex justify-between mb-4">
          <ShoppingBagIcon className="h-6 w-6 text-green-600" />
          <span className="flex text-green-600 text-sm">
            <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
            {stats.ordersChange}%
          </span>
        </div>
        <h3 className="text-2xl font-bold">{stats.totalOrders}</h3>
        <p>Total Orders</p>
      </div>

      {/* Products */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex justify-between mb-4">
          <CubeIcon className="h-6 w-6 text-purple-600" />
          <span className="flex text-green-600 text-sm">
            <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
            {stats.productsChange}%
          </span>
        </div>
        <h3 className="text-2xl font-bold">{stats.activeProducts}</h3>
        <p>Active Products</p>
      </div>

    </div>
  );
};

export default SellerSummary;
