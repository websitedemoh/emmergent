import React from "react";
import { ArrowRight, Plane } from "lucide-react";
import { destinations } from "../mock/mock";

const Destinations = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="max-w-2xl">
            <div className="text-[12px] tracking-[0.22em] font-semibold text-[#C8102E] mb-2">EXPLORE</div>
            <h2 className="text-[32px] md:text-[40px] font-light text-[#1a1a1a] leading-tight mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Where to next?
            </h2>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Discover the best fares from your home airport. We fly nonstop to over 300 destinations worldwide.
            </p>
          </div>
          <a href="#" className="text-[14px] font-semibold text-[#003366] hover:text-[#C8102E] underline transition-colors">
            View all destinations →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((d, i) => (
            <a
              key={d.id}
              href="#"
              className={`group relative overflow-hidden rounded-lg block ${i === 0 ? "md:col-span-2 md:row-span-2 h-[520px]" : "h-[250px]"}`}
            >
              <img src={d.image} alt={d.city} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <div className="text-[12px] tracking-wider font-medium opacity-90 mb-1">{d.country}</div>
                <div className="flex items-end justify-between gap-3">
                  <h3 className={`font-light leading-tight ${i === 0 ? "text-[40px]" : "text-[26px]"}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {d.city}
                  </h3>
                  <div className="flex items-center gap-2 text-[14px] font-semibold opacity-95 group-hover:opacity-100">
                    <Plane size={14} /> {d.price}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Book now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
