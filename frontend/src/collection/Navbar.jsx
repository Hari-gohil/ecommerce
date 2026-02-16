// import React, { useEffect, useState } from "react";
// import LogoImage from "../assets/Logo2.png";
// import { CiSearch } from "react-icons/ci";
// import { BsPersonCircle } from "react-icons/bs";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FiMenu, FiX } from "react-icons/fi";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../components/ui/dropdown-menu";
// import { useNavigate } from "react-router-dom";
// import { getCart } from "../api/api";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cart, setCart] = useState({ items: [] });
//   const [loading, setLoading] = useState(true);

//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch Cart
//   const fetchCart = async () => {
//     try {
//       const { data } = await getCart();
//       setCart(data || { items: [] });
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   //Handle Search Function
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Real-time navigation to product list with query
//     navigate(`/home?search=${value}`);
//   };

//   const handleSubmit = () => {
//     navigate(`/home?search=${searchTerm}`);
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <nav className="w-full bg-gradient-to-r from-white to-gray-50 shadow-lg border-b border-gray-100 sticky top-0 z-50">

    

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Navigation Bar */}
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo and Mobile Menu Button */}
//           <div className="flex items-center space-x-4 lg:space-x-8">
//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               {isMobileMenuOpen ? (
//                 <FiX className="h-6 w-6 text-gray-700" />
//               ) : (
//                 <FiMenu className="h-6 w-6 text-gray-700" />
//               )}
//             </button>

//             {/* Logo */}
//             <div className="logo-container flex-shrink-0">
//               <img
//                 src={LogoImage}
//                 alt="Logo"
//                 className="h-10 lg:h-12 w-auto object-contain cursor-pointer transform hover:scale-105 transition-transform duration-200"
//                 onClick={() => navigate("/")}
//               />
//             </div>
//           </div>

//           {/* Desktop Search Bar */}
//           <div className="hidden lg:block flex-1 max-w-2xl mx-8">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <CiSearch className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 placeholder="Search products, brands, and categories..."
//                 className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow transition-shadow"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Right Side Actions */}
//           <div className="flex items-center space-x-4 lg:space-x-6">
//             {/* Mobile Search Icon */}
//             <button
//               onClick={() => setIsSearchActive(!isSearchActive)}
//               className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               <CiSearch className="h-6 w-6 text-gray-700" />
//             </button>

//             {/* Account Dropdown */}
//             <div className="hidden lg:block">
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <div className="flex items-center space-x-2 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors">
//                     <div className="relative">
//                       <BsPersonCircle className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-colors" />
//                       <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
//                     </div>
//                     <div className="flex flex-col items-start">
//                       <span className="font-medium text-gray-900 text-sm">
//                         Welcome
//                       </span>
//                       <span className="text-xs text-gray-500">Sign in</span>
//                     </div>
//                   </div>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-56 mt-2 shadow-xl border border-gray-100 rounded-xl">
//                   <DropdownMenuGroup>
//                     <DropdownMenuLabel className="text-gray-600 font-normal">
//                       New Customer?
//                     </DropdownMenuLabel>
//                     <DropdownMenuItem
//                       onClick={() => navigate("/auth/signin")}
//                       className="cursor-pointer py-3 hover:bg-blue-50 focus:bg-blue-50"
//                     >
//                       <span className="font-semibold text-blue-600">
//                         Sign Up - Get 10% Off
//                       </span>
//                     </DropdownMenuItem>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem
//                       onClick={() => navigate("/profile")}
//                       className="cursor-pointer py-3 hover:bg-gray-50"
//                     >
//                       <span className="font-medium">My Profile</span>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem
//                       onClick={() => navigate("/my-orders")}
//                       className="cursor-pointer py-3 hover:bg-gray-50"
//                     >
//                       <span className="font-medium">Orders</span>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem className="cursor-pointer py-3 hover:bg-gray-50">
//                       <span className="font-medium">Wishlist</span>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem className="cursor-pointer py-3 hover:bg-gray-50">
//                       <span className="font-medium">Rewards</span>
//                     </DropdownMenuItem>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem
//                       onClick={() => navigate("/logout")}
//                       className="cursor-pointer py-3 hover:bg-red-50 focus:bg-red-50"
//                     >
//                       <span className="font-medium text-red-600">Logout</span>
//                     </DropdownMenuItem>
//                   </DropdownMenuGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>

//             {/* Mobile Account Icon */}
//             <div className="lg:hidden">
//               <BsPersonCircle
//                 className="h-7 w-7 text-gray-700 cursor-pointer"
//                 onClick={() => navigate("/auth/signin")}
//               />
//             </div>

//             {/* Cart */}
//             <div className="relative group">
//               <div
//                 className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
//                 onClick={() => navigate("/cart")}
//               >
//                 <div className="relative">
//                   <AiOutlineShoppingCart className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-colors" />

//                   {cart?.items?.length > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center shadow-sm">
//                       {cart.items.length}
//                     </span>
//                   )}
//                 </div>
//                 <div className="hidden lg:flex flex-col items-start">
//                   <span className="font-medium text-gray-900">Cart</span>
//                   <span className="text-xs text-gray-500">$299.99</span>
//                 </div>
//               </div>
//               <div className="hidden lg:block absolute right-0 top-full mt-2 w-64 p-4 bg-white shadow-2xl border border-gray-100 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                 <div className="font-medium text-gray-900 mb-2">
//                   Your Cart (3 items)
//                 </div>
//                 <div className="text-sm text-gray-600 mb-3">Total: $299.99</div>
//                 <button
//                   onClick={() => navigate("/checkout")}
//                   className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
//                 >
//                   Checkout Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Search Bar */}
//         {isSearchActive && (
//           <div className="lg:hidden mb-4 animate-fadeIn">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <CiSearch className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 placeholder="Search products..."
//                 className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 autoFocus
//               />
//             </div>
//           </div>
//         )}

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden animate-slideDown bg-white border-t border-gray-100 mt-2 rounded-xl shadow-lg p-4">
//             <div className="space-y-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   onClick={() => {
//                     navigate(link.path);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium cursor-pointer transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <div className="border-t border-gray-100 pt-4 mt-4">
//                 <div className="space-y-2">
//                   <a
//                     onClick={() => {
//                       navigate("/profile");
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium cursor-pointer"
//                   >
//                     My Profile
//                   </a>
//                   <a
//                     onClick={() => {
//                       navigate("/orders");
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium cursor-pointer"
//                   >
//                     Orders
//                   </a>
//                   <a
//                     onClick={() => {
//                       navigate("/wishlist");
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-pointer"
//                   >
//                     Wishlist
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// this is all currect code :
// import React, { useEffect, useState } from "react";
// import LogoImage from "../assets/Logo2.png";
// import { CiSearch } from "react-icons/ci";
// import { BsPersonCircle } from "react-icons/bs";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FiMenu, FiX } from "react-icons/fi";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../components/ui/dropdown-menu";
// import { useNavigate } from "react-router-dom";
// import { getCart } from "../api/api";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cart, setCart] = useState({ items: [] });
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // ✅ Navigation Links (IMPORTANT FIX)
//   const navLinks = [
//     { name: "Home", path: "/home" },
//     { name: "Shop", path: "/shop" },
//     { name: "About", path: "/about" },
//     { name: "Orders", path: "/orders" },
//   ];

//   // Fetch Cart
//   const fetchCart = async () => {
//     try {
//       const { data } = await getCart();
//       setCart(data || { items: [] });
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Search
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     navigate(`/home?search=${value}`);
//   };

//   const handleSubmit = () => {
//     navigate(`/home?search=${searchTerm}`);
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <nav className="w-full bg-gradient-to-r from-white to-gray-50 shadow-lg border-b border-gray-100 sticky top-0 z-50">

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Main Navbar */}
//         <div className="flex items-center justify-between h-16 lg:h-20">

//           {/* Left */}
//           <div className="flex items-center space-x-4 lg:space-x-8">

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
//             >
//               {isMobileMenuOpen ? (
//                 <FiX className="h-6 w-6 text-gray-700" />
//               ) : (
//                 <FiMenu className="h-6 w-6 text-gray-700" />
//               )}
//             </button>

//             {/* Logo */}
//             <img
//               src={LogoImage}
//               alt="Logo"
//               className="h-10 lg:h-12 cursor-pointer"
//               onClick={() => navigate("/home")}
//             />
//           </div>

//           {/* Desktop Search */}
//           <div className="hidden lg:block flex-1 max-w-2xl mx-8">
//             <div className="relative">
//               <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 placeholder="Search products..."
//                 className="w-full pl-12 pr-20 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg"
//               >
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="flex items-center space-x-4 lg:space-x-6">

//             {/* Mobile Search */}
//             <button
//               onClick={() => setIsSearchActive(!isSearchActive)}
//               className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
//             >
//               <CiSearch className="h-6 w-6 text-gray-700" />
//             </button>

//             {/* Desktop Account */}
//             <div className="hidden lg:block">
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <div className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
//                     <BsPersonCircle className="h-7 w-7 text-gray-700" />
//                     <div className="flex flex-col">
//                       <span className="text-sm font-medium">Welcome</span>
//                       <span className="text-xs text-gray-500">Sign in</span>
//                     </div>
//                   </div>
//                 </DropdownMenuTrigger>

//                 <DropdownMenuContent className="w-56">
//                   <DropdownMenuGroup>

//                     <DropdownMenuLabel>
//                       New Customer?
//                     </DropdownMenuLabel>

//                     <DropdownMenuItem
//                       onClick={() => navigate("/auth/signin")}
//                     >
//                       Sign In / Sign Up
//                     </DropdownMenuItem>

//                     <DropdownMenuSeparator />

//                     <DropdownMenuItem
//                       onClick={() => navigate("/profile")}
//                     >
//                       My Profile
//                     </DropdownMenuItem>

//                     <DropdownMenuItem
//                       onClick={() => navigate("/my-orders")}
//                     >
//                       Orders
//                     </DropdownMenuItem>

//                     <DropdownMenuSeparator />

//                     <DropdownMenuItem
//                       onClick={() => navigate("/logout")}
//                       className="text-red-600"
//                     >
//                       Logout
//                     </DropdownMenuItem>

//                   </DropdownMenuGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>

//             {/* Mobile Account */}
//             <BsPersonCircle
//               className="lg:hidden h-7 w-7 text-gray-700 cursor-pointer"
//               onClick={() => navigate("/auth/signin")}
//             />

//             {/* Cart */}
//             <div
//               className="relative cursor-pointer"
//               onClick={() => navigate("/cart")}
//             >
//               <AiOutlineShoppingCart className="h-7 w-7 text-gray-700" />

//               {cart?.items?.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 min-w-[20px] flex items-center justify-center">
//                   {cart.items.length}
//                 </span>
//               )}
//             </div>

//           </div>
//         </div>

//         {/* Mobile Search Input */}
//         {isSearchActive && (
//           <div className="lg:hidden mb-4">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search products..."
//               className="w-full px-4 py-3 border rounded-xl"
//             />
//           </div>
//         )}

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-white border-t mt-2 rounded-xl shadow p-4">

//             {navLinks.map((link) => (
//               <div
//                 key={link.name}
//                 onClick={() => {
//                   navigate(link.path);
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="py-3 px-4 hover:bg-blue-50 rounded-lg cursor-pointer"
//               >
//                 {link.name}
//               </div>
//             ))}

//             <div className="border-t mt-4 pt-4 space-y-2">

//               <div
//                 onClick={() => navigate("/profile")}
//                 className="py-2 px-4 hover:bg-blue-50 rounded-lg cursor-pointer"
//               >
//                 My Profile
//               </div>

//               <div
//                 onClick={() => navigate("/orders")}
//                 className="py-2 px-4 hover:bg-blue-50 rounded-lg cursor-pointer"
//               >
//                 Orders
//               </div>

//               <div
//                 onClick={() => navigate("/wishlist")}
//                 className="py-2 px-4 hover:bg-blue-50 rounded-lg cursor-pointer"
//               >
//                 Wishlist
//               </div>

//             </div>

//           </div>
//         )}

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// batter UI

import React, { useEffect, useState } from "react";
import LogoImage from "../assets/Logo2.png";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { getCart } from "../api/api";

const Navbar = () => {
  const navigate = useNavigate();

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Navigation Links (still kept for mobile menu)
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
  ];

  // Fetch Cart
  const fetchCart = async () => {
    try {
      const { data } = await getCart();
      setCart(data || { items: [] });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    navigate(`/home?search=${value}`);
  };

  const handleSubmit = () => {
    navigate(`/home?search=${searchTerm}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg backdrop-filter bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Section - Only Logo and Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              ) : (
                <FiMenu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              )}
            </button>

            {/* Logo with hover effect */}
            <div
              onClick={() => navigate("/home")}
              className="cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src={LogoImage}
                alt="Logo"
                className="h-9 sm:h-10 lg:h-12 object-contain"
              />
            </div>
          </div>

          {/* Desktop Search - Enhanced */}
          <div className="hidden lg:block flex-1 max-w-xl xl:max-w-2xl mx-6">
            <div className="relative group">
              <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
              
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                onKeyPress={handleKeyPress}
                placeholder="Search products..."
                className="w-full pl-12 pr-28 py-3 bg-gray-100 border border-gray-300 rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />

              <button
                onClick={handleSubmit}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-5">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchActive(!isSearchActive)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle search"
            >
              <CiSearch className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>

            {/* Desktop Account Dropdown - Enhanced */}
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 group">
                    <BsPersonCircle className="h-8 w-8 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                    <div className="flex flex-col text-left">
                      <span className="text-xs text-gray-500">Welcome back</span>
                      <span className="text-sm font-semibold text-gray-800">Sign In</span>
                    </div>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-64 bg-white border border-gray-200 text-gray-700 shadow-xl">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-gray-500 font-normal">
                      New Customer?
                    </DropdownMenuLabel>

                    <DropdownMenuItem
                      onClick={() => navigate("/auth/signin")}
                      className="focus:bg-blue-50 focus:text-blue-700 cursor-pointer py-2"
                    >
                      <span className="font-medium">Sign In / Sign Up</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-gray-200" />

                    <DropdownMenuItem
                      onClick={() => navigate("/profile")}
                      className="focus:bg-blue-50 focus:text-blue-700 cursor-pointer py-2"
                    >
                      My Profile
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => navigate("/my-orders")}
                      className="focus:bg-blue-50 focus:text-blue-700 cursor-pointer py-2"
                    >
                      Orders
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-gray-200" />

                    <DropdownMenuItem
                      onClick={() => navigate("/logout")}
                      className="focus:bg-red-50 focus:text-red-600 text-red-500 cursor-pointer py-2"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Account Icon */}
            <button
              onClick={() => navigate("/auth/signin")}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Account"
            >
              <BsPersonCircle className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>

            {/* Cart - Enhanced */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
              aria-label="Shopping cart"
            >
              <AiOutlineShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
              
              {cart?.items?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-5 min-w-[20px] flex items-center justify-center px-1 shadow-md animate-pulse">
                  {cart.items.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input - Enhanced */}
        {isSearchActive && (
          <div className="lg:hidden py-3 animate-fadeIn">
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                onKeyPress={handleKeyPress}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu - Enhanced */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl overflow-hidden animate-slideDown">
            {/* Navigation Links */}
            <div className="p-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    navigate(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-3.5 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 mx-3"></div>

            {/* Account Links */}
            <div className="p-3 space-y-1">
              <button
                onClick={() => {
                  navigate("/profile");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-3.5 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                My Profile
              </button>

              <button
                onClick={() => {
                  navigate("/my-orders");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-3.5 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Orders
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
