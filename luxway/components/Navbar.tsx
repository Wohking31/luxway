"use client";
import Link from "next/link";
import { Truck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Truck className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform cursor-pointer" />
          <span className="text-2xl font-bold tracking-tighter text-white cursor-pointer">
            LUX<span className="text-red-600 cursor-pointer">WAY</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link
            href="/"
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/inventory"
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Inventory
          </Link>
          <Link
            href="/about"
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Services
          </Link>
        </div>

        {/* Authentication Button */}
        <Link href="/auth/signin" className="cursor-pointer">
          <button className="px-5 py-2 rounded-full border border-red-600 text-white text-sm hover:bg-red-600 transition-all cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}
