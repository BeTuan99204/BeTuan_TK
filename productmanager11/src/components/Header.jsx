import React, { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        MyShop
      </div>

      {/* Search */}
      <div className="flex-1 mx-6 max-w-xl">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Menu + Cart + Avatar */}
      <div className="flex items-center space-x-6">
        {/* Menu */}
        <nav className="hidden md:flex space-x-4 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
          <Link to="/add" className="hover:text-blue-600">Sản phẩm</Link>
          <Link to="/update" className="hover:text-blue-600">Liên hệ</Link>
        </nav>

        {/* Giỏ hàng */}
        <button className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
          <img
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
