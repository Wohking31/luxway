import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function app() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      {/* About section will go here next */}
    </main>
  );
}
