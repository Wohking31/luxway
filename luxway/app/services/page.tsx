"use client";
import Navbar from "@/components/Navbar";
import { Shield, ShieldAlert, Star, Wrench } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-28 px-6 lg:px-20 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black tracking-tight uppercase border-l-4 border-red-600 pl-4 mb-2">
          Platform Services
        </h1>
        <p className="text-neutral-400 mb-12">
          Professional infrastructure built directly around off-road
          distribution management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl cursor-pointer hover:border-red-600/30 transition-all">
            <Wrench className="text-red-600 w-10 h-10 mb-6 cursor-pointer" />
            <h3 className="text-xl font-bold mb-3 cursor-pointer">
              Verified Condition Reports
            </h3>
            <p className="text-sm text-neutral-400 cursor-pointer">
              We process suspension, chassis fatigue, and turbo diesel output
              ratings before allowing listings online.
            </p>
          </div>

          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl cursor-pointer hover:border-red-600/30 transition-all">
            <Shield className="text-red-600 w-10 h-10 mb-6 cursor-pointer" />
            <h3 className="text-xl font-bold mb-3 cursor-pointer">
              Secure Escrow Framework
            </h3>
            <p className="text-sm text-neutral-400 cursor-pointer">
              Protects transactional communication channels between active
              private buyers and specialized fleet owners.
            </p>
          </div>

          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl cursor-pointer hover:border-red-600/30 transition-all">
            <Star className="text-red-600 w-10 h-10 mb-6 cursor-pointer" />
            <h3 className="text-xl font-bold mb-3 cursor-pointer">
              Mod & Part Sourcing
            </h3>
            <p className="text-sm text-neutral-400 cursor-pointer">
              Gain direct application support for sourcing heavy lifting kits,
              bull bars, and off-road wheels.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
