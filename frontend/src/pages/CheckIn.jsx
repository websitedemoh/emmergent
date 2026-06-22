import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { tripStatusMock } from "../mock/pageMock";
import { CheckCircle2, BadgeCheck, Smartphone } from "lucide-react";

const CheckIn = () => {
  const [conf, setConf] = useState("");
  const [last, setLast] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);
  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setErr("");
    const t = tripStatusMock.find((x) => x.conf.toLowerCase() === conf.trim().toLowerCase() && x.traveler.toLowerCase().includes(last.trim().toLowerCase()));
    if (t) setCheckedIn(true);
    else setErr("Reservation not found. Try ABC123 / Smith.");
  };

  return (
    <Layout>
      <PageHero
        eyebrow="CHECK IN"
        title="Check in for your flight"
        subtitle="Check in online up to 24 hours before your scheduled departure."
        image="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHNreXxlbnwwfHx8fDE3ODIxMDU1MjB8MA&ixlib=rb-4.1.0&q=85"
      />
      <section className="max-w-[1100px] mx-auto px-6 -mt-16 relative z-10">
        {!checkedIn ? (
          <form onSubmit={submit} className="bg-white shadow-2xl rounded-sm overflow-hidden">
            <div className="bg-[#0a2240] px-6 py-4">
              <h2 className="text-white font-bold tracking-wide text-[16px]">Online Check-In</h2>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[14px] text-gray-700 mb-6">Enter your confirmation number and last name to begin.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="text-[12px] font-semibold tracking-wide text-gray-700 uppercase">Confirmation Number</label>
                  <Input value={conf} onChange={(e) => setConf(e.target.value)} placeholder="e.g. ABC123" className="mt-1.5 h-11" />
                </div>
                <div>
                  <label className="text-[12px] font-semibold tracking-wide text-gray-700 uppercase">Last Name</label>
                  <Input value={last} onChange={(e) => setLast(e.target.value)} placeholder="e.g. Smith" className="mt-1.5 h-11" />
                </div>
                <Button type="submit" className="bg-[#E31837] hover:bg-[#B8132D] text-white h-11 rounded-sm font-bold tracking-wide">CHECK IN</Button>
              </div>
              {err && <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-[14px] rounded-sm">{err}</div>}
            </div>
          </form>
        ) : (
          <div className="bg-white shadow-2xl rounded-sm overflow-hidden">
            <div className="bg-[#0a2240] px-6 py-8 text-center">
              <CheckCircle2 size={56} className="text-[#E31837] mx-auto mb-3" />
              <h2 className="text-white font-bold text-[28px] tracking-tight">You're checked in!</h2>
              <p className="text-white/80 text-[14px] mt-2">Your boarding pass is ready and waiting.</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: Smartphone, title: "Mobile Boarding Pass", desc: "Send to your phone or wallet." },
                { icon: BadgeCheck, title: "Sky Priority", desc: "Access priority boarding lanes." },
                { icon: CheckCircle2, title: "Bag Drop", desc: "Drop off bags up to 45 min before flight." },
              ].map((c, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-sm">
                  <c.icon size={28} className="text-[#E31837] mx-auto mb-3" />
                  <h3 className="text-[15px] font-bold text-[#0a2240] mb-1">{c.title}</h3>
                  <p className="text-[13px] text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="px-8 pb-8">
              <button onClick={() => setCheckedIn(false)} className="text-[14px] text-[#0a2240] font-bold underline hover:text-[#E31837]">Check in another reservation</button>
            </div>
          </div>
        )}
      </section>

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#0a2240] mb-6 tracking-tight">Travel Day Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Arrive at the airport at least 2 hours before domestic and 3 hours before international flights.",
              "Have a valid government-issued photo ID ready for security screening.",
              "Bags must be checked at least 45 minutes prior to departure.",
              "Save your boarding pass to your wallet or print before heading to the airport.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-[#f4f4f0] rounded-sm">
                <CheckCircle2 size={20} className="text-[#E31837] mt-0.5 flex-shrink-0" />
                <p className="text-[15px] text-[#0a2240] leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckIn;
