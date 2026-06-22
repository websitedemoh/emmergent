import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Smartphone, Mail } from "lucide-react";
import { footerColumns } from "../mock/mock";

const AppCTA = () => (
  <section className="bg-[#0a2240] text-white py-14">
    <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
          <Smartphone size={26} />
        </div>
        <div>
          <div className="text-[12px] tracking-[0.22em] font-bold opacity-80 mb-1">FLY DELTA APP</div>
          <h3 className="text-[24px] md:text-[30px] font-bold tracking-tight">
            Travel made effortless on the go
          </h3>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="px-6 h-11 bg-white text-[#0a2240] font-bold rounded-sm text-[14px] hover:bg-gray-100 transition-colors">
          App Store
        </button>
        <button className="px-6 h-11 bg-white text-[#0a2240] font-bold rounded-sm text-[14px] hover:bg-gray-100 transition-colors">
          Google Play
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => {
  return (
    <>
      <AppCTA />
      <footer className="bg-[#061629] text-gray-300">
        <div className="max-w-[1320px] mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-bold text-[14px] mb-4 tracking-wide">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <svg width="34" height="34" viewBox="0 0 64 64">
                <polygon points="32,6 60,58 32,42 4,58" fill="#E31837" />
                <polygon points="32,6 60,58 32,42" fill="#B8132D" />
              </svg>
              <span className="text-white font-bold tracking-[0.22em] text-[14px]">DELTA</span>
            </div>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-gray-500">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Customer Service Plan</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
              <a href="#" className="hover:text-white transition-colors">Notice of Privacy Practices</a>
            </div>
            <div>© 2007-2025 Delta Air Lines, Inc.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
