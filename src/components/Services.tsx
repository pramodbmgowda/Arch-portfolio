'use client';
import { Leaf, Home, Building2, Warehouse } from 'lucide-react';

const servicesList = [
  {
    id: "01",
    title: "Green Renovation & Rebuilds",
    icon: <Leaf className="w-6 h-6" />,
    // Matches Info: 4a, 4b (Renovation, Rebuild, Reusing materials)
    desc: "Specializing in green design, we renovate and rebuild homes by reusing materials from their previous form—creating eco-friendly spaces with a reduced carbon footprint."
  },
  {
    id: "02",
    title: "Chettinad & Contemporary Interiors",
    icon: <Home className="w-6 h-6" />,
    // Matches Info: 4d (Interior design in both contemporary and Chettinad styles)
    desc: "A fusion of eras. We craft interiors in both sleek Contemporary styles and authentic Chettinad traditions, bringing heritage aesthetics into modern homes."
  },
  {
    id: "03",
    title: "Commercial, Industrial & Retail",
    icon: <Building2 className="w-6 h-6" />,
    // Matches Info: 4c (Commercial, Industrial, Retail design)
    desc: "From high-traffic retail outlets to functional industrial complexes. We design commercial spaces that balance operational efficiency with strong brand identity."
  },
  {
    id: "04",
    title: "Luxury Farmhouse Design",
    icon: <Warehouse className="w-6 h-6" />,
    // Matches Info: 4e (Farmhouse design)
    desc: "Designing serene farmhouse retreats that blend rustic charm with modern luxury, perfectly integrated into their natural surroundings."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <h4 className="text-teal-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            What We Do
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Architecture with Conscience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesList.map((service) => (
            <div key={service.id} className="group p-8 bg-[#111] hover:bg-[#161616] transition-all duration-500 border-t-2 border-transparent hover:border-teal-500">
              <span className="text-teal-900 font-bold text-6xl opacity-20 group-hover:opacity-10 transition-opacity">
                {service.id}
              </span>
              <div className="mt-6 mb-4 text-teal-400 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl text-white font-serif mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}