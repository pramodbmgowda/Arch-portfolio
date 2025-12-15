'use client';
import { useState } from 'react';
import { Mail, Phone, Instagram, ArrowRight, BookOpen, Loader2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // INDUSTRY STANDARD: NO REDIRECT SUBMISSION
  async function handleSubmit(e: any) {
    e.preventDefault(); // <--- THIS PREVENTS THE PAGE RELOAD/REDIRECT
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.target);
    
    // ------------------------------------------------------------------
    // 🔑 IMPORTANT: PASTE YOUR ACCESS KEY BELOW
    // Get it from: https://web3forms.com/
    // ------------------------------------------------------------------
    formData.append("access_key", "addaee74-9d62-412d-811c-985284b86fda"); 

    // Anti-spam botcheck (Hidden field)
    formData.append("botcheck", "");

    try {
      // We use 'fetch' to send data silently in the background
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true); // Show Success Message immediately
        e.target.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT SIDE: CONTACT INFO & BOOK */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
                Get in Touch
              </h4>
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
                Let's Build <br/> Your Vision.
              </h2>
              <p className="text-gray-400 mb-12 font-light text-lg max-w-md">
                Whether it's a Heritage Restoration, Green Renovation, or a Commercial Project, we are ready to bring your dream to life.
              </p>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="group flex items-start gap-4">
                  <div className="p-3 bg-[#111] border border-white/10 rounded-full text-teal-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-1">Call Us</h4>
                    <a href="tel:+919590707771" className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors">
                      +91 95907 07771
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-4">
                  <div className="p-3 bg-[#111] border border-white/10 rounded-full text-teal-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-1">Email Us</h4>
                    <a href="mailto:destinationdesigns.21@gmail.com" className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors break-all">
                      destinationdesigns.21@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="group flex items-start gap-4">
                  <div className="p-3 bg-[#111] border border-white/10 rounded-full text-teal-500 group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-1">Follow Our Work</h4>
                    <a 
                      href="https://www.instagram.com/destinationdesignsindia?igsh=Y3I4Y3lwZnR4bWNv" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors flex items-center gap-2"
                    >
                      @destinationdesignsindia
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BOOK PROMO CARD */}
            <div className="mt-16 p-6 bg-[#111] border border-white/10 flex flex-col sm:flex-row gap-6 items-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Book Icon Placeholder - Replace with <Image> when you have the file */}
              <div className="relative w-24 h-36 shrink-0 bg-gray-800 shadow-xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500 border border-white/10 flex items-center justify-center">
                 <BookOpen className="w-8 h-8 text-gray-600" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-[10px] uppercase tracking-widest font-bold border border-teal-500/20">
                    Published Author
                  </span>
                </div>
                <h3 className="font-serif text-xl text-white mb-1">
                  Chettinad In Your Home
                </h3>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                  Our featured publication showcasing the adaptation of heritage design in modern homes. Special mention in Indian Express.
                </p>
                <Link href="#" className="text-white text-xs uppercase tracking-widest font-bold border-b border-teal-500 pb-1 hover:text-teal-400 transition-colors">
                  Buy The Book
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM (AJAX ENABLED) */}
          <div className="bg-[#111] p-8 md:p-12 border border-white/5 relative">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle className="w-16 h-16 text-teal-500 mb-6" />
                <h3 className="text-3xl font-serif text-white mb-4">Message Sent!</h3>
                <p className="text-gray-400">Thank you. We have received your inquiry securely.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-xs uppercase tracking-widest text-white border-b border-white/30 hover:text-teal-400 hover:border-teal-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot field (hidden) to trap bots */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-teal-500 transition-colors">Name</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-700 font-serif text-lg"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-teal-500 transition-colors">Phone</label>
                    <input 
                      name="phone"
                      type="tel" 
                      className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-700 font-serif text-lg"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-teal-500 transition-colors">Email</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-700 font-serif text-lg"
                  />
                </div>
                
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-teal-500 transition-colors">Project Details</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-700 resize-none font-serif text-lg"
                  ></textarea>
                </div>
                
                {error && <p className="text-red-500 text-xs">{error}</p>}

                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-teal-500 hover:text-white transition-all duration-300 disabled:opacity-50 flex justify-center items-center gap-2"
                >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                     </>
                   ) : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}