import { Menu, X, Send } from 'lucide-react';
import { navItems } from '../constants';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(''); // 'entering', 'entered', 'exiting'
    const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);
    const navbarRef = useRef(null);
    
    useEffect(() => {
        // A simpler approach using scroll position to determine background
        const handleScroll = () => {
            // You can adjust this threshold based on where your white sections begin
            const scrollThreshold = 100;
            const currentScrollPos = window.scrollY;
            
            // If scrolled past threshold, change background
            if (currentScrollPos > scrollThreshold) {
                setIsOverWhiteSection(true);
            } else {
                setIsOverWhiteSection(false);
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        
        // Call once on mount to set initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        if (mobileMenuOpen) {
            // Start exit animation
            setMenuAnimation('exiting');
            // Delay the actual closing
            setTimeout(() => {
                setMobileMenuOpen(false);
                setMenuAnimation('');
            }, 300); // Match this with animation duration
        } else {
            // Open and start entrance animation
            setMobileMenuOpen(true);
            setMenuAnimation('entering');
            // After animation completes, update state
            setTimeout(() => {
                setMenuAnimation('entered');
            }, 300);
        }
    };

    // Dynamic background class based on scroll position
    const navbarBackgroundClass = isOverWhiteSection 
        ? "backdrop-blur-lg bg-black/30" 
        : "backdrop-blur-lg bg-white/30";

    return (
        <nav ref={navbarRef} className={`sticky top-6 md:top-10 z-50 py-3 ${navbarBackgroundClass} mx-4 md:mx-16 lg:mx-24 rounded-md transition-colors duration-300`}>
            <div className="container mx-auto px-4 relative text-sm">
                <div className="flex items-center justify-between md:py-4">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" className="w-full h-7 lg:h-10" />
                    </div>

                    {/* Nav Items imported from constants folder */}
                    <ul className="hidden lg:flex space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="text-white hover:text-gray-300 transition-colors duration-300 font-semibold text-sm">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Contact us Button */}
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="bg-white text-[#1992a7] px-4 py-3 font-semibold rounded flex">Contact us <span className='ml-2'><Send size={20}/></span></a>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex flex-col justify-end text-white">
                        <button onClick={toggleMenu}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className={`absolute top-full left-0 right-0 z-20 bg-neutral-300 backdrop-blur-lg w-full p-12 flex flex-col justify-center items-center lg:hidden transition-all duration-300 ease-in-out ${menuAnimation === 'entering' ? 'opacity-0 -translate-y-8' : menuAnimation === 'exiting' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4 text-center'>
                                    <a href={item.href} className="text-black hover:text-gray-300 transition-colors duration-300 font-semibold text-sm">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <a href="#" className="bg-white text-[#1992a7] px-4 py-3 font-semibold rounded flex">Contact us <span className='ml-2'><Send size={20}/></span></a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;