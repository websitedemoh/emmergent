import React, { useEffect, useState } from "react";
import { Plane, BedDouble, Car, MapPin, PackageOpen, Ship, ArrowRightLeft, Calendar as CalendarIcon, Users, ChevronDown, Search } from "lucide-react";
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
        <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:border-[#003366] transition-colors bg-white">
          <div className="text-[11px] tracking-wider text-gray-500 font-semibold uppercase">{label}</div>
          <div className="text-[15px] font-semibold text-[#1a1a1a] mt-0.5 truncate">
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
                <div className="text-[14px] font-semibold text-[#1a1a1a]">{a.city}</div>
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
        <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:border-[#003366] transition-colors bg-white">
          <div className="text-[11px] tracking-wider text-gray-500 font-semibold uppercase">{label}</div>
          <div className="text-[15px] font-semibold text-[#1a1a1a] mt-0.5 flex items-center gap-2">
            <CalendarIcon size={15} className="text-[#003366]" />
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
        <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:border-[#003366] transition-colors bg-white">
          <div className="text-[11px] tracking-wider text-gray-500 font-semibold uppercase">Passengers</div>
          <div className="text-[15px] font-semibold text-[#1a1a1a] mt-0.5 flex items-center gap-2">
            <Users size={15} className="text-[#003366]" /> {total} {total === 1 ? "passenger" : "passengers"}
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
              <div className="text-[14px] font-semibold text-[#1a1a1a]">{r.label}</div>
              <div className="text-[12px] text-gray-500">{r.sub}</div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => update(r.k, -1)} className="w-8 h-8 rounded-full border border-gray-300 text-[#003366] hover:border-[#003366] disabled:opacity-40" disabled={r.k === "adults" ? passengers[r.k] <= 1 : passengers[r.k] <= 0}>−</button>
              <span className="w-5 text-center text-[14px] font-semibold">{passengers[r.k]}</span>
              <button onClick={() => update(r.k, 1)} className="w-8 h-8 rounded-full border border-gray-300 text-[#003366] hover:border-[#003366]">+</button>
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
              <RadioGroupItem value={o.v} id={o.v} className="text-[#C8102E] border-gray-400" />
              <Label htmlFor={o.v} className="text-[14px] font-medium text-[#1a1a1a] cursor-pointer">{o.l}</Label>
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
        <label className="flex items-center gap-2 text-[13px] text-[#1a1a1a]">
          <input type="checkbox" className="w-4 h-4 accent-[#C8102E]" /> Shop with Miles
        </label>
        <label className="flex items-center gap-2 text-[13px] text-[#1a1a1a]">
          <input type="checkbox" className="w-4 h-4 accent-[#C8102E]" /> Refundable Fares
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-3 relative">
          <AirportSelect label="From" value={from} onChange={setFrom} exclude={to?.code} />
        </div>
        <div className="md:col-span-3 relative">
          <AirportSelect label="To" value={to} onChange={setTo} exclude={from?.code} />
          <button onClick={swap} aria-label="Swap" className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-300 items-center justify-center text-[#003366] hover:border-[#003366] hover:text-[#C8102E] transition-colors z-10">
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
          <button className="text-[#003366] underline hover:text-[#C8102E] transition-colors font-medium">Advanced Search</button>
          <button className="text-[#003366] underline hover:text-[#C8102E] transition-colors font-medium">Flexible Days</button>
          <button className="text-[#003366] underline hover:text-[#C8102E] transition-colors font-medium">Best Fares For May</button>
        </div>
        <Button className="bg-[#C8102E] hover:bg-[#9E0B1F] text-white px-10 h-12 rounded-md text-[15px] font-semibold tracking-wide">
          <Search size={16} className="mr-2" /> Search
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
    <section className="relative pt-[108px] md:pt-[108px]">
      <div className="relative h-[460px] md:h-[520px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          </div>
        ))}

        <div className="relative max-w-[1320px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-white">
            <div className="text-[12px] tracking-[0.25em] font-semibold mb-3 opacity-90">{current.eyebrow}</div>
            <h1 className="text-[44px] md:text-[56px] leading-[1.05] font-light mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {current.title}
            </h1>
            <p className="text-[17px] md:text-[18px] leading-relaxed mb-6 max-w-md opacity-95">{current.subtitle}</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#003366] font-semibold text-[14px] rounded-md hover:bg-gray-100 transition-colors">
              {current.cta}
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

      {/* Search widget */}
      <div className="max-w-[1320px] mx-auto px-6 -mt-16 md:-mt-20 relative z-20">
        <div className="bg-white rounded-md shadow-2xl border border-gray-200">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {tripTabs.map((t) => {
              const Icon = iconMap[t.icon];
              const active = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-[14px] font-semibold whitespace-nowrap border-b-[3px] transition-colors ${active ? "border-[#C8102E] text-[#003366]" : "border-transparent text-gray-600 hover:text-[#003366]"}`}
                >
                  <Icon size={17} />
                  {t.label}
                </button>
              );
            })}
          </div>
          <div className="p-5 md:p-8">
            {activeTab === "flights" ? (
              <FlightSearchForm />
            ) : (
              <div className="py-10 text-center">
                <div className="text-[18px] font-semibold text-[#003366] mb-2">{tripTabs.find((t) => t.id === activeTab)?.label} search</div>
                <p className="text-[14px] text-gray-600 mb-5">Plan your perfect trip with our trusted partners.</p>
                <Button className="bg-[#003366] hover:bg-[#002244] text-white px-8 h-11 rounded-md">Continue to {tripTabs.find((t) => t.id === activeTab)?.label}</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
