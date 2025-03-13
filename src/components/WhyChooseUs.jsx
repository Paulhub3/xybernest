import { motion as Motion } from 'framer-motion';
import Vector from '../assets/Vector.svg';
import UsersFour from '../assets/UsersFour.svg';
import UserFocus from '../assets/UserFocus.svg';
import Circuitry from '../assets/Circuitry.svg';
import Cpu from '../assets/Cpu.svg';
import digitalTouchImage from '../assets/digital-touch.png'; // Update path as needed

const WhyChooseUs = () => {
  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full bg-white text-black py-16 px-4 lg:-mt-32 lg:z-20 lg:relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 px-6 md:px-4">
          {/* Left Column - Why Choose Us Points - Animated from left */}
          <Motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Motion.h2 
              className="md:text-3xl text-xl font-semibold text-teal-500 md:mb-10 mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Why chose Xybernest?
            </Motion.h2>
            
            {/* Point 1 - Integrated Solutions */}
            <Motion.div 
              className="block space-y-3 mb-8"
              custom={0}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mr-4 flex space-x-4">
                <img src={Vector} alt="Vector" className="w-8 h-8" />
                <h3 className="md:text-base text-sm font-semibold mb-2">Integrated Solutions</h3>
              </div>
              <div>
                <p className="text-black text-xs md:text-sm">
                  We offer a holistic approach, combining our expertise across diverse sectors to 
                  provide comprehensive solutions tailored to your needs.
                </p>
              </div>
            </Motion.div>
            
            {/* Point 2 - Experienced team */}
            <Motion.div 
              className="block space-y-3 mb-8"
              custom={1}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mr-4 flex space-x-4">
                <img src={UsersFour} alt="Cpu" className="w-8 h-8 " />
                <h3 className="md:text-base text-sm font-semibold mb-2">Experienced team</h3>
              </div>
              <div>
                <p className="text-black text-xs md:text-sm">
                  Our team comprises seasoned professionals with extensive knowledge and 
                  expertise in their respective fields.
                </p>
              </div>
            </Motion.div>
            
            {/* Point 3 - Client-Centric Approach */}
            <Motion.div 
              className="block space-y-3 mb-8"
              custom={2}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mr-4 flex space-x-4">
                <img src={UserFocus} alt="UserFocus" className="w-8 h-8" />
                <h3 className="md:text-base text-sm font-semibold mb-2">Client-Centric Approach</h3>
              </div>
              <div>
                <p className="text-black text-xs md:text-sm">
                  We prioritize building strong relationships with our clients, understanding their 
                  needs, and exceeding their expectations.
                </p>
              </div>
            </Motion.div>
            
            {/* Point 4 - Commitment to Quality */}
            <Motion.div 
              className="block space-y-3 mb-8"
              custom={3}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mr-4 flex space-x-4">
                <img src={Circuitry} alt="Circuitry" className="w-8 h-8" />
                <h3 className="md:text-base text-sm font-semibold mb-2">Commitment to Quality</h3>
              </div>
              <div>
                <p className="text-black text-xs md:text-sm">
                  We are committed to delivering high-quality services and products that meet 
                  the highest industry standards.
                </p>
              </div>
            </Motion.div>
            
            {/* Point 5 - Innovation & Technology */}
            <Motion.div 
              className="block space-y-3 mb-8"
              custom={4}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mr-4 flex space-x-4">
                <img src={Cpu} alt="Cpu" className="w-8 h-8" />
                <h3 className="md:text-base text-sm font-semibold mb-2">Innovation & Technology</h3>
              </div>
              <div>
                <p className="text-black text-xs md:text-sm">
                  We embrace innovation and leverage the latest technologies to provide cutting-
                  edge solutions that drive growth and efficiency.
                </p>
              </div>
            </Motion.div>
          </Motion.div>
          
          {/* Right Column - Quote and Image - Animated from right */}
          <Motion.div 
            className="md:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {/* Purple Quote Box with rise up animation */}
            <Motion.div 
              className="bg-purple-400 md:p-12 p-8 rounded lg:h-72 md:h-80 h-64"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Motion.h3 
                className="lg:text-4xl md:text-2xl text-xl font-semibold text-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                To deliver exceptional value through our expertise, innovation, and commitment to client satisfaction.
              </Motion.h3>
            </Motion.div>
            
            {/* Technology Image with rise up animation */}
            <Motion.div 
              className="rounded overflow-hidden md:-mt-5 -mt-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <img 
                src={digitalTouchImage} 
                alt="Digital technology" 
                className="w-full md:h-96 h-auto"
              />
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;