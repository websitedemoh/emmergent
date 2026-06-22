import React, { useEffect, useState } from "react";
import { ChevronDown, Search, Globe, HelpCircle, User, Menu, X } from "lucide-react";
import { navLinks } from "../mock/mock";

const DeltaLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true">
      <polygon points="32,6 60,58 32,42 4,58" fill="#E31837" />
      <polygon points="32,6 60,58 32,42" fill="#B8132D" />
    </svg>
    <span className="text-[#0a2240] font-bold tracking-[0.22em] text-[15px]">DELTA</span>
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      {/* Utility bar */}
      <div className="hidden md:block bg-[#0a2240]">
        <div className="max-w-[1320px] mx-auto px-6 py-2 flex justify-end items-center gap-6 text-[12px] text-white/90">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <HelpCircle size={14} /> Help Center
          </button>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Globe size={14} /> Worldwide Sites
          </button>
          <button className="flex items-center gap-1.5 font-semibold text-white hover:opacity-80 transition-opacity">
            <User size={14} /> Log In
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-[1320px] mx-auto px-6 h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <DeltaLogo />
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="px-4 h-[64px] flex items-center gap-1 text-[13px] font-bold tracking-[0.08em] text-[#0a2240] hover:text-[#E31837] border-b-[3px] border-transparent hover:border-[#E31837] transition-colors">
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${openMenu === link.label ? "rotate-180" : ""}`} />}
                </button>
                {link.hasDropdown && openMenu === link.label && (
                  <div className="absolute top-full left-0 min-w-[240px] bg-white shadow-xl border-t-2 border-[#E31837] py-2 animate-in fade-in slide-in-from-top-1">
                    {link.items.map((item) => (
                      <a key={item} href="#" className="block px-5 py-2.5 text-[13.5px] text-[#0a2240] hover:bg-gray-50 hover:text-[#E31837] transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-[#0a2240] hover:bg-gray-100 transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="lg:hidden p-2 text-[#0a2240]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a key={link.label} href="#" className="block py-3 text-[14px] font-bold tracking-wider text-[#0a2240] border-b border-gray-100">
              {link.label}
            </a>
          ))}
          <a href="#" className="block py-3 text-[14px] font-bold text-[#0a2240]">Log In</a>
        </div>
      )}
    </header>
  );
};

export default Header;
