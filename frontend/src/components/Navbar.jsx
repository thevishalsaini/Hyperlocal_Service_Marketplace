import { useState } from "react";
import { 
  FiSearch, 
  FiShoppingCart, 
  FiUser, 
  FiMenu, 
  FiX, 
  FiChevronDown 
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Beauty', path: '/beauty' },
    { name: 'Wall Panels', path: '/homes' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setSearchResults([
        { id: 1, name: `${query} Product 1`, category: "Electronics" },
        { id: 2, name: `${query} Product 2`, category: "Home Appliances" },
      ]);
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-amber-300 hover:text-amber-200 transition flex items-center">
            <span className="mr-1">🌿</span> UrbanElite
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="relative group font-medium px-2 py-1 hover:text-amber-200 transition"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative mx-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-full text-gray-800 w-64 focus:outline-none focus:ring-2 focus:ring-amber-300"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery.length > 2 && setShowSearchDropdown(true)}
                onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
              
              {/* Search Dropdown */}
              {showSearchDropdown && searchResults.length > 0 && (
                <div className="absolute top-12 left-0 w-full bg-white text-gray-800 rounded-md shadow-xl z-50 border border-emerald-100">
                  {searchResults.map(item => (
                    <Link 
                      key={item.id} 
                      to={`/products/${item.id}`}
                      className="block p-3 hover:bg-emerald-50 border-b border-emerald-100"
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.category}</div>
                    </Link>
                  ))}
                  <Link 
                    to={`/search?q=${searchQuery}`} 
                    className="block p-3 text-center bg-emerald-50 text-emerald-700 font-medium rounded-b-md hover:bg-emerald-100"
                  >
                    View all results
                  </Link>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-emerald-600 rounded-full transition">
              <FiShoppingCart className="h-5 w-5 text-amber-300" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* User Dropdown */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 focus:outline-none">
                  <FaUserCircle className="h-8 w-8 text-amber-200" />
                  <FiChevronDown className="h-4 w-4 text-white group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute right-0 top-10 bg-white text-gray-800 rounded-md shadow-lg py-2 w-48 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50 border border-emerald-100">
                  <Link to="/account" className="block px-4 py-2 hover:bg-emerald-50">My Account</Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-emerald-50">My Orders</Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-emerald-50 border-t border-emerald-100 text-emerald-700"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login"
                className="bg-amber-500 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-600 flex items-center space-x-2 transition shadow hover:shadow-md"
              >
                <FiUser className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <FiShoppingCart className="h-6 w-6 text-amber-300" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none text-amber-300"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-emerald-800 z-50 flex flex-col items-center justify-center space-y-8 transition-all duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button 
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 focus:outline-none text-amber-300"
        >
          <FiX className="h-6 w-6" />
        </button>

        {/* Mobile Search */}
        <div className="w-4/5 mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
        </div>

        {/* Mobile Links */}
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            onClick={toggleMenu}
            className="text-xl font-medium px-4 py-2 hover:text-amber-300 transition"
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Auth Buttons */}
        <div className="flex space-x-4 mt-8">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition shadow"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link 
                to="/login"
                onClick={toggleMenu}
                className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition shadow"
              >
                Login
              </Link>
              <Link 
                to="/signup"
                onClick={toggleMenu}
                className="border-2 border-amber-300 text-amber-300 px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;