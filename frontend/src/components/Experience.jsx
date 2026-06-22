import React from "react";
import { ArrowRight } from "lucide-react";
import { experienceCards } from "../mock/mock";

const Experience = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f0]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[12px] tracking-[0.22em] font-semibold text-[#C8102E] mb-2">THE DELTA EXPERIENCE</div>
          <h2 className="text-[32px] md:text-[44px] font-light text-[#1a1a1a] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Designed with you in mind
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experienceCards.map((e, i) => (
            <article key={e.id} className={`group ${i === 1 ? "md:translate-y-12" : ""}`}>
              <div className="overflow-hidden rounded-lg mb-6">
                <img src={e.image} alt={e.title} className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="text-[11px] tracking-[0.22em] font-semibold text-[#C8102E] mb-2">{e.label}</div>
              <h3 className="text-[28px] md:text-[32px] font-light text-[#1a1a1a] leading-tight mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {e.title}
              </h3>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-5 max-w-lg">{e.desc}</p>
              <button className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#003366] hover:text-[#C8102E] border-b-2 border-[#003366] hover:border-[#C8102E] pb-0.5 transition-colors">
                {e.cta} <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
