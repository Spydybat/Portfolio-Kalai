import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Reviews from "@/components/sections/Reviews";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050B14] text-foreground selection:bg-accent/30 font-sans">
      
      <Navbar />
      <Hero />

      <About />
      <Services />
      <Skills />
      <Resume />
      <Portfolio />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
      
    </main>
  );
}


