import React, { useState } from 'react';
import { ChevronDown, X, ArrowUpRight } from 'lucide-react';
import waveImage from '../assets/wave-circle.png'; // Update path as needed

const OurExpertise = () => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState('ict');

  // Toggle accordion item
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="w-full bg-gray-100 py-8 md:py-16">
      <div className="w-11/12 mx-auto px-2 sm:px-4 h-full">
        <div className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-teal-600 via-teal-500 to-blue-500">
          <div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-16 md:gap-10">
            {/* Left column with heading and image */}
            <div className="md:w-2/5 relative pb-16 md:pb-0">
              <h2 className="text-2xl sm:text-4xl text-white font-bold mb-4 md:mb-6">Our Expertise</h2>
              
              <div className="mt-auto absolute -bottom-8 md:-bottom-12 -left-4 md:-left-12">
                <img 
                  src={waveImage} 
                  alt="Abstract wave circle" 
                  className="w-40 sm:w-56 md:w-full max-w-sm mt-8 md:mt-16"
                />
              </div>
            </div>
            
            {/* Right column with accordion */}
            <div className="md:w-3/5 z-10">
              {/* ICT Solutions */}
              <div className="border-b border-teal-400/30">
                <div 
                  className="py-3 md:py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem('ict')}
                >
                  <h3 className="text-sm sm:text-xl font-semibold text-white pr-4">ICT Solutions</h3>
                  <div className="transition-transform duration-300 flex-shrink-0">
                    {openItem === 'ict' ? 
                      <X className="h-5 w-5 text-white animate-[spin_300ms_ease-in-out]" /> : 
                      <ChevronDown className="h-5 w-5 text-white" />
                    }
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === 'ict' 
                      ? 'max-h-[30rem] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 md:pb-6 text-white">
                    <p className="leading-relaxed text-xs sm:text-base">
                      In today's digital age, technology is paramount. 
                      Xynerbest develops and provides cutting-edge ICT 
                      solutions, including web and mobile applications, 
                      tailored to your specific requirements. Our team of 
                      skilled developers leverages the latest technologies to 
                      create innovative and user-friendly solutions that drive 
                      growth and enhance productivity. We also offer expert 
                      consultation and support to ensure seamless 
                      integration and optimal performance.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Facility Management */}
              <div className="border-b border-teal-400/30">
                <div 
                  className="py-3 md:py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem('facility')}
                >
                  <h3 className="text-sm sm:text-xl font-semibold text-white pr-4">Facility Management</h3>
                  <div className="transition-transform duration-300 flex-shrink-0">
                    {openItem === 'facility' ? 
                      <X className="h-5 w-5 text-white animate-[spin_300ms_ease-in-out]" /> : 
                      <ChevronDown className="h-5 w-5 text-white" />
                    }
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === 'facility' 
                      ? 'max-h-[30rem] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 md:pb-6 text-white">
                    <p className="leading-relaxed text-xs sm:text-base">
                      Our facility management services ensure your properties 
                      operate efficiently and safely. We provide maintenance, 
                      security, cleaning, and administrative services tailored 
                      to your specific needs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Real Estate */}
              <div className="border-b border-teal-400/30">
                <div 
                  className="py-3 md:py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem('real-estate')}
                >
                  <h3 className="text-sm sm:text-xl font-semibold text-white pr-4">Real Estate</h3>
                  <div className="transition-transform duration-300 flex-shrink-0">
                    {openItem === 'real-estate' ? 
                      <X className="h-5 w-5 text-white animate-[spin_300ms_ease-in-out]" /> : 
                      <ChevronDown className="h-5 w-5 text-white" />
                    }
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === 'real-estate' 
                      ? 'max-h-[30rem] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 md:pb-6 text-white">
                    <p className="leading-relaxed text-xs sm:text-base">
                      Our real estate services cover property acquisition, 
                      sales, leasing, and management. We help clients find 
                      the perfect properties and maximize their real estate 
                      investments.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* General Contracts & Supplies */}
              <div className="border-b border-teal-400/30">
                <div 
                  className="py-3 md:py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem('contracts')}
                >
                  <h3 className="text-sm sm:text-xl font-semibold text-white pr-4">General Contracts & Supplies:</h3>
                  <div className="transition-transform duration-300 flex-shrink-0">
                    {openItem === 'contracts' ? 
                      <X className="h-5 w-5 text-white animate-[spin_300ms_ease-in-out]" /> : 
                      <ChevronDown className="h-5 w-5 text-white" />
                    }
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === 'contracts' 
                      ? 'max-h-[30rem] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 md:pb-6 text-white">
                    <p className="leading-relaxed text-xs sm:text-base">
                      We handle procurement and supply of quality products 
                      and materials for various business needs. Our contracting 
                      services ensure projects are completed to the highest 
                      standards.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact us button */}
              <div className="mt-6 md:mt-8">
                <button className="bg-white/40 hover:bg-gray-700/50 backdrop-blur-lg transition-colors text-white rounded-md px-4 sm:px-5 py-2 sm:py-3 flex items-center gap-2 font-bold text-xs sm:text-sm">
                  Contact us
                  <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;