'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-stone-900 text-white border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Info */}
          <div>
            <h4 className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-4">Contact Us</h4>
            <h2 className="font-serif text-5xl mb-8">Let's Build <br/> Together</h2>
            <p className="text-stone-400 mb-12 font-light">Have a project in mind? Reach out to our team to discuss your vision.</p>
            
            <div className="space-y-8">
              <div>
                <h4 className="uppercase text-xs tracking-widest text-stone-500 mb-2">Office</h4>
                <p className="text-xl font-serif">123 Architecture Blvd, Design District, NY 10012</p>
              </div>
              <div>
                <h4 className="uppercase text-xs tracking-widest text-stone-500 mb-2">Email</h4>
                <p className="text-xl font-serif">hello@archstudio.com</p>
              </div>
              <div>
                <h4 className="uppercase text-xs tracking-widest text-stone-500 mb-2">Phone</h4>
                <p className="text-xl font-serif">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-8 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-transparent border-b border-stone-700 py-4 focus:outline-none focus:border-gold-500 transition-colors text-white placeholder-stone-600"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent border-b border-stone-700 py-4 focus:outline-none focus:border-gold-500 transition-colors text-white placeholder-stone-600"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-transparent border-b border-stone-700 py-4 focus:outline-none focus:border-gold-500 transition-colors text-white placeholder-stone-600"
            />
            <textarea 
              rows={4} 
              placeholder="Message" 
              className="w-full bg-transparent border-b border-stone-700 py-4 focus:outline-none focus:border-gold-500 transition-colors text-white placeholder-stone-600 resize-none"
            ></textarea>
            
            <button className="bg-white text-black px-12 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-white transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 