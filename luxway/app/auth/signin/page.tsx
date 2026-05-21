"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Truck, User, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function AuthenticationPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Local input state hooks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Auth payload data:", formData);
    // This is where your Node.js API integration will receive data later
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative">
      {/* Back to Home Navigation Floating Anchor */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform cursor-pointer" />
        Back to Home
      </Link>

      {/* Main Container Card */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
        {/* Brand Banner Identity Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-3 cursor-pointer"
          >
            <Truck className="text-blue-600 w-7 h-7 cursor-pointer" />
            <span className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer">
              LUX<span className="text-blue-600 cursor-pointer">WAY</span>
            </span>
          </Link>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
            {isSignUp ? "Create Garage Account" : "Access Your Garage"}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {isSignUp
              ? "Register below to begin listing custom trucks."
              : "Enter your platform credentials to manage profile assets."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Mbugeh Rhoda"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all cursor-text"
                  required={isSignUp}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="developer@luxway.com"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all cursor-text"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all cursor-text"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 cursor-pointer" />
                ) : (
                  <Eye className="w-5 h-5 cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          {/* Core Submission Trigger */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-[0.99] cursor-pointer mt-2"
          >
            {isSignUp ? "Complete Registration" : "Sign In to Fleet"}
          </button>
        </form>

        {/* Custom Visual Divider Section */}
        <div className="relative my-6 text-center">
          <hr className="border-slate-200" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs font-bold uppercase text-slate-400 tracking-wider">
            Or authentication via
          </span>
        </div>

        {/* Federated Social Identity Blocks */}
        <div className="grid grid-cols-1 ">
          {/* Native Google OAuth Hook Interface */}
          <button className="flex items-center justify-center  bg-slate-50 hover:bg-slate-100 border border-slate-200 font-bold py-3 px-10 rounded-xl text-sm transition-all active:scale-[0.98] cursor-pointer">
            <img
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google Logo Icon"
              className="w-4 h-4 cursor-pointer"
            />
            Google
          </button>
        </div>

        {/* Dynamic Context Switcher Link */}
        <p className="text-center text-sm text-slate-600 mt-8">
          {isSignUp
            ? "Already have an active workspace?"
            : "Brand new provider option?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setFormData({ name: "", email: "", password: "" }); // Flush states cleanly
            }}
            className="text-blue-600 font-bold cursor-pointer hover:underline focus:outline-none ml-0.5"
          >
            {isSignUp ? "Log In here" : "Create identity here"}
          </button>
        </p>
      </div>
    </main>
  );
}
