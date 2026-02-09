import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <section id="services">
          <Services />
        </section>
        
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="reviews">
          <Reviews />
        </section>
        
        <Contact />
      </main>
      
      <Footer />
      
      <Toaster />
    </div>
  );
}
