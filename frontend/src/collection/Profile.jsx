import React, { useEffect, useState } from "react";
import { getUserProfile , getMyOrders} from "../api/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [ordersCount, setOrdersCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    fetchProfile();
  }, []);

  const navigate = useNavigate();

  const fetchProfile = async () => {
  try {
    const { data } = await getUserProfile();
    setUser(data);

    // Wishlist count
    setWishlistCount(data.wishlist?.length || 0);

    // Orders count
    const ordersRes = await getMyOrders();
    setOrdersCount(ordersRes.data?.length || 0);

  } catch (err) {
    console.error(err);
  }
};


  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative flex-1 p-4 sm:p-6 flex justify-center items-start min-h-screen">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6 sm:p-8 w-full max-w-2xl transform transition-all hover:scale-[1.02] duration-300">
          {/* Header */}
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 bg-green-400 border-4 border-white rounded-full"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Profile
            </h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              Welcome back, {user.name}!
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {/* Name */}
            <div className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
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
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">Full Name</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    {user.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">
                    Email Address
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800 break-all">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">
                    Phone Number
                  </p>
                  <p
                    className={`text-base sm:text-lg font-semibold ${user.phone ? "text-gray-800" : "text-gray-400 italic"}`}
                  >
                    {user.phone || "Not Added"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center sm:justify-end border-t pt-6">
            <button
              onClick={() => navigate("/edit-profile")}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transform transition-all duration-200 hover:scale-105"
            >
              Edit Profile
            </button>
          </div>

          {/* Stats Section (Reviews Removed) */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200">
              <p className="text-2xl font-bold text-blue-600">{ordersCount}</p>
            </div>

            <div className="text-center p-3 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200">
              <p className="text-2xl font-bold text-purple-600">{wishlistCount}</p>
            </div>
          </div>

          {/* Member Since */}
          {user.createdAt && (
            <div className="mt-4 text-center text-sm text-gray-400">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Profile;
