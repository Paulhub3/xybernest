import { ArrowUpRight } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import comma from '../assets/comma.png';

const AboutUs = () => {
  return (
    <div className="w-full bg-[#1E1E1E] text-white overflow-hidden">   
      {/* Main content section - matching the exact dimensions */}
      <div className="max-w-screen-xl md:mx-auto pt-24 pb-16 px-2.5 lg:px-8 relative z-10">
        {/* Content with border - exact as shown in image */}
        <div className="">
          <div className="flex flex-col space-y-24 md:flex-row md:space-y-0">
            {/* Left column - We are Xybernest section - animated from left */}
            <Motion.div 
              className="md:w-[60%] p-4 md:p-12"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8">
                We are <span className="text-white">Xybernest</span>
              </h1>
              
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                We empower businesses and individuals to thrive by
                offering expert services in Real Estate, Facility
                Management, ICT Solutions, and General Contracts &
                Supplies. We believe in building lasting partnerships
                and delivering exceptional value in every project we
                undertake.
              </p>
              
              {/* Get In Touch button with exact styling */}
              <div className="mt-8 md:mt-16">
                <Motion.button 
                  className="bg-gray-800 text-white rounded px-6 py-3 inline-flex items-center gap-2 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Get In Touch
                  <ArrowUpRight size={18} />
                </Motion.button>
              </div>
            </Motion.div>
            
            {/* Right column - Mission statement - animated from right */}
            <Motion.div 
              className="md:w-[55%] p-4 md:p-12 flex items-center relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative z-10">
                {/* Comma image with subtle animation */}
                <Motion.img 
                  src={comma} 
                  alt="comma" 
                  className="w-40 h-40 absolute -top-10 right-0"
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                
                {/* Mission statement with animated text appearing */}
                <h3 className="text-2xl md:text-4xl font-semibold md:font-bold leading-relaxed text-[#DA95FB] relative">
                  <Motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    To be the leading provider
                  </Motion.span>
                  <Motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    of integrated solutions,
                  </Motion.span>
                  <Motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    empowering businesses
                  </Motion.span>
                  <Motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    and individuals to achieve
                  </Motion.span>
                  <Motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                  >
                    their full potential.
                  </Motion.span>
                </h3>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>

      {/* Background watermark text with subtle animation */}
      <Motion.div 
        className="bottom-0 left-0 right-0 opacity-10 overflow-hidden mx-52 lg:block hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="text-[20rem] font-bold leading-none tracking-tighter text-gray-700">
          Xybernest
        </div>
      </Motion.div>
    </div>
  );
};

export default AboutUs;