import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import footerWave from '../assets/footer-wave.png'; 
import logo from '../assets/logo.png';

// Add animation keyframes and classes
const animationStyles = `
  @keyframes slow-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes reverse-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }
  @keyframes pulse-subtle {
    0% { opacity: 0.85; }
    50% { opacity: 0.95; }
    100% { opacity: 0.85; }
  }
  @keyframes float {
    0% { transform: translateY(0) scale(1.05); }
    50% { transform: translateY(-10px) scale(1.1); }
    100% { transform: translateY(0) scale(1.05); }
  }
  .animate-slow-spin {
    animation: slow-spin 120s linear infinite;
  }
  .animate-reverse-spin {
    animation: reverse-spin 90s linear infinite;
  }
  .animate-pulse-subtle {
    animation: pulse-subtle 8s ease-in-out infinite;
  }
  .animate-float {
    animation: float 15s ease-in-out infinite;
  }
`;

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white relative overflow-hidden py-12">
      {/* Inject animation styles */}
     <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      {/* Background wave pattern */}
      <div className="absolute right-0 top-0 bottom-0 z-0">
        <div className="relative w-[100%] lg:w-[70%] aspect-square animate-slow-spin">
          <img 
            src={footerWave} 
            alt="" 
            className="w-full h-full max-w-none opacity-90 animate-pulse-subtle rounded-full"
          />
          <div className="absolute top-0 left-0 w-full h-full animate-reverse-spin">
            <img 
              src={footerWave} 
              alt="" 
              className="w-full h-full max-w-none opacity-40 scale-110 animate-float rounded-full"
            />
          </div>
        </div>
      </div>


      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column - Logo and copyright */}
          <div>
            <img src={logo} alt="Xynerbest" className="h-8 mb-12" />
            
            {/* Copyright text will be shown in mobile, hidden in desktop */}
            <p className="text-gray-400 text-sm md:hidden mt-8">
              © 2024 by Product Name. All rights reserved.
            </p>
          </div>
          
          {/* Middle column - Navigation links */}
          <div className="flex flex-col space-y-4 text-xs md:text-sm">
            <a href="/about" className="hover:text-teal-400 transition-colors">About us</a>
            <a href="/expertise" className="hover:text-teal-400 transition-colors">Our Expertise</a>
            <a href="/why-choose" className="hover:text-teal-400 transition-colors">Why Choose Xynerbest</a>
          </div>
          
            {/* Right column - Newsletter and Contact */}
            <div>
              <h3 className="mb-3 text-xs md:text-sm">Subscribe to our Newsletter</h3>
              <div className="block space-y-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-gray-800 border border-gray-700 rounded-l p-2 text-sm w-full focus:outline-none focus:border-teal-500"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-white rounded-r px-4 py-2 text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xs md:text-sm">Contact us</h3>
              <p className="text-gray-400 text-xs md:text-  sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
        </div>
      </div>
      
      {/* Footer bottom - horizontal line */}
      <div className="container mx-auto px-4 border-t border-gray-700">
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright text - hidden in mobile, shown in desktop */}
          <p className="text-white text-sm hidden md:block">
            © 2024 by Product Name. All rights reserved.
          </p>
          
          {/* Policy links */}
          <div className="flex space-x-6 my-4 md:my-0">
            <a href="/privacy" className="text-white hover:text-gray-400 text-sm transition-colors">Privacy & Policy</a>
            <a href="/terms" className="text-white hover:text-gray-400 text-sm transition-colors">Terms of Use</a>
          </div>
          
          {/* Social media icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-text-white hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-white hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;