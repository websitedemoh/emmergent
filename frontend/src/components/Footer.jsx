import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Smartphone, Mail } from "lucide-react";
import { footerColumns } from "../mock/mock";

const AppCTA = () => (
  <section className="bg-[#003366] text-white py-14">
    <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
          <Smartphone size={26} />
        </div>
        <div>
          <div className="text-[12px] tracking-[0.22em] font-semibold opacity-80 mb-1">FLY DELTA APP</div>
          <h3 className="text-[24px] md:text-[28px] font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Travel made effortless on the go
          </h3>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="px-6 h-11 bg-white text-[#003366] font-semibold rounded-md text-[14px] hover:bg-gray-100 transition-colors">
          App Store
        </button>
        <button className="px-6 h-11 bg-white text-[#003366] font-semibold rounded-md text-[14px] hover:bg-gray-100 transition-colors">
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
      <footer className="bg-[#1a1a1a] text-gray-300">
        <div className="max-w-[1320px] mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold text-[14px] mb-4 tracking-wide">{col.title}</h4>
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

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <svg width="32" height="32" viewBox="0 0 64 64">
                <polygon points="32,8 60,56 32,42 4,56" fill="#E01933" />
                <polygon points="32,8 60,56 32,42" fill="#9E0B1F" />
              </svg>
              <span className="text-white font-semibold tracking-[0.18em] text-[14px]">DELTA</span>
            </div>
            <div className="flex items-center gap-5">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
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
