import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { skyMilesContent } from "../mock/pageMock";
import { CheckCircle2, ArrowRight, Award, Star } from "lucide-react";

const SkyMiles = () => {
  const { section = "overview" } = useParams();
  const cfg = skyMilesContent[section] || skyMilesContent.overview;
  const heroImage = "https://images.unsplash.com/photo-1731952161718-d645308c05bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxhaXJsaW5lJTIwY2FiaW58ZW58MHx8fHwxNzgyMTA1NTIwfDA&ixlib=rb-4.1.0&q=85";

  return (
    <Layout>
      <PageHero eyebrow={cfg.eyebrow} title={cfg.title} subtitle={cfg.subtitle} image={heroImage} />

      {/* Sub-nav */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 flex gap-1 overflow-x-auto">
          {Object.entries(skyMilesContent).map(([key, val]) => (
            <Link
              key={key}
              to={`/skymiles/${key}`}
              className={`px-5 py-4 text-[13px] font-bold tracking-wide whitespace-nowrap border-b-[3px] transition-colors ${section === key ? "text-[#E31837] border-[#E31837]" : "text-[#0a2240] border-transparent hover:text-[#E31837]"}`}
            >
              {val.title.toUpperCase().replace(".", "").slice(0, 26)}
            </Link>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          {section === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cfg.sections.map((s, i) => (
                <div key={i} className="p-7 border border-gray-200 rounded-sm hover:shadow-lg transition-shadow">
                  <div className="text-[11px] tracking-[0.22em] font-bold text-[#E31837] mb-3">{s.tag}</div>
                  <h3 className="text-[22px] font-bold text-[#0a2240] mb-3 leading-tight">{s.title}</h3>
                  <p className="text-[14px] text-gray-700 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          )}

          {section === "join" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-[32px] font-bold text-[#0a2240] mb-4 tracking-tight">Member benefits</h2>
                <ul className="space-y-3 mb-8">
                  {cfg.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#E31837] mt-0.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0a2240] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 bg-[#E31837] hover:bg-[#B8132D] text-white font-bold px-7 h-12 rounded-sm text-[14px] tracking-wide transition-colors">
                  JOIN FREE TODAY <ArrowRight size={16} />
                </button>
              </div>
              <div className="bg-[#0a2240] text-white p-8 rounded-sm relative overflow-hidden">
                <Award size={60} className="text-[#E31837] mb-4" />
                <div className="text-[12px] tracking-[0.22em] font-bold text-white/70 mb-2">SKYMILES®</div>
                <div className="text-[28px] font-bold mb-1">Welcome Aboard</div>
                <div className="text-[14px] text-white/80 mb-6">Your journey to Medallion® Status starts the moment you join.</div>
                <div className="border-t border-white/15 pt-4 text-[12px] text-white/70">No annual fees. No expiration. Earn miles every day.</div>
              </div>
            </div>
          )}

          {section === "medallion-status" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {cfg.tiers.map((t, i) => (
                <div key={i} className="rounded-sm overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className={`h-32 bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                    <Star size={42} className="text-white" fill="currentColor" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[18px] font-bold text-[#0a2240] mb-1">{t.name}</h3>
                    <div className="text-[12px] text-gray-600 mb-4">From {t.mqd}</div>
                    <ul className="space-y-2">
                      {t.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-[13px] text-[#0a2240]">
                          <CheckCircle2 size={14} className="text-[#E31837] mt-0.5 flex-shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {section === "earn-miles" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cfg.ways.map((w, i) => (
                <div key={i} className="p-6 border border-gray-200 rounded-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#E31837] text-white rounded-sm flex items-center justify-center font-bold mb-4">{i + 1}</div>
                  <h3 className="text-[18px] font-bold text-[#0a2240] mb-2">{w.title}</h3>
                  <p className="text-[14px] text-gray-700 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          )}

          {section === "use-miles" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cfg.uses.map((u, i) => (
                <div key={i} className="p-6 border border-gray-200 rounded-sm hover:shadow-md transition-shadow">
                  <Award size={26} className="text-[#E31837] mb-4" />
                  <h3 className="text-[18px] font-bold text-[#0a2240] mb-2">{u.title}</h3>
                  <p className="text-[14px] text-gray-700 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0a2240] py-14">
        <div className="max-w-[1100px] mx-auto px-6 text-center text-white">
          <div className="text-[12px] tracking-[0.22em] font-bold text-[#E31837] mb-3">READY TO TAKE OFF?</div>
          <h2 className="text-[28px] md:text-[36px] font-bold mb-3 tracking-tight">Start earning miles today</h2>
          <p className="text-[15px] text-white/80 max-w-xl mx-auto mb-6">Join the SkyMiles program and unlock a world of rewards on Delta and our partners.</p>
          <Link to="/skymiles/join" className="inline-flex items-center gap-2 bg-[#E31837] hover:bg-[#B8132D] text-white font-bold px-8 h-12 rounded-sm text-[14px] tracking-wide transition-colors">
            JOIN SKYMILES — IT'S FREE <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SkyMiles;
