import React from "react";
import logo from "../assets/Logo2.png";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-100/50 to-gray-200/50 backdrop-blur-sm p-10 mt-16 border-t border-gray-300/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div className="logo h-20 w-36 mb-4">
              <img 
                src={logo} 
                alt="Mini Mart Logo" 
                className="h-full w-full object-contain hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <p className="text-gray-600 text-sm font-light">
              Your trusted shopping destination
            </p>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold text-[#183561] mb-4 pb-2 border-b-2 border-[#183561]/20 inline-block">
              About Us
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/About", label: "About" },
                { path: "/", label: "Home" },
                { path: "/Ethics", label: "Ethics" },
                { path: "/Culture", label: "Culture" },
                { path: "/Sustainability", label: "Sustainability" },
                { path: "/Stories", label: "Stories" },
                { path: "/Policy", label: "Policy" }
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `text-sm transition-all duration-200 hover:pl-1 block ${
                        isActive 
                          ? "text-[#183561] font-semibold" 
                          : "text-gray-600 hover:text-[#183561] font-light"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Consumer Policy Section */}
          <div>
            <h3 className="text-lg font-bold text-[#183561] mb-4 pb-2 border-b-2 border-[#183561]/20 inline-block">
              Consumer Policy
            </h3>
            <ul className="space-y-2">
              {[
                "Cancellation & Returns",
                "Terms of Use",
                "Security",
                "Privacy",
                "Sitemap"
              ].map((item) => (
                <li key={item}>
                  <p className="text-sm text-gray-600 hover:text-[#183561] hover:pl-1 transition-all duration-200 cursor-pointer font-light">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Mail Us Section */}
          <div>
            <h3 className="text-lg font-bold text-[#183561] mb-4 pb-2 border-b-2 border-[#183561]/20 inline-block">
              Mail Us
            </h3>
            <div className="bg-white/50 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Mini Mart
                <br />
                Bhavnagar – 364002
                <br />
                Gujarat, India
              </p>
              <p className="text-xs text-gray-500 mt-2 font-light">
                <span className="font-medium">Customer Support:</span>
                <br />
                support@minimart.com
                <br />
                +91 12345 67890
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-bold text-[#183561] mb-4 pb-2 border-b-2 border-[#183561]/20 inline-block">
              Connect With Us
            </h3>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-[#1877f2] hover:bg-[#1877f2] hover:text-white"
                aria-label="Facebook"
              >
                <CiFacebook size={22} />
              </a>
              <a 
                href="#" 
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-[#ff0000] hover:bg-[#ff0000] hover:text-white"
                aria-label="YouTube"
              >
                <FiYoutube size={22} />
              </a>
              <a 
                href="#" 
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-[#e4405f] hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcaf45] hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500 font-light">
                Follow us for updates
                <br />
                and exclusive offers
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-300/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 font-light">
              © {new Date().getFullYear()} Mini Mart. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-xs text-gray-500 hover:text-[#183561] transition-colors cursor-pointer font-light">
                Privacy Policy
              </p>
              <p className="text-xs text-gray-500 hover:text-[#183561] transition-colors cursor-pointer font-light">
                Terms of Service
              </p>
              <p className="text-xs text-gray-500 hover:text-[#183561] transition-colors cursor-pointer font-light">
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;