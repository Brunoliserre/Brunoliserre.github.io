import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090f]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Footer />
    </main>
  );
}
