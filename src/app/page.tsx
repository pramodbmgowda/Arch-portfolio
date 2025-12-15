import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Renovation from '@/components/Renovation'; 
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Renovation /> 
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}