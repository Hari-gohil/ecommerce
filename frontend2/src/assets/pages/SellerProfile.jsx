import React, { useEffect, useState } from "react";
import { getSellerProfile } from "../services/SellerApi";

const SellerProfile = () => {
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await getSellerProfile();
        setSeller(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  if (!seller) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading profile...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Seller Profile
          </h1>
          <p className="mt-2 text-gray-600">Manage your seller information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          
          {/* Profile Content */}
          <div className="px-6 py-8 sm:p-10">
            {/* Avatar Section */}
            <div className="flex justify-center -mt-20 mb-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {seller.shopName?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Shop Name */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{seller.shopName}</h2>
              <div className="mt-2 flex items-center justify-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Active Seller
                </span>
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900 break-all">{seller.email}</p>
                  </div>
                </div>
              </div>

              {/* GST Number Card */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">GST Number</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{seller.gstNumber}</p>
                  </div>
                </div>
              </div>

              {/* Address Card - Full Width */}
              <div className="md:col-span-2 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Business Address</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{seller.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Your seller information is secure and private
        </p>
      </div>
    </div>
  );
};

export default SellerProfile;