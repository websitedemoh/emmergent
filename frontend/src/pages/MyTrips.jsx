import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { tripStatusMock } from "../mock/pageMock";
import { Plane, Calendar, MapPin, ChevronRight } from "lucide-react";

const MyTrips = () => {
  const [conf, setConf] = useState("");
  const [last, setLast] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const find = (e) => {
    e.preventDefault();
    setError("");
    const trip = tripStatusMock.find(
      (t) => t.conf.toLowerCase() === conf.trim().toLowerCase() && t.traveler.toLowerCase().includes(last.trim().toLowerCase())
    );
    if (trip) setResult(trip);
    else { setResult(null); setError("We couldn't find that reservation. Try ABC123 / Smith or XYZ789 / Doe."); }
  };

  return (
    <Layout>
      <PageHero
        eyebrow="MY TRIPS"
        title="Manage your trips"
        subtitle="Find your reservation and manage every detail of your journey with Delta."
        image="https://images.unsplash.com/photo-1499063078284-f78f7d89616a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxhaXJwbGFuZSUyMHNreXxlbnwwfHx8fDE3ODIxMDU1MjB8MA&ixlib=rb-4.1.0&q=85"
      />
      <section className="max-w-[1100px] mx-auto px-6 -mt-16 relative z-10">
        <form onSubmit={find} className="bg-white shadow-2xl rounded-sm overflow-hidden">
          <div className="bg-[#0a2240] px-6 py-4">
            <h2 className="text-white font-bold tracking-wide text-[16px]">Find Your Reservation</h2>
          </div>
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="text-[12px] font-semibold tracking-wide text-gray-700 uppercase">Confirmation Number</label>
              <Input value={conf} onChange={(e) => setConf(e.target.value)} placeholder="e.g. ABC123" className="mt-1.5 h-11" />
            </div>
            <div>
              <label className="text-[12px] font-semibold tracking-wide text-gray-700 uppercase">Last Name</label>
              <Input value={last} onChange={(e) => setLast(e.target.value)} placeholder="e.g. Smith" className="mt-1.5 h-11" />
            </div>
            <Button type="submit" className="bg-[#E31837] hover:bg-[#B8132D] text-white h-11 rounded-sm font-bold tracking-wide">
              FIND TRIP
            </Button>
          </div>
        </form>
        {error && <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 text-[14px] rounded-sm">{error}</div>}
        {result && (
          <div className="mt-6 bg-white border border-gray-200 rounded-sm overflow-hidden">
            <div className="bg-[#f4f4f0] px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-[11px] tracking-[0.15em] font-bold text-gray-600">CONFIRMATION</div>
                <div className="text-[20px] font-bold text-[#0a2240]">{result.conf}</div>
              </div>
              <span className="text-[12px] font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">{result.status}</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-[11px] tracking-[0.15em] font-bold text-gray-600 mb-1">TRAVELER</div>
                <div className="text-[16px] font-bold text-[#0a2240]">{result.traveler}</div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.15em] font-bold text-gray-600 mb-1">FLIGHT</div>
                <div className="text-[16px] font-bold text-[#0a2240]">{result.flight}</div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.15em] font-bold text-gray-600 mb-1">DATE</div>
                <div className="text-[16px] font-bold text-[#0a2240]">{result.date}</div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 text-[#0a2240]">
                <div className="text-[24px] font-bold">{result.from}</div>
                <Plane size={18} className="text-[#E31837]" />
                <div className="text-[24px] font-bold">{result.to}</div>
              </div>
              <div className="flex gap-2">
                <button className="px-5 h-10 border border-[#0a2240] text-[#0a2240] font-bold text-[13px] hover:bg-[#0a2240] hover:text-white transition-colors rounded-sm">CHECK IN</button>
                <button className="px-5 h-10 bg-[#0a2240] text-white font-bold text-[13px] hover:bg-[#061629] transition-colors rounded-sm">VIEW DETAILS</button>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Calendar, title: "Change or cancel", desc: "Adjust your trip with no change fee on Main Cabin and above." },
            { icon: MapPin, title: "Seat selection", desc: "View the seat map and choose your preferred seat." },
            { icon: ChevronRight, title: "Add extras", desc: "Upgrade your seat, add a bag or pre-purchase Wi-Fi." },
          ].map((c, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-sm hover:shadow-md transition-shadow">
              <c.icon size={28} className="text-[#E31837] mb-4" />
              <h3 className="text-[18px] font-bold text-[#0a2240] mb-2">{c.title}</h3>
              <p className="text-[14px] text-gray-700 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default MyTrips;
