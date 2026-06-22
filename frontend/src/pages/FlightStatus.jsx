import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { flightStatusMock } from "../mock/pageMock";
import { Plane, Clock } from "lucide-react";

const StatusPill = ({ status }) => {
  const color = status === "On Time" ? "bg-green-100 text-green-700" : status === "Boarding" ? "bg-blue-100 text-blue-700" : status === "Delayed" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-700";
  return <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${color}`}>{status.toUpperCase()}</span>;
};

const FlightStatus = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(flightStatusMock);

  const search = (e) => {
    e.preventDefault();
    if (!query.trim()) { setList(flightStatusMock); return; }
    const q = query.toLowerCase();
    setList(
      flightStatusMock.filter(
        (f) => f.num.toLowerCase().includes(q) || f.from.toLowerCase().includes(q) || f.to.toLowerCase().includes(q)
      )
    );
  };

  return (
    <Layout>
      <PageHero
        eyebrow="FLIGHT STATUS"
        title="Track your flight"
        subtitle="Get real-time updates on departures, arrivals, gates and aircraft information."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxhaXJwbGFuZSUyMHNreXxlbnwwfHx8fDE3ODIxMDU1MjB8MA&ixlib=rb-4.1.0&q=85"
      />
      <section className="max-w-[1100px] mx-auto px-6 -mt-16 relative z-10">
        <form onSubmit={search} className="bg-white shadow-2xl rounded-sm overflow-hidden">
          <div className="bg-[#0a2240] px-6 py-4">
            <h2 className="text-white font-bold tracking-wide text-[16px]">Search Flight Status</h2>
          </div>
          <div className="p-6 md:p-8 flex gap-4 items-end flex-wrap">
            <div className="flex-1 min-w-[260px]">
              <label className="text-[12px] font-semibold tracking-wide text-gray-700 uppercase">Flight number or city / airport</label>
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. DL 1432 or ATL or LAX" className="mt-1.5 h-11" />
            </div>
            <Button type="submit" className="bg-[#E31837] hover:bg-[#B8132D] text-white h-11 px-8 rounded-sm font-bold tracking-wide">SEARCH</Button>
          </div>
        </form>
      </section>

      <section className="py-12 max-w-[1100px] mx-auto px-6">
        <div className="text-[12px] tracking-[0.22em] font-bold text-[#E31837] mb-2">LIVE STATUS</div>
        <h2 className="text-[28px] font-bold text-[#0a2240] mb-6 tracking-tight">Today's Delta flights</h2>
        {list.length === 0 ? (
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-sm text-center text-gray-600">No flights found. Try ATL, LAX or DL 1432.</div>
        ) : (
          <div className="space-y-3">
            {list.map((f) => (
              <div key={f.num} className="bg-white border border-gray-200 rounded-sm p-5 md:p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0a2240] text-white rounded-sm flex items-center justify-center">
                      <Plane size={20} />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.12em] font-bold text-gray-500">FLIGHT</div>
                      <div className="text-[18px] font-bold text-[#0a2240]">{f.num}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-center">
                      <div className="text-[22px] font-bold text-[#0a2240]">{f.from}</div>
                      <div className="text-[12px] text-gray-600">{f.fromTime}</div>
                    </div>
                    <div className="w-12 h-px bg-gray-300 relative">
                      <Plane size={14} className="text-[#E31837] absolute -top-2 left-1/2 -translate-x-1/2" />
                    </div>
                    <div className="text-center">
                      <div className="text-[22px] font-bold text-[#0a2240]">{f.to}</div>
                      <div className="text-[12px] text-gray-600">{f.toTime}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <StatusPill status={f.status} />
                    <div className="text-[12px] text-gray-600">Gate <span className="font-bold text-[#0a2240]">{f.gate}</span></div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-[12px] text-gray-600">
                  <Clock size={13} /> {f.aircraft}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default FlightStatus;
