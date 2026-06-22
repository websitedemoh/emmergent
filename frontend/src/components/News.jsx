import React from "react";
import { ArrowRight } from "lucide-react";
import { newsItems } from "../mock/mock";

const News = () => {
  return (
    <section className="py-16 md:py-20 bg-[#f4f4f0]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-[12px] tracking-[0.22em] font-bold text-[#E31837] mb-2">NEWS HUB</div>
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#0a2240] leading-tight tracking-tight">
              The latest from Delta
            </h2>
          </div>
          <a href="#" className="text-[14px] font-bold text-[#0a2240] hover:text-[#E31837] underline transition-colors">
            Visit News Hub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {newsItems.map((n) => (
            <article key={n.id} className="group cursor-pointer">
              <div className="h-1 w-12 bg-[#E31837] mb-5 group-hover:w-20 transition-all duration-300" />
              <div className="text-[12px] tracking-[0.15em] font-bold text-gray-500 mb-3">{n.date}</div>
              <h3 className="text-[22px] font-bold text-[#0a2240] leading-snug mb-3 tracking-tight group-hover:text-[#E31837] transition-colors">
                {n.title}
              </h3>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-4">{n.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0a2240] group-hover:text-[#E31837] transition-colors">
                READ MORE <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
