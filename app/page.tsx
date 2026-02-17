import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';
import Skills from '@/components/Skills';
import SocialProof from '@/components/SocialProof';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Skills />
        <SocialProof />
      </main>
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}