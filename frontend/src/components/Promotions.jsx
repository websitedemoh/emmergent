import React from "react";
import { ArrowRight } from "lucide-react";
import { promoCards } from "../mock/mock";

const Promotions = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-[12px] tracking-[0.22em] font-semibold text-[#C8102E] mb-2">SPECIAL OFFERS</div>
            <h2 className="text-[32px] md:text-[40px] font-light text-[#1a1a1a] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Travel further with Delta
            </h2>
          </div>
          <a href="#" className="text-[14px] font-semibold text-[#003366] hover:text-[#C8102E] underline transition-colors">
            See all offers →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoCards.map((p) => (
            <article key={p.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-52 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="text-[11px] tracking-[0.2em] font-semibold text-[#C8102E] mb-2">{p.tag}</div>
                <h3 className="text-[22px] font-semibold text-[#1a1a1a] mb-2 leading-tight">{p.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-5">{p.desc}</p>
                <button className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#003366] group-hover:text-[#C8102E] transition-colors">
                  {p.cta} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
