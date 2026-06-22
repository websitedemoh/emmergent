import React from "react";
import { useParams, Link } from "react-router-dom";
import { Plane, BedDouble, Car, MapPin, PackageOpen, Ship, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { bookOptions } from "../mock/pageMock";

const iconMap = {
  flights: Plane,
  cars: Car,
  hotels: BedDouble,
  "vacation-packages": PackageOpen,
  cruises: Ship,
  activities: MapPin,
  "flight-hotel": PackageOpen,
};

const formFields = {
  flights: ["From", "To", "Depart", "Return", "Passengers"],
  cars: ["Pickup Location", "Drop-off Location", "Pickup Date", "Return Date", "Driver Age"],
  hotels: ["Destination", "Check-in", "Check-out", "Rooms", "Guests"],
  "vacation-packages": ["Leaving From", "Going To", "Depart", "Return", "Travelers"],
  cruises: ["Destination", "Departure Port", "Sail Date", "Duration", "Cabin Type"],
  activities: ["Destination", "Date", "Category", "Participants", "Duration"],
  "flight-hotel": ["From", "To", "Depart", "Return", "Travelers"],
};

const perks = {
  flights: ["No change fees on Main Cabin and above", "Earn miles on every flight", "24-hour risk-free cancellation"],
  cars: ["Earn up to 1,250 miles per rental", "Free cancellation on most bookings", "Trusted partners worldwide"],
  hotels: ["Earn up to 25,000 bonus miles", "Best price guarantee", "Member-only deals"],
  "vacation-packages": ["Save up to $200 per person", "Bundle & save", "Earn miles on entire package"],
  cruises: ["Earn 1 mile per $1", "Exclusive Delta cruise offers", "6+ partner cruise lines"],
  activities: ["1,000+ destinations", "Free cancellation on select", "Skip-the-line tickets"],
  "flight-hotel": ["Save up to $200 per person", "One easy itinerary", "Member exclusive savings"],
};

const Book = () => {
  const { type = "flights" } = useParams();
  const cfg = bookOptions[type] || bookOptions.flights;
  const fields = formFields[type] || formFields.flights;
  const Icon = iconMap[type] || Plane;

  return (
    <Layout>
      <PageHero {...cfg} />

      {/* Booking widget */}
      <section className="max-w-[1320px] mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden">
          <div className="bg-[#0a2240] px-6 py-4 flex items-center gap-3">
            <Icon size={20} className="text-white" />
            <span className="text-white font-bold tracking-wide text-[14px] uppercase">{cfg.title}</span>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {fields.map((f) => (
                <div key={f} className="border border-gray-300 rounded-sm px-4 py-3 hover:border-[#0a2240] transition-colors">
                  <div className="text-[11px] tracking-[0.12em] text-gray-600 font-semibold uppercase">{f}</div>
                  <Input className="border-0 p-0 h-7 text-[15px] font-bold text-[#0a2240] focus-visible:ring-0" placeholder={f === "Driver Age" ? "25+" : ""} />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-5">
              <Button className="bg-[#E31837] hover:bg-[#B8132D] text-white px-10 h-12 rounded-sm text-[15px] font-bold tracking-wide">
                <Search size={16} className="mr-2" /> SEARCH
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why book with Delta */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-[12px] tracking-[0.22em] font-bold text-[#E31837] mb-2">WHY BOOK WITH DELTA</div>
            <h2 className="text-[30px] md:text-[36px] font-bold text-[#0a2240] tracking-tight">Member benefits, every time you book</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(perks[type] || perks.flights).map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <CheckCircle2 size={28} className="text-[#E31837] flex-shrink-0" />
                <div>
                  <h3 className="text-[17px] font-bold text-[#0a2240] mb-1">{p}</h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">Available to all SkyMiles members on qualifying bookings.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion CTA */}
      <section className="bg-[#f4f4f0] py-14">
        <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[12px] tracking-[0.22em] font-bold text-[#E31837] mb-2">SKYMILES BONUS</div>
            <h3 className="text-[28px] md:text-[34px] font-bold text-[#0a2240] mb-3 tracking-tight">
              Earn 90,000 bonus miles
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-5 max-w-lg">
              With the Delta SkyMiles® Reserve American Express Card. Get the most out of every booking.
            </p>
            <Link to="/skymiles/overview" className="inline-flex items-center gap-2 bg-[#0a2240] hover:bg-[#061629] text-white font-bold px-7 h-12 rounded-sm text-[14px] tracking-wide transition-colors">
              LEARN MORE <ArrowRight size={16} />
            </Link>
          </div>
          <img src="https://images.unsplash.com/photo-1622967752036-9e4fd162725f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxhaXJsaW5lJTIwY2FiaW58ZW58MHx8fHwxNzgyMTA1NTIwfDA&ixlib=rb-4.1.0&q=85" alt="Cabin" className="rounded-sm w-full h-72 object-cover" />
        </div>
      </section>
    </Layout>
  );
};

export default Book;
