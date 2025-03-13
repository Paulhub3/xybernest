import gradientBg from '../assets/gradient-bg.jpeg'; // Image 2
import meshSphere from '../assets/mesh-sphere.png'; // Image 3

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


const HeroSection = () => {
    
  return (
    <>
    {/* Inject animation styles */}
    <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
    <div className="relative w-full h-screen md:h-[1000px] overflow-hidden -mt-16 md:-mt-32">
      {/* Gradient Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${gradientBg})` }}
      ></div>
      
      {/* Mesh Sphere Overlay */}
      

        {/* Animated Mesh Sphere Overlay */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <div className="relative w-[120%] md:w-[100%] lg:w-[50%] aspect-square animate-slow-spin">
          <img 
            src={meshSphere} 
            alt="" 
            className="w-full h-full max-w-none opacity-90 animate-pulse-subtle"
          />
          <div className="absolute top-0 left-0 w-full h-full animate-reverse-spin">
            <img 
              src={meshSphere} 
              alt="" 
              className="w-full h-full max-w-none opacity-40 scale-110 animate-float"
            />
          </div>
        </div>
      </div>
      

       {/* Dark Overlay for Text Contrast */}
       <div className="absolute inset-0 bg-black/35 z-5"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-2.5 md:px-4  text-center text-white max-w-6xl mx-auto mt-12">
        {/* Desktop Text */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
          <div className="items-center">
            <span className="">
              Connecting you to <span className="text-white font-extrabold">Success </span>
            </span>
            <span className=""> <br />
              through <span className="text-white font-extrabold">Integrated Solutions</span>
            </span>
          </div>
        </h2>
        <p className="text-xs md:text-base  max-w-2xl mx-auto mb-6 font-medium md:font-semibold md:px-4 px-2 text-white">
          We are a dynamic and forward-thinking company dedicated 
          to providing comprehensive solutions across diverse sectors.
        </p>
        
        <a href="#contact" className="flex items-center bg-white/30 hover:bg-gray-700/50 text-white py-3 px-6 rounded-md transition duration-300 backdrop-blur-lg font-bold md:text-sm text-xs">
          Connect with Xynerbest
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right ml-2">
          <path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      </div>
    </div>
    </>
  );
};

export default HeroSection;