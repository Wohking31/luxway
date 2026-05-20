"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Fixed the path from next/next to next/link
import { Truck, Shield, Wrench, Star } from "lucide-react";

export default function LuxWaySPA() {
  const [activeSection, setActiveSection] = useState("home");

  // Monitor scrolling to dynamically highlight the active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "inventory", "about", "services"];
      const scrollPosition = window.scrollY + 160; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MOCK_TRUCKS = [
    {
      id: 1,
      title: "Toyota Hilux Revo Rokku",
      year: "2024",
      price: "$45,000",
      engine: "2.8L Diesel",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Toyota Hilux Invincible X",
      year: "2023",
      price: "$41,200",
      engine: "2.4L Diesel",
      image:
        "https://images.unsplash.com/photo-1617469767053-d3b508a0d84e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Toyota Hilux GR Sport",
      year: "2025",
      price: "$52,500",
      engine: "2.8L Bi-Turbo",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* 1. FIXED GLOBAL NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Truck className="text-blue-600 w-8 h-8 group-hover:scale-110 transition-transform cursor-pointer" />
            <span className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer">
              LUX<span className="text-blue-600 cursor-pointer">WAY</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold relative">
            {["home", "inventory", "about", "services"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all pb-1 cursor-pointer border-b-2 relative ${
                  activeSection === item
                    ? "text-blue-600 border-blue-600 font-bold"
                    : "text-slate-500 border-transparent hover:text-blue-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Get Started - Routes to a brand new separate page */}
          <Link href="/auth/signin" className="cursor-pointer">
            <button className="px-6 py-2 rounded-full bg-blue-600 border border-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-600/10 cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center bg-white pt-16"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
            alt="Toyota Hilux Background"
            className="h-full w-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                Premium Hilux Marketplace
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 md:text-7xl leading-none">
              BUILT FOR <br />
              <span className="text-blue-600">ADVENTURE</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Discover powerful Toyota Hilux trucks engineered for pure
              performance, comfort, and premium style. Welcome to LuxWay—where
              strength meets aesthetic class.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("inventory")}
                className="rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl transition-all cursor-pointer"
              >
                Explore Inventory
              </button>
              <Link href="/auth/signin" className="cursor-pointer">
                <button className="w-full sm:w-auto rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer">
                  List Your Truck
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop"
              alt="Featured Truck"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. INVENTORY SECTION */}
      <section
        id="inventory"
        className="py-24 bg-white border-y border-slate-200 px-6 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
                The Active Fleet
              </h2>
              <p className="text-slate-500 mt-2">
                Explore fully verified mechanical specifications ready for
                transit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_TRUCKS.map((truck) => (
              <div
                key={truck.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={truck.image}
                    alt={truck.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <span className="absolute top-4 right-4 bg-blue-600 text-white font-bold px-3 py-1 rounded-md text-xs">
                    {truck.year}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {truck.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{truck.engine}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    <span className="text-2xl font-black text-blue-600">
                      {truck.price}
                    </span>
                    <button className="bg-white border border-slate-200 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
                      View Structure
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-24 bg-slate-50 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase">
            Aesthetic Innovation meets <br />
            <span className="text-blue-600">Mechanical Integrity</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            LuxWay reimagines the traditional classified layout framework. We
            specialize explicitly in distributing standard or modified Toyota
            Hilux assets across premium aesthetic presentation guidelines.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Our Standard
              </h3>
              <p className="text-sm text-slate-500">
                Every vehicle profile listed on our interface incorporates
                extreme data validity checks to filter out sub-par
                configurations.
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Elite Community
              </h3>
              <p className="text-sm text-slate-500">
                We establish functional connection parameters linking reliable
                wholesale vehicle providers alongside off-road operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section
        id="services"
        className="py-24 bg-white border-t border-slate-200 px-6 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase">
              Core Services
            </h2>
            <p className="text-slate-500 mt-2">
              Custom tools optimized explicitly for performance asset
              distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all shadow-sm">
              <Wrench className="text-blue-600 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Rigorous Checklists
              </h3>
              <p className="text-sm text-slate-600">
                Verification setups covering engine status, chassis corrosion
                protection, and structural updates.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all shadow-sm">
              <Shield className="text-blue-600 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Secure Broker Logic
              </h3>
              <p className="text-sm text-slate-600">
                An encrypted communication framework allowing users to close
                procurement deals directly with active verified sellers.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all shadow-sm">
              <Star className="text-blue-600 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Mod Verification
              </h3>
              <p className="text-sm text-slate-600">
                Detailed itemization support for tracking snorkel systems, bull
                bars, and lift installations correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 cursor-pointer inline-flex"
            >
              <Truck className="text-blue-500 w-6 h-6 cursor-pointer" />
              <span className="text-xl font-black tracking-tighter cursor-pointer">
                LUX<span className="text-blue-500 cursor-pointer">WAY</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              The premier ecosystem for authenticated, high-performance Toyota
              Hilux trucks. Strength meets pure class.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase text-slate-300 tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li
                onClick={() => scrollToSection("home")}
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection("inventory")}
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Inventory
              </li>
              <li
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSection("services")}
                className="hover:text-blue-400 cursor-pointer transition-colors"
              >
                Services
              </li>
            </ul>
          </div>

          {/* Column 3: Legal / Specs */}
          <div>
            <h4 className="text-sm font-bold uppercase text-slate-300 tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Verification Criteria
              </li>
            </ul>
          </div>

          {/* Column 4: Socials (Inline SVGs to bypass Lucide import issues) */}
          <div>
            <h4 className="text-sm font-bold uppercase text-slate-300 tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-slate-400 hover:text-pink-500 transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} LuxWay. All rights reserved.</p>
          <p>Engineered for Hilux Enthusiasts.</p>
        </div>
      </footer>
    </main>
  );
}
