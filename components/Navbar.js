'use client'; 

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" bg-white p-4 fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-orange-500 text-xl font-bold">
          <Link href="/">Bava Bhaii Restaurant</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-orange-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                // strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-orange-500 hover:text-orange-800">
            Home
          </Link>
          <Link href="/item" className="text-orange-500 hover:text-orange-800">
            Item
          </Link>
         
          <Link href="/projects" className=" text-orange-500 hover:text-orange-800 ">Category</Link>
          <Link href="/skills" className="text-orange-500 hover:text-orange-800/">Contact</Link>
          <Link href="/contact" className="text-orange-500 hover:text-orange-800">
            Help
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-4 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="space-y-4">
          <Link
            href="/"
            className="block text-orange-500 hover:text-orange-800"
          >
            Home
          </Link>
          <Link
            href="/item"
            className="block text-orange-500 hover:text-orange-800"
          >
            Item
          </Link>
          
          <Link href="/projects" className="block text-orange-500 hover:text-orange-800">Category</Link>
          <Link href="/skills" className="block text-orange-500 hover:text-orange-800">Contact</Link>
          <Link
            href="/contact"
            className="block text-orange-500 hover:text-orange-800"
          >
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
}
