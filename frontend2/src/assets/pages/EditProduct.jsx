import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/SellerApi.js";
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  PhotoIcon,
  TrashIcon,
  XMarkIcon,
  CurrencyRupeeIcon,
  CubeIcon,
  TagIcon,
  BuildingStorefrontIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
    brand: "",
    stock: "",
    category: "",
    images: [],
  });

  const [categories, setCategories] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);

  useEffect(() => {
    fetchProductData();
    fetchCategories();
  }, [id]);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      const res = await getProductById(id);
      if (res.data) {
        const product = res.data;
        setFormData({
          title: product.title || "",
          description: product.description || "",
          price: product.price || "",
          discountPrice: product.discountPrice || "",
          brand: product.brand || "",
          stock: product.stock || "",
          category: product.category?._id || "",
          images: product.images || [],
        });
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to load product data");
    } finally {
      setLoading(false);
    }
  };

  const handleAddImageUrl = () => {
    if (!imageUrl.trim()) return;

    if (!imageUrl.startsWith("http")) {
      setError("Please enter a valid image URL");
      return;
    }

    if (allImages.length >= 8) {
      setError("Maximum 8 images allowed");
      return;
    }

    setNewImages((prev) => [...prev, imageUrl.trim()]);
    setImageUrl("");
    setError("");
  };

  const fetchCategories = async () => {
    try {
      // Replace with your API call to fetch categories
      // const res = await getAllCategories();
      // setCategories(res.data || []);

      // Mock data for now
      setCategories([
        { _id: "1", name: "Electronics" },
        { _id: "2", name: "Fashion" },
        { _id: "3", name: "Home & Kitchen" },
        { _id: "4", name: "Books" },
        { _id: "5", name: "Beauty" },
      ]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const removeImage = (imageUrl, isNew = false) => {
    if (isNew) {
      setNewImages((prev) => prev.filter((img) => img !== imageUrl));
    } else {
      setRemovedImages((prev) => [...prev, imageUrl]);
    }
  };

  const restoreImage = (imageUrl) => {
    setRemovedImages((prev) => prev.filter((img) => img !== imageUrl));
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Product title is required");
      return false;
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      setError("Valid price is required");
      return false;
    }
    if (
      formData.discountPrice &&
      parseFloat(formData.discountPrice) >= parseFloat(formData.price)
    ) {
      setError("Discount price must be less than original price");
      return false;
    }
    if (!formData.stock || parseInt(formData.stock) < 0) {
      setError("Valid stock quantity is required");
      return false;
    }
    if (!formData.category) {
      setError("Category is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      // Prepare final images array
      const finalImages = [
        ...formData.images.filter((img) => !removedImages.includes(img)),
        ...newImages,
      ];

      if (finalImages.length === 0) {
        setError("At least one image is required");
        setSaving(false);
        return;
      }

      const productData = {
        ...formData,
        images: finalImages,
        price: parseFloat(formData.price),
        discountPrice: formData.discountPrice
          ? parseFloat(formData.discountPrice)
          : undefined,
        stock: parseInt(formData.stock),
      };

      await updateProduct(id, productData);

      setSuccess("Product updated successfully!");
      setTimeout(() => {
        navigate("/seller/products");
      }, 1500);
    } catch (error) {
      console.error("Error updating product:", error);
      setError(error.response?.data?.message || "Failed to update product");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ArrowPathIcon className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading product data...</p>
        </div>
      </div>
    );
  }

  const allImages = [
    ...formData.images.filter((img) => !removedImages.includes(img)),
    ...newImages,
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/seller/products")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Products
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
              <p className="text-gray-600 mt-1">
                Update product details and images
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/seller/products")}
                className="px-5 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center gap-2 text-red-700">
              <ExclamationCircleIcon className="h-5 w-5" />
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircleIcon className="h-5 w-5" />
              <span className="font-medium">{success}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              {/* Image Upload Section */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Product Images
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Upload up to 8 images. First image will be the main product
                  image.
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                  {allImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="h-32 w-full object-cover rounded-lg border border-gray-200"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/200x128?text=Image+Error";
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (
                            index <
                            formData.images.length - removedImages.length
                          ) {
                            if (removedImages.includes(image)) {
                              restoreImage(image);
                            } else {
                              removeImage(image);
                            }
                          } else {
                            removeImage(image, true);
                          }
                        }}
                        className="absolute -top-2 -right-2 p-1 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {removedImages.includes(image) &&
                        index < formData.images.length ? (
                          <span className="text-xs font-medium">Restore</span>
                        ) : (
                          <TrashIcon className="h-4 w-4" />
                        )}
                      </button>
                      {index === 0 && (
                        <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs rounded">
                          Main
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Upload Button */}
                  {allImages.length < 8 && (
                    <div className="col-span-2 sm:col-span-3 md:col-span-4">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          placeholder="Paste image URL here"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={handleAddImageUrl}
                          className="px-4 py-2 bg-blue-600 text-white rounded-xl"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{allImages.length} of 8 images</span>
                  {removedImages.length > 0 && (
                    <span className="text-red-600">
                      {removedImages.length} image(s) marked for removal
                    </span>
                  )}
                </div>
              </div>

              {/* Basic Information */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Basic Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Enter product title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Describe your product in detail"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Pricing & Details */}
            <div className="lg:col-span-1">
              {/* Pricing Section */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Pricing
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price (₹) *
                    </label>
                    <div className="relative">
                      <CurrencyRupeeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="0.00"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Price (₹)
                    </label>
                    <div className="relative">
                      <CurrencyRupeeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="discountPrice"
                        value={formData.discountPrice}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Optional"
                      />
                    </div>
                    {formData.discountPrice &&
                      parseFloat(formData.discountPrice) > 0 && (
                        <p className="text-sm text-green-600 mt-2">
                          Discount: ₹
                          {parseFloat(formData.price) -
                            parseFloat(formData.discountPrice)}{" "}
                          off
                        </p>
                      )}
                  </div>
                </div>
              </div>

              {/* Inventory Section */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Inventory
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stock Quantity *
                    </label>
                    <div className="relative">
                      <CubeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Enter stock quantity"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stock Status
                    </label>
                    <div
                      className={`px-4 py-3 rounded-xl ${
                        formData.stock > 10
                          ? "bg-green-50 text-green-700"
                          : formData.stock > 0
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-red-50 text-red-700"
                      }`}
                    >
                      {formData.stock > 10
                        ? "In Stock"
                        : formData.stock > 0
                          ? "Low Stock"
                          : "Out of Stock"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Category & Brand */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Category & Brand
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand
                    </label>
                    <div className="relative">
                      <TagIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Enter brand name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="sticky top-6">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <span className="flex items-center justify-center gap-2">
                      <ArrowPathIcon className="h-5 w-5 animate-spin" />
                      Saving Changes...
                    </span>
                  ) : (
                    "Save Changes"
                  )}
                </button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>All changes will be updated immediately</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
