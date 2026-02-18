import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/api";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await getUserProfile();
      setUser(data);
      console.log(data);
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
          <p className="mt-4 text-lg font-medium text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Profile Content */}
      <div className="relative flex-1 p-6 flex justify-center items-start min-h-screen">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-[1.02] duration-300">
          
          {/* Profile Header with Avatar */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-400 border-4 border-white rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Profile
            </h2>
            <p className="text-gray-500 mt-1">Welcome back, {user.name}!</p>
          </div>

          {/* Profile Info Cards */}
          <div className="space-y-4">
            {/* Name Card */}
            <div className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">Full Name</p>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">Email Address</p>
                  <p className="text-lg font-semibold text-gray-800 break-all">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">Phone Number</p>
                  <p className={`text-lg font-semibold ${user.phone ? 'text-gray-800' : 'text-gray-400 italic'}`}>
                    {user.phone || "Not Added"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3 justify-end border-t pt-6">
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transform transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-md">
              Edit Profile
            </button>
            <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transform transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-gray-300 focus:outline-none">
              Settings
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200">
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-xs text-gray-500">Orders</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200">
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-xs text-gray-500">Wishlist</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200">
              <p className="text-2xl font-bold text-green-600">0</p>
              <p className="text-xs text-gray-500">Reviews</p>
            </div>
          </div>

          {/* Member Since (if available) */}
          {user.createdAt && (
            <div className="mt-4 text-center text-sm text-gray-400">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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