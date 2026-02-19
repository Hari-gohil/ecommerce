// import React, { useEffect, useState } from "react";
// import { getSellerUsers } from "../services/SellerApi";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const { data } = await getSellerUsers();
//       setUsers(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">My Customers</h2>

//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Phone</th>
//             <th className="border p-2">Orders</th>
//             <th className="border p-2">Total Spent</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map((u) => (
//             <tr key={u._id}>
//               <td className="border p-2">{u.name}</td>
//               <td className="border p-2">{u.email}</td>
//               <td className="border p-2">{u.phone}</td>
//               <td className="border p-2">{u.orders}</td>
//               <td className="border p-2">₹{u.totalSpent}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Users;




import React, { useEffect, useState } from "react";
import { getSellerUsers } from "../services/SellerApi";
import { 
  FiUsers, 
  FiShoppingBag, 
  FiPhone,
  FiMail,
  FiUser,
  FiSearch,
  FiFilter,
  FiDownload,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalOrders: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [searchTerm, users]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await getSellerUsers();
      setUsers(data);
      calculateStats(data);
      setFilteredUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (userData) => {
    const totalCustomers = userData.length;
    const totalOrders = userData.reduce((sum, user) => sum + (user.orders || 0), 0);
    const totalRevenue = userData.reduce((sum, user) => sum + (user.totalSpent || 0), 0);
    
    setStats({
      totalCustomers,
      totalOrders,
      totalRevenue
    });
  };

  const filterUsers = () => {
    if (!searchTerm.trim()) {
      setFilteredUsers(users);
      return;
    }
    
    const filtered = users.filter(user => 
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone?.includes(searchTerm)
    );
    setFilteredUsers(filtered);
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Orders', 'Total Spent'];
    const csvData = filteredUsers.map(user => [
      user.name,
      user.email,
      user.phone,
      user.orders,
      user.totalSpent
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'customers.csv';
    a.click();
  };

  const getInitials = (name) => {
    return name
      ?.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'U';
  };

  // Generate random colors for avatars
  const getAvatarColor = (id) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600',
      'from-yellow-500 to-yellow-600',
      'from-red-500 to-red-600',
      'from-indigo-500 to-indigo-600',
      'from-teal-500 to-teal-600'
    ];
    const index = (id?.charCodeAt(0) || 0) % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section with Decorative Elements */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 bg-gradient-to-br from-gray-50 to-gray-100 text-3xl font-bold text-gray-900 flex items-center gap-3">
              <FiUsers className="h-8 w-8 text-blue-600" />
              My Customers
            </span>
          </div>
          
        </div>

        {/* Stats Cards with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Customers</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalCustomers}</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <span>↑ 12%</span> from last month
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <FiUsers className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalOrders}</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <span>↑ 8%</span> from last month
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <FiShoppingBag className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{stats.totalRevenue.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <span>↑ 23%</span> from last month
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <FaIndianRupeeSign className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Actions Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers by name, email or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              {/* <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all hover:border-gray-400 font-medium">
                <FiFilter className="h-5 w-5" />
                <span>Filter</span>
              </button> */}
              <button 
                onClick={exportToCSV}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/30 font-medium"
              >
                <FiDownload className="h-5 w-5" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Active Filters (optional) */}
          {searchTerm && (
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Active filter:</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-1">
                "{searchTerm}"
                <button onClick={() => setSearchTerm("")} className="ml-1 hover:text-blue-900">×</button>
              </span>
            </div>
          )}
        </div>

        {/* Table Section - Desktop View */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer Details
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Contact Information
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total Spent
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-16 text-center">
                      <div className="flex justify-center items-center space-x-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
                        <span className="text-gray-600 font-medium">Loading customers...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <FiUsers className="h-12 w-12 text-gray-400" />
                        <span className="text-gray-600 font-medium">No customers found</span>
                        {searchTerm && (
                          <button 
                            onClick={() => setSearchTerm("")}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Clear search
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-12 w-12 bg-gradient-to-r ${getAvatarColor(user._id)} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                            {getInitials(user.name)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                              <FiUser className="h-3 w-3" />
                              ID: {user._id?.slice(-8)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <div className="text-sm text-gray-900 flex items-center gap-2">
                            <FiMail className="h-4 w-4 text-gray-400" />
                            <span className="truncate max-w-[200px]">{user.email}</span>
                          </div>
                          <div className="text-sm text-gray-600 flex items-center gap-2">
                            <FiPhone className="h-4 w-4 text-gray-400" />
                            {user.phone || <span className="text-gray-400">Not provided</span>}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 rounded-xl border border-blue-100">
                          {user.orders || 0} orders
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{user.totalSpent?.toLocaleString('en-IN') || 0}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full flex items-center gap-1 w-fit">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Active
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card View - Mobile */}
        <div className="md:hidden space-y-4">
          {loading ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
                <span className="text-gray-600 font-medium">Loading customers...</span>
              </div>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12 text-center">
              <div className="flex flex-col items-center gap-3">
                <FiUsers className="h-16 w-16 text-gray-400" />
                <span className="text-gray-600 font-medium text-lg">No customers found</span>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>
          ) : (
            filteredUsers.map((user) => (
              <div key={user._id} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`h-14 w-14 bg-gradient-to-r ${getAvatarColor(user._id)} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {getInitials(user.name)}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <FiUser className="h-3 w-3" />
                        ID: {user._id?.slice(-8)}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Active
                  </span>
                </div>

                <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center text-sm text-gray-600">
                    <FiMail className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiPhone className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                    {user.phone || <span className="text-gray-400">Not provided</span>}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiShoppingBag className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="font-semibold text-blue-600">{user.orders || 0}</span> orders
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaIndianRupeeSign className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="font-bold text-gray-900">₹{user.totalSpent?.toLocaleString('en-IN') || 0}</span> total spent
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        
      </div>
    </div>
  );
};

export default Users;