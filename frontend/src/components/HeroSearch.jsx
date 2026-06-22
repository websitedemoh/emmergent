import React, { useEffect, useState } from "react";
import { Plane, BedDouble, Car, MapPin, PackageOpen, Ship, ArrowRightLeft, Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { heroSlides, tripTabs, popularAirports } from "../mock/mock";
import { format } from "date-fns";

const iconMap = { Plane, BedDouble, Car, MapPin, PackageOpen, Ship };

const AirportSelect = ({ label, value, onChange, exclude }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = popularAirports.filter(
    (a) => a.code !== exclude && (a.code.toLowerCase().includes(query.toLowerCase()) || a.city.toLowerCase().includes(query.toLowerCase()))
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-sm hover:border-[#0a2240] focus:border-[#0a2240] transition-colors bg-white">
          <div className="text-[11px] tracking-[0.12em] text-gray-600 font-semibold uppercase">{label}</div>
          <div className="text-[15px] font-bold text-[#0a2240] mt-0.5 truncate">
            {value ? `${value.code} · ${value.city}` : "Select airport"}
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0" align="start">
        <div className="p-3 border-b">
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search city or airport code" className="h-9" />
        </div>
        <div className="max-h-[280px] overflow-y-auto py-1">
          {filtered.length === 0 && <div className="px-4 py-3 text-sm text-gray-500">No results</div>}
          {filtered.map((a) => (
            <button
              key={a.code}
              onClick={() => { onChange(a); setOpen(false); setQuery(""); }}
              className="w-full text-left px-4 py-2.5 hover:bg-gray-50 flex items-center justify-between"
            >
              <div>
                <div className="text-[14px] font-semibold text-[#0a2240]">{a.city}</div>
                <div className="text-[12px] text-gray-500">{a.code}</div>
              </div>
              <MapPin size={14} className="text-gray-400" />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const DatePick = ({ label, value, onChange, fromDate }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-sm hover:border-[#0a2240] focus:border-[#0a2240] transition-colors bg-white">
          <div className="text-[11px] tracking-[0.12em] text-gray-600 font-semibold uppercase">{label}</div>
          <div className="text-[15px] font-bold text-[#0a2240] mt-0.5 flex items-center gap-2">
            <CalendarIcon size={15} className="text-[#0a2240]" />
            {value ? format(value, "EEE, MMM d") : "Select date"}
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={value} onSelect={(d) => { onChange(d); setOpen(false); }} fromDate={fromDate || new Date()} />
      </PopoverContent>
    </Popover>
  );
};

const PassengerSelect = ({ passengers, setPassengers }) => {
  const [open, setOpen] = useState(false);
  const update = (k, delta) => setPassengers((p) => ({ ...p, [k]: Math.max(k === "adults" ? 1 : 0, p[k] + delta) }));
  const total = passengers.adults + passengers.children + passengers.infants;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-sm hover:border-[#0a2240] transition-colors bg-white">
          <div className="text-[11px] tracking-[0.12em] text-gray-600 font-semibold uppercase">Passengers</div>
          <div className="text-[15px] font-bold text-[#0a2240] mt-0.5 flex items-center gap-2">
            <Users size={15} /> {total} {total === 1 ? "passenger" : "passengers"}
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-4" align="start">
        {[
          { k: "adults", label: "Adults", sub: "Age 18+" },
          { k: "children", label: "Children", sub: "Ages 2-17" },
          { k: "infants", label: "Infants", sub: "Under 2" },
        ].map((r) => (
          <div key={r.k} className="flex items-center justify-between py-2.5">
            <div>
              <div className="text-[14px] font-semibold text-[#0a2240]">{r.label}</div>
              <div className="text-[12px] text-gray-500">{r.sub}</div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => update(r.k, -1)} className="w-8 h-8 rounded-full border border-gray-300 text-[#0a2240] hover:border-[#0a2240] disabled:opacity-40" disabled={r.k === "adults" ? passengers[r.k] <= 1 : passengers[r.k] <= 0}>−</button>
              <span className="w-5 text-center text-[14px] font-semibold">{passengers[r.k]}</span>
              <button onClick={() => update(r.k, 1)} className="w-8 h-8 rounded-full border border-gray-300 text-[#0a2240] hover:border-[#0a2240]">+</button>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState(popularAirports[0]);
  const [to, setTo] = useState(popularAirports[2]);
  const [depart, setDepart] = useState();
  const [ret, setRet] = useState();
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabin, setCabin] = useState("economy");

  const swap = () => { setFrom(to); setTo(from); };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-5">
        <RadioGroup value={tripType} onValueChange={setTripType} className="flex gap-5">
          {[
            { v: "round", l: "Round Trip" },
            { v: "oneway", l: "One Way" },
            { v: "multi", l: "Multi-City" },
          ].map((o) => (
            <div key={o.v} className="flex items-center gap-2">
              <RadioGroupItem value={o.v} id={o.v} className="text-[#E31837] border-gray-400" />
              <Label htmlFor={o.v} className="text-[14px] font-medium text-[#0a2240] cursor-pointer">{o.l}</Label>
            </div>
          ))}
        </RadioGroup>
        <Select value={cabin} onValueChange={setCabin}>
          <SelectTrigger className="w-[200px] h-9 text-[13px] border-gray-300">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="economy">Main Cabin</SelectItem>
            <SelectItem value="comfort">Delta Comfort+®</SelectItem>
            <SelectItem value="premium">Premium Select</SelectItem>
            <SelectItem value="first">First Class</SelectItem>
            <SelectItem value="deltaone">Delta One®</SelectItem>
          </SelectContent>
        </Select>
        <label className="flex items-center gap-2 text-[13px] text-[#0a2240]">
          <input type="checkbox" className="w-4 h-4 accent-[#E31837]" /> Shop with Miles
        </label>
        <label className="flex items-center gap-2 text-[13px] text-[#0a2240]">
          <input type="checkbox" className="w-4 h-4 accent-[#E31837]" /> Refundable Fares
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-3 relative">
          <AirportSelect label="From" value={from} onChange={setFrom} exclude={to?.code} />
        </div>
        <div className="md:col-span-3 relative">
          <AirportSelect label="To" value={to} onChange={setTo} exclude={from?.code} />
          <button onClick={swap} aria-label="Swap" className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-300 items-center justify-center text-[#0a2240] hover:border-[#0a2240] hover:text-[#E31837] transition-colors z-10 shadow-sm">
            <ArrowRightLeft size={15} />
          </button>
        </div>
        <div className="md:col-span-2">
          <DatePick label="Depart" value={depart} onChange={setDepart} />
        </div>
        <div className="md:col-span-2">
          <DatePick label="Return" value={ret} onChange={setRet} fromDate={depart} />
        </div>
        <div className="md:col-span-2">
          <PassengerSelect passengers={passengers} setPassengers={setPassengers} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
        <div className="flex flex-wrap gap-4 text-[13px]">
          <button className="text-[#0a2240] underline hover:text-[#E31837] transition-colors font-semibold">Advanced Search</button>
          <button className="text-[#0a2240] underline hover:text-[#E31837] transition-colors font-semibold">Flexible Days</button>
          <button className="text-[#0a2240] underline hover:text-[#E31837] transition-colors font-semibold">Best Fares For Aug</button>
        </div>
        <Button className="bg-[#E31837] hover:bg-[#B8132D] text-white px-10 h-12 rounded-sm text-[15px] font-bold tracking-wide">
          <Search size={16} className="mr-2" /> SEARCH
        </Button>
      </div>
    </div>
  );
};

const HeroSearch = () => {
  const [slide, setSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("flights");

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const current = heroSlides[slide];

  return (
    <section className="relative pt-[100px]">
      <div className="relative h-[460px] md:h-[540px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2240]/70 via-[#0a2240]/35 to-transparent" />
          </div>
        ))}

        <div className="relative max-w-[1320px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-white">
            <div className="text-[12px] tracking-[0.28em] font-bold mb-3 opacity-95">{current.eyebrow}</div>
            <h1 className="text-[44px] md:text-[60px] leading-[1.02] font-bold mb-4 tracking-tight">
              {current.title}
            </h1>
            <p className="text-[17px] md:text-[18px] leading-relaxed mb-6 max-w-md opacity-95">{current.subtitle}</p>
            <button className="inline-flex items-center gap-2 px-7 py-3 bg-[#E31837] hover:bg-[#B8132D] text-white font-bold text-[14px] tracking-wide rounded-sm transition-colors">
              {current.cta.toUpperCase()}
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"}`} />
          ))}
        </div>
      </div>

      {/* Search widget with navy header */}
      <div className="max-w-[1320px] mx-auto px-6 -mt-20 md:-mt-24 relative z-20">
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden">
          {/* Navy header with tabs */}
          <div className="bg-[#0a2240] flex overflow-x-auto">
            {tripTabs.map((t) => {
              const Icon = iconMap[t.icon];
              const active = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-[13px] font-bold tracking-wide whitespace-nowrap border-b-[3px] transition-colors ${active ? "border-[#E31837] text-white bg-[#061629]" : "border-transparent text-white/75 hover:text-white"}`}
                >
                  <Icon size={17} />
                  {t.label.toUpperCase()}
                </button>
              );
            })}
          </div>
          <div className="p-5 md:p-8">
            {activeTab === "flights" ? (
              <FlightSearchForm />
            ) : (
              <div className="py-10 text-center">
                <div className="text-[18px] font-bold text-[#0a2240] mb-2">{tripTabs.find((t) => t.id === activeTab)?.label} search</div>
                <p className="text-[14px] text-gray-600 mb-5">Plan your perfect trip with our trusted partners.</p>
                <Button className="bg-[#0a2240] hover:bg-[#061629] text-white px-8 h-11 rounded-sm font-bold">Continue to {tripTabs.find((t) => t.id === activeTab)?.label}</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
