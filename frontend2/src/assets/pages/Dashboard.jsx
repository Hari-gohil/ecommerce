import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  CubeIcon,
  PlusCircleIcon,
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [sellerInfo, setSellerInfo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  // useEffect(() => {
  //   const sellerData = localStorage.getItem("sellerInfo");

  //   if (sellerData) {
  //     setSellerInfo(JSON.parse(sellerData));
  //   } else {
  //     navigate("/seller/login");
  //   }
  // }, [navigate]);
  useEffect(() => {
  // Auto-collapse sidebar on small screens when window resizes
  const handleResize = () => {
    if (window.innerWidth < 768 && sidebarOpen) {
      setSidebarOpen(false);
    } else if (window.innerWidth >= 768 && !sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  window.addEventListener("resize", handleResize);

  // Cleanup listener on unmount
  return () => window.removeEventListener("resize", handleResize);
}, [sidebarOpen]);

  // Navigation items (match your routes)
  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: HomeIcon },
    { id: "products", name: "Products", icon: CubeIcon },
    { id: "orders", name: "Orders", icon: ShoppingBagIcon },
    { id: "add-product", name: "Add Product", icon: PlusCircleIcon },
    { id: "users", name: "Users", icon: UserGroupIcon },
  ];

  const handleLogout = () => {
    localStorage.removeItem("sellerInfo");
    localStorage.removeItem("sellerId");
    navigate("/seller/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 transition-all duration-300 relative`}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          {sidebarOpen ? (
            <>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <ShoppingBagIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-lg text-gray-900">
                    Seller Panel
                  </h1>
                  <p className="text-xs text-gray-500">
                    {sellerInfo?.shopName || "Shop Name"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <div className="p-2 bg-blue-600 rounded-lg">
                <ShoppingBagIcon className="h-6 w-6 text-white" />
              </div>

              <button
                onClick={() => setSidebarOpen(true)}
                className="mt-4 p-1 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRightIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="p-4">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive =
                (location.pathname === "/seller" &&
                  item.id === "dashboard") ||
                location.pathname.startsWith(`/seller/${item.id}`);

              return (
                <button
                  key={item.id}
                  onClick={() => navigate(`/seller/${item.id}`)}
                  className={`w-full flex items-center ${
                    sidebarOpen
                      ? "justify-start px-4"
                      : "justify-center p-3"
                  } py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon
                    className={`h-5 w-5 ${
                      isActive ? "text-blue-600" : "text-gray-500"
                    }`}
                  />

                  {sidebarOpen && (
                    <span className="ml-3 font-medium">
                      {item.name}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center ${
              sidebarOpen
                ? "justify-start px-4"
                : "justify-center p-3"
            } py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors`}
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            {sidebarOpen && (
              <span className="ml-3 font-medium">Logout</span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, {sellerInfo?.shopName || "Seller"}!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="font-semibold text-blue-600">
                {sellerInfo?.shopName?.charAt(0) || "S"}
              </span>
            </div>

            {sidebarOpen && (
              <div>
                <p className="font-medium text-gray-900">
                  {sellerInfo?.shopName || "Shop Name"}
                </p>
                <p className="text-sm text-gray-500">Seller</p>
              </div>
            )}
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
