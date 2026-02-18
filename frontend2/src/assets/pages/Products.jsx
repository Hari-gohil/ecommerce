import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../services/SellerApi.js";
import { 
  PlusCircleIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CurrencyRupeeIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  TagIcon,
  ArrowPathIcon,
  ExclamationCircleIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const sellerId = localStorage.getItem("sellerId");
  const sellerInfo = JSON.parse(localStorage.getItem("sellerInfo") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, searchTerm, sortBy, selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getAllProducts();
      setProducts(res.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = products.filter(item => item.seller?._id === sellerId);

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category?._id === selectedCategory);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "stock-low":
          return a.stock - b.stock;
        case "stock-high":
          return b.stock - a.stock;
        case "newest":
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case "oldest":
          return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { label: "Out of Stock", color: "bg-red-100 text-red-800" };
    if (stock <= 10) return { label: "Low Stock", color: "bg-yellow-100 text-yellow-800" };
    return { label: "In Stock", color: "bg-green-100 text-green-800" };
  };

  const toggleProductDetails = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const handleEdit = (productId) => {
    navigate(`edit-product/${productId}`);
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteProduct(productId);
      setProducts(products.filter((item) => item._id !== productId));
      alert("Product deleted successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <ArrowPathIcon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 animate-spin mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-gray-600">Loading your products...</p>
        </div>
      </div>
    );
  }

  const sellerProducts = filteredProducts.filter(item => item.seller?._id === sellerId);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Products</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Manage your products and inventory for {sellerInfo?.shopName || "your store"}
              </p>
            </div>
            <button
              onClick={() => navigate("/seller/add-product")}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md w-full sm:w-auto"
            >
              <PlusCircleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              Add New Product
            </button>
          </div>
        </div>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Total Products</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{sellerProducts.length}</p>
              </div>
              <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
                <CubeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Low Stock Items</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {sellerProducts.filter(p => p.stock <= 10).length}
                </p>
              </div>
              <div className="p-2 sm:p-3 bg-yellow-50 rounded-lg">
                <ExclamationCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 col-span-1 xs:col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Out of Stock</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {sellerProducts.filter(p => p.stock === 0).length}
                </p>
              </div>
              <div className="p-2 sm:p-3 bg-red-50 rounded-lg">
                <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-3 sm:p-4 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="stock-low">Stock: Low to High</option>
                <option value="stock-high">Stock: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sellerProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-6 sm:p-8 md:p-12 text-center border border-gray-200">
            <CubeIcon className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              {searchTerm || selectedCategory !== "all" 
                ? "No products match your filters. Try adjusting your search." 
                : "You haven't added any products yet. Start by adding your first product!"}
            </p>
            <button
              onClick={() => navigate("/seller/add-product")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              <PlusCircleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              Add Your First Product
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {sellerProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Product Image */}
                <div className="relative aspect-square sm:aspect-video overflow-hidden bg-gray-100">
                  {product.images?.[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <CubeIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${getStockStatus(product.stock).color}`}>
                      {getStockStatus(product.stock).label}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-2 mb-2">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 line-clamp-2">
                      {product.title}
                    </h3>
                    <span className="text-base sm:text-lg font-bold text-blue-600 flex items-center whitespace-nowrap">
                      <CurrencyRupeeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                      {product.price}
                    </span>
                  </div>

                  {product.discountPrice && product.discountPrice < product.price && (
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm text-gray-500 line-through flex items-center">
                        <CurrencyRupeeIcon className="h-2 w-2 sm:h-3 sm:w-3" />
                        {product.price}
                      </span>
                      <span className="text-[10px] sm:text-xs font-medium text-green-600 bg-green-50 px-1.5 sm:px-2 py-0.5 rounded">
                        Save ₹{product.price - product.discountPrice}
                      </span>
                    </div>
                  )}

                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="text-xs sm:text-sm">
                      <p className="text-gray-500">Brand</p>
                      <p className="font-medium truncate">{product.brand || "—"}</p>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <p className="text-gray-500">Stock</p>
                      <p className="font-medium">{product.stock} units</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <button
                      onClick={() => toggleProductDetails(product._id)}
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
                    >
                      <EyeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                      {expandedProduct === product._id ? "Less" : "More"}
                    </button>
                    <button
                      onClick={() => handleEdit(product._id)}
                      className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-blue-200 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                    >
                      <PencilIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden xs:inline">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-red-200 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                    >
                      <TrashIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden xs:inline">Delete</span>
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedProduct === product._id && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="text-xs sm:text-sm">
                          <p className="text-gray-500">Category</p>
                          <p className="font-medium">{product.category?.name || "—"}</p>
                        </div>
                        <div className="text-xs sm:text-sm">
                          <p className="text-gray-500">Created On</p>
                          <p className="font-medium">
                            {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : "—"}
                          </p>
                        </div>
                        <div className="text-xs sm:text-sm">
                          <p className="text-gray-500 mb-1">Additional Images</p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {product.images?.slice(1).map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt={`${product.title} ${index + 2}`}
                                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover rounded border border-gray-200"
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/50?text=Image";
                                }}
                              />
                            ))}
                            {(!product.images || product.images.length <= 1) && (
                              <span className="text-gray-400 text-xs sm:text-sm">No additional images</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Stats */}
        {sellerProducts.length > 0 && (
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
            Showing {sellerProducts.length} of {products.filter(p => p.seller?._id === sellerId).length} products
            {searchTerm && ` • Matching "${searchTerm}"`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;