'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <div>
            <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-4">
              Contact Us
            </h4>
            <h2 className="font-serif text-5xl mb-8 leading-tight">
              Let's Build <br/> Together
            </h2>
            <p className="text-gray-400 mb-12 font-light text-lg">
              Have a project in mind? Reach out to our team to discuss your vision.
            </p>
            
            <div className="space-y-8">
              <div className="group">
                <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-2">Office</h4>
                <p className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors">
                  123 Architecture Blvd, Design District, NY 10012
                </p>
              </div>
              <div className="group">
                <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-2">Email</h4>
                <p className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors">
                  hello@archstudio.com
                </p>
              </div>
              <div className="group">
                <h4 className="uppercase text-xs tracking-widest text-gray-500 mb-2">Phone</h4>
                <p className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="space-y-8 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-600"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-600"
              />
            </div>
            
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-600"
            />
            
            <textarea 
              rows={4} 
              placeholder="Message" 
              className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-teal-500 transition-colors text-white placeholder-gray-600 resize-none"
            ></textarea>
            
            <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-teal-500 hover:text-white transition-all duration-300">
               Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}