"use client";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-28 px-6 lg:px-20 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
          THE ROAD ENDS. <br />
          <span className="text-red-600">LUXWAY BEGINS.</span>
        </h1>
        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          LuxWay is a dedicated, elite online marketplace specializing
          exclusively in premium Toyota Hilux variations. We bridge the gap
          between heavy mechanical hardware utility and high-end security.
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed mb-10">
          Every vehicle structural component hosted on our platform undergoes
          extreme tracking compliance, ensuring our buyers encounter authentic
          heavy-machinery capability paired alongside modern, professional
          security checks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
            <h3 className="text-lg font-bold text-red-500 mb-2">Our Mission</h3>
            <p className="text-sm text-neutral-400">
              To cultivate a secure ecosystem providing rugged off-road
              automotive units to professionals who depend on pure performance
              layout structures.
            </p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
            <h3 className="text-lg font-bold text-red-500 mb-2">
              Our Quality Standard
            </h3>
            <p className="text-sm text-neutral-400">
              We bypass traditional standard car dealership frameworks to ensure
              every commercial or private truck listed is genuinely unbreakable.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
