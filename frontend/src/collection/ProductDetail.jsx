import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, toggleWishlist } from "../api/api";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaTruck,
  FaShieldAlt,
  FaExchangeAlt,
  FaHeart,
  FaShareAlt,
  FaCartPlus,
} from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbBrandAndroid } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import axios from "axios";
import { addToCart } from "../api/api";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data } = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  const token = localStorage.getItem("token");

  const handleAddToCart = async () => {
    try {
      setCartLoading(true);

      await addToCart({
        product: product._id,
        quantity: quantity, // use selected quantity
      });

      alert("Product added to cart 🛒");
    } catch (error) {
      alert("Please login first");
    } finally {
      setCartLoading(false);
    }
  };

  const handleWishlist = async () => {
    try {
      await toggleWishlist(product._id);

      setIsWishlisted((prev) => !prev);

      alert(!isWishlisted ? "Added to Wishlist ❤️" : "Removed from Wishlist");
    } catch (error) {
      alert("Please login first");
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: `Check out this product: ${product.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard 🔗");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Product not found
          </h2>
          <p className="text-gray-500 mt-2">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const discountPercentage = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 p-6 lg:p-8">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 object-contain p-4"
                />
                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {discountPercentage}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-3 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-8 lg:mt-0">
              {/* Brand and Category */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <TbBrandAndroid className="h-6 w-6 text-green-600" />
                  <span className="text-gray-500 font-medium">
                    {product.brand}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-gray-600 ml-2">
                    ({product.rating} from {product.reviews?.length || 0}{" "}
                    reviews)
                  </span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>

              {/* Price Section */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.discountPrice?.toLocaleString()}
                  </span>
                  {product.discountPrice < product.price && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                        Save ₹
                        {(
                          product.price - product.discountPrice
                        ).toLocaleString()}
                      </span>
                    </>
                  )}
                </div>
                <div className="text-green-600 font-medium flex items-center">
                  <AiFillThunderbolt className="h-5 w-5 mr-1" />
                  <span>Inclusive of all taxes</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <div
                    className={`h-3 w-3 rounded-full ${product.stock > 10 ? "bg-green-500" : "bg-yellow-500"}`}
                  ></div>
                  <span className="font-medium">
                    {product.stock > 10 ? "In Stock" : "Only Few Left!"}
                  </span>
                  <span className="text-gray-500">
                    ({product.stock} units available)
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="text-xl">−</span>
                  </button>
                  <div className="w-16 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-medium">{quantity}</span>
                  </div>
                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.min(product.stock, prev + 1))
                    }
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="text-xl">+</span>
                  </button>
                  <span className="text-gray-500 text-sm">
                    Max {product.stock} units per order
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={cartLoading}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  <FaCartPlus className="h-6 w-6" />
                  <span>{cartLoading ? "Adding..." : "Add to Cart"}</span>
                </button>
                <button
                  onClick={() => navigate("/order", { state: { product } })}
                  className="bg-gradient-to-r from-gray-900 to-black text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-black hover:to-gray-900 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <FaShoppingBag className="h-6 w-6" />
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaShareAlt className="h-5 w-5" />
                  <span>Share</span>
                </button>
                <button
                  onClick={handleWishlist}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <FaHeart
                    className={`h-5 w-5 ${
                      isWishlisted ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                  <span>{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold mb-4">Features & Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <FaTruck className="h-6 w-6 text-green-600" />
                    <div>
                      <div className="font-medium">Free Delivery</div>
                      <div className="text-sm text-gray-500">
                        On orders above ₹499
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-medium">2 Year Warranty</div>
                      <div className="text-sm text-gray-500">
                        Manufacturer warranty
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaExchangeAlt className="h-6 w-6 text-purple-600" />
                    <div>
                      <div className="font-medium">7 Day Return</div>
                      <div className="text-sm text-gray-500">
                        Easy return policy
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdOutlineLocalOffer className="h-6 w-6 text-red-600" />
                    <div>
                      <div className="font-medium">Best Price</div>
                      <div className="text-sm text-gray-500">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="border-t border-gray-200 p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">{product.description}</p>

              {/* Additional Specifications */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Brand</span>
                      <span className="font-medium">{product.brand}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Availability</span>
                      <span className="font-medium text-green-600">
                        {product.stock} units in stock
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Original Price</span>
                      <span className="font-medium">
                        ₹{product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Discounted Price</span>
                      <span className="font-medium text-red-600">
                        ₹{product.discountPrice?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Premium build quality with durable materials</li>
                  <li>Latest Android operating system with regular updates</li>
                  <li>High-performance processor for smooth multitasking</li>
                  <li>Advanced camera system with multiple lenses</li>
                  <li>Long-lasting battery with fast charging support</li>
                  <li>Large, vibrant display with high resolution</li>
                  <li>Ample storage capacity with expandable options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="border-t border-gray-200 p-6 lg:p-8 bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Delivery & Shipping</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <FaTruck className="h-6 w-6 text-blue-600" />
                  <span className="font-bold">Standard Delivery</span>
                </div>
                <p className="text-gray-600 text-sm">3-5 business days</p>
                <p className="text-green-600 font-medium text-sm">Free</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <AiFillThunderbolt className="h-6 w-6 text-yellow-500" />
                  <span className="font-bold">Express Delivery</span>
                </div>
                <p className="text-gray-600 text-sm">1-2 business days</p>
                <p className="text-gray-700 font-medium text-sm">₹99</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <FaShieldAlt className="h-6 w-6 text-green-600" />
                  <span className="font-bold">Installation</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Professional setup available
                </p>
                <p className="text-blue-600 font-medium text-sm">
                  Book Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
