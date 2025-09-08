import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { state, dispatch } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/Search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-[#9e61f2] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white text-[#2874f0] p-2 rounded">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-bold">Go Kart</div>
              <div className="text-xs text-yellow-300">Explore Premium</div>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2 rounded-l-sm text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-[#ff9f00] hover:bg-[#e8890b] rounded-r-sm transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {state.isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:bg-[#1c5aa3] px-3 py-2 rounded transition-colors">
                  <User className="h-5 w-5" />
                  <span className="text-sm">{state.user?.name || 'Account'}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                  <Link to="/cart" className="block px-4 py-2 hover:bg-gray-100">Cart</Link>
                  <Link to="/wish" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:bg-[#1c5aa3] px-3 py-2 rounded transition-colors">
                <User className="h-5 w-5" />
                <span className="text-sm">Login</span>
              </Link>
            )}

            <Link to="/Wish" className="flex items-center space-x-1 hover:bg-[#1c5aa3] px-3 py-2 rounded transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Wishlist</span>
            </Link>

            <Link to="/cart" className="flex items-center space-x-1 hover:bg-[#1c5aa3] px-3 py-2 rounded transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-sm">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ff9f00] text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#1c5aa3] rounded transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands and more"
              className="flex-1 px-4 py-2 rounded-l-sm text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-[#ff9f00] hover:bg-[#e8890b] rounded-r-sm transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1c5aa3] border-t border-[#3d7bc6]">
          <div className="px-4 py-2 space-y-2">
            {state.isAuthenticated ? (
              <>
                <Link to="/profile" className="block py-2 hover:bg-[#2874f0] rounded px-2">
                  My Profile
                </Link>
                <Link to="/wish" className="block py-2 hover:bg-[#2874f0] rounded px-2">
                  Wishlist
                </Link>
                <Link to="/cart" className="block py-2 hover:bg-[#2874f0] rounded px-2 flex items-center justify-between">
                  Cart
                  {cartItemCount > 0 && (
                    <span className="bg-[#ff9f00] text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 hover:bg-[#2874f0] rounded px-2">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block py-2 hover:bg-[#2874f0] rounded px-2">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}