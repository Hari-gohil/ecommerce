import React, { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../api/api";
import { useNavigate } from "react-router-dom";
import { User, Phone, Lock, ArrowLeft, Save, XCircle } from 'lucide-react';

const EditProfile = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await getUserProfile();
      setForm({
        name: data.name || "",
        phone: data.phone || "",
        password: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await updateUserProfile(form);
      alert("Profile Updated Successfully");
      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert("Update Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Card */}
      <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-lg p-8 border border-white/20 transform transition-all duration-500 hover:shadow-3xl">
        
        {/* Header with Back Button */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate("/profile")}
            className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 mr-4"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Edit Profile
            </h2>
            <p className="text-sm text-gray-500 mt-1">Update your personal information</p>
          </div>
        </div>

        {/* Avatar Preview */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-4 ring-white">
              {form.name ? form.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-400 w-6 h-6 rounded-full border-4 border-white"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              New Password <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                placeholder="Enter new password"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 ml-1">
              Leave blank to keep current password
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-gray-300 focus:outline-none flex items-center justify-center gap-2 order-2 sm:order-1"
            >
              <XCircle className="w-5 h-5" />
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 order-1 sm:order-2 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Updating...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Update Profile
                </>
              )}
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Your information is securely encrypted
          </p>
        </div>
      </div>

      {/* Animation Styles */}
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default EditProfile;