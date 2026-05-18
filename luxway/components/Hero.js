"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
          alt="Toyota Hilux"
          className="h-full w-full object-cover scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 lg:px-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-widest text-red-500 uppercase">
              Premium Hilux Marketplace
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            BUILT FOR
            <br />
            <span className="text-red-600">ADVENTURE</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Discover powerful Toyota Hilux trucks engineered for rugged
            performance, luxury comfort, and unstoppable reliability. Welcome to
            LuxWay — where strength meets class.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 shadow-2xl shadow-red-600/30">
              Explore Inventory
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20">
              List Your Truck
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-xl">
            <div>
              <h2 className="text-3xl font-bold text-white">500+</h2>
              <p className="text-sm text-gray-400">Luxury Trucks</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">98%</h2>
              <p className="text-sm text-gray-400">Customer Trust</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">24/7</h2>
              <p className="text-sm text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
