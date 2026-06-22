import React from "react";
import { ArrowRight } from "lucide-react";
import { promoCards } from "../mock/mock";

const Promotions = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-[12px] tracking-[0.22em] font-bold text-[#E31837] mb-2">SPECIAL OFFERS</div>
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#0a2240] leading-tight tracking-tight">
              Travel further with Delta
            </h2>
          </div>
          <a href="#" className="text-[14px] font-bold text-[#0a2240] hover:text-[#E31837] underline transition-colors">
            See all offers →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoCards.map((p) => (
            <article key={p.id} className="group bg-white rounded-sm overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-52 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="text-[11px] tracking-[0.2em] font-bold text-[#E31837] mb-2">{p.tag}</div>
                <h3 className="text-[22px] font-bold text-[#0a2240] mb-2 leading-tight">{p.title}</h3>
                <p className="text-[14px] text-gray-700 leading-relaxed mb-5">{p.desc}</p>
                <button className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0a2240] group-hover:text-[#E31837] transition-colors border-b-2 border-[#0a2240] group-hover:border-[#E31837] pb-0.5">
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
