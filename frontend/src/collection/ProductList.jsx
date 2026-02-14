import React, { useEffect, useState } from "react";
import { getProducts, getUserProfile } from "./../api/api";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../api/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartLoading, setCartLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      await fetchProducts();

      try {
        const { data } = await getUserProfile();
        setWishlist(data.wishlist || []);
        console.log(data.wishlist);
      } catch (error) {
        setWishlist([]);
      }
    };

    init();
  }, []);

  const handleAddToCart = async (e, productId) => {
    e.stopPropagation(); // prevent card click navigation

    try {
      setCartLoading(productId);

      await addToCart({
        product: productId,
        quantity: 1,
      });

      alert("Product added to cart 🛒");
    } catch (error) {
      alert("Please login first");
    } finally {
      setCartLoading(null);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const calculateDiscountPercentage = (price, discountPrice) => {
    if (!discountPrice || price === discountPrice) return 0;
    return Math.round(((price - discountPrice) / price) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((item) => {
            const discountPercentage = calculateDiscountPercentage(
              item.price,
              item.discountPrice,
            );

            return (
              <div
                key={item._id}
                onClick={() => navigate(`/product/${item._id}`)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Product Images */}
                <div className="h-56 relative overflow-hidden bg-gray-100">
                  {item.images && item.images.length > 0 ? (
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=${encodeURIComponent(
                          item.title,
                        )}`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-300">
                        {item.title?.charAt(0) || "P"}
                      </span>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {discountPercentage > 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {discountPercentage}% OFF
                      </span>
                    </div>
                  )}

                  {/* Brand Badge */}
                  {item.brand && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.brand}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6">
                  {/* Product Title and Seller */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Sold by: {item.seller?.shopName || "Unknown Seller"}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {item.discountPrice && item.discountPrice < item.price ? (
                        <>
                          <p className="text-2xl font-bold text-gray-900">
                            ₹{item.discountPrice.toLocaleString()}
                          </p>
                          <p className="text-gray-500 line-through text-sm">
                            ₹{item.price.toLocaleString()}
                          </p>
                        </>
                      ) : (
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{item.price.toLocaleString()}
                        </p>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(item.rating || 0)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-gray-600 font-medium">
                        {item.rating || "0.0"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {item.description ||
                      "Premium quality product with advanced features."}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => handleAddToCart(e, item._id)}
                      disabled={cartLoading === item._id}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-50"
                    >
                      {cartLoading === item._id ? "Adding..." : "Add to Cart"}
                    </button>
                    {/* <button className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500">Check back soon for new products!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
