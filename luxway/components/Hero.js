"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black bg-[url('/hilux-hero-bg.jpg')] bg-center bg-cover">
      {/* Background overlays */}

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          ENGINEERED FOR THE <br />
          <span className="text-red-600 uppercase">Extraordinary</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          LuxWay is the premier destination for Hilux enthusiasts. Discover
          rugged durability meets professional luxury.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
            Explore Inventory
          </button>

          <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all">
            List Your Truck
          </button>
        </div>
      </div>
    </section>
  );
}
