import React from "react";
import { ArrowRight } from "lucide-react";
import { newsItems } from "../mock/mock";

const News = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-[12px] tracking-[0.22em] font-semibold text-[#C8102E] mb-2">NEWS HUB</div>
            <h2 className="text-[32px] md:text-[40px] font-light text-[#1a1a1a] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              The latest from Delta
            </h2>
          </div>
          <a href="#" className="text-[14px] font-semibold text-[#003366] hover:text-[#C8102E] underline transition-colors">
            Visit News Hub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {newsItems.map((n) => (
            <article key={n.id} className="group cursor-pointer">
              <div className="h-1 w-12 bg-[#C8102E] mb-5 group-hover:w-20 transition-all duration-300" />
              <div className="text-[12px] tracking-wider font-semibold text-gray-500 mb-3">{n.date}</div>
              <h3 className="text-[22px] font-semibold text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#003366] transition-colors">
                {n.title}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">{n.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#003366] group-hover:text-[#C8102E] transition-colors">
                Read more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
