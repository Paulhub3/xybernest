import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import futuristicBackground from '../assets/futuristic-hud.png'; 
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
    .then((result) => {
      console.log(result);
      alert("Message Sent!");
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
      });
    })
    .catch(() => {
      alert("Oops! Something went wrong. Please try again later.");
    });
  };

  return (
    <div id="contact" className="w-full relative bg-[#147D92]  overflow-hidden">
      {/* Background image with futuristic HUD */}
      <div className="absolute inset-0 z-0">
        <img 
          src={futuristicBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
    
      
      {/* Content container */}
      <div className="md:max-w-5xl md:mx-20 lg:mx-36 px-8 py-12 relative z-10 text-white">
        {/* Heading section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Ready to partner with Xybernest?</h2>
          <p className="text-white/90 text-sm md:text-base">
            Contact us today to discuss your needs and discover
            how we can help you achieve your goals.
          </p>
        </div>
        
        {/* Form section */}
        <form onSubmit={handleSubmit}>
          <div className="block space-y-4 lg:flex lg:flex-row lg:space-x-8 lg:relative">
            <div className="block w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name field */}
                  <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    placeholder="e.g. John" 
                    className="w-full p-3 rounded bg-white/10 border border-teal-400/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                </div>
                
                {/* Company field */}
                <div>
                <label htmlFor="company" className="block text-sm mb-2">Company (Optional)</label>
                <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={formData.company}
                    placeholder="e.g. Xynerbest Solutions" 
                    className="w-full p-3 rounded bg-white/10 border border-teal-400/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}

                />
                </div>
            </div>
                
            {/* Email field */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                placeholder="e.g. name@domain.com" 
                className="w-full p-3 rounded bg-white/10 border border-teal-400/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                />
            </div>
            
            {/* Message field */}
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea 
                id="message" 
                name="message"
                rows="5" 
                value={formData.message}
                placeholder="Input Message" 
                className="w-full p-3 rounded bg-white/10 border border-teal-400/30 text-white placeholder-white/50 focus:outline-none focus:border-white/50 resize-none"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                ></textarea>
            </div>
          </div>
           {/* Submit button */}
           <div className="flex lg:justify-end h-12 md:bottom-11 lg:absolute lg:-right-44 lg:px-2">
                <button 
                type="submit"
                className="bg-white hover:bg-white/90 text-teal-700 rounded-md px-6 py-3 font-semibold text-xs md:text-sm flex items-center gap-2 transition-colors"
                >
                Get In Touch
                <ArrowUpRight size={18} />
                </button>
            </div>
          </div>
        </form>
      </div>
    
    </div>
  );
};

export default ContactUs;