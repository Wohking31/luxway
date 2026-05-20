"use client";
import Navbar from "@/components/Navbar";

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

export default function Inventory() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-28 px-6 lg:px-20 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black tracking-tight uppercase border-l-4 border-red-600 pl-4 mb-2">
          Available Fleet
        </h1>
        <p className="text-neutral-400 mb-10">
          Browse through our verified, highly rugged premium trucks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TRUCKS.map((truck) => (
            <div
              key={truck.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:border-red-600/50 transition-all group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-red-600 font-bold px-3 py-1 rounded-md text-xs">
                  {truck.year}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{truck.title}</h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Engine Spec: {truck.engine}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
                  <span className="text-2xl font-black text-red-500">
                    {truck.price}
                  </span>
                  <button className="bg-neutral-800 hover:bg-red-600 border border-neutral-700 hover:border-red-600 px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
