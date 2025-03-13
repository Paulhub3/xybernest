import { motion as Motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import OurExpertise from './components/OurExpertise';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  // Create scroll progress for the progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Create refs for each section to track their position
  const whyChooseRef = useRef(null);
  const expertiseRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        
        {/* Hero section doesn't need animation as it's the first thing visible */}
        <HeroSection />
        
        {/* About Us*/}
        <AboutUs />
        
        {/* Why Choose Us with scroll animation */}
        <Motion.div
          ref={whyChooseRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <WhyChooseUs />
        </Motion.div>
        
        {/* Our Expertise with scroll animation */}
        <Motion.div
          ref={expertiseRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <OurExpertise />
        </Motion.div>
        
        {/* Contact Us with scroll animation */}
        <Motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactUs />
        </Motion.div>
        
        <Footer />
        
        {/* Progress bar that shows scroll progress */}
        <Motion.div 
          className="fixed left-0 right-0 bottom-0 h-1 bg-teal-500 origin-left z-50"
          style={{ scaleX }} 
        />
      </main>
    </>
  );
}

export default App;