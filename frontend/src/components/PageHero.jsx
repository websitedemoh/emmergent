import React from "react";

const PageHero = ({ eyebrow, title, subtitle, image }) => (
  <section className="relative h-[320px] md:h-[380px] overflow-hidden">
    <div
      className="absolute inset-0"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a2240]/85 via-[#0a2240]/55 to-[#0a2240]/30" />
    <div className="relative max-w-[1320px] mx-auto px-6 h-full flex items-center">
      <div className="max-w-2xl text-white">
        {eyebrow && (
          <div className="text-[12px] tracking-[0.28em] font-bold mb-3 opacity-95">{eyebrow}</div>
        )}
        <h1 className="text-[36px] md:text-[52px] font-bold leading-[1.05] tracking-tight mb-3">
          {title}
        </h1>
        {subtitle && <p className="text-[16px] md:text-[18px] opacity-95 max-w-xl leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  </section>
);

export default PageHero;
