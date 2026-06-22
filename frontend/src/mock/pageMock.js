// Page-specific mock data

export const bookOptions = {
  flights: {
    eyebrow: "BOOK A TRIP",
    title: "Book a flight",
    subtitle: "Find the best fares and flexible options for your next journey.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxhaXJwbGFuZSUyMHNreXxlbnwwfHx8fDE3ODIxMDU1MjB8MA&ixlib=rb-4.1.0&q=85",
  },
  cars: {
    eyebrow: "BOOK A CAR",
    title: "Rent a car at your destination",
    subtitle: "Choose from over 300,000 vehicles worldwide with trusted Delta partners.",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3ODIxMDU1MjZ8MA&ixlib=rb-4.1.0&q=85",
  },
  hotels: {
    eyebrow: "DELTA STAYS",
    title: "Find your perfect hotel",
    subtitle: "Earn bonus miles on every booking at over 700,000 properties worldwide.",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3ODIxMDU1MjZ8MA&ixlib=rb-4.1.0&q=85",
  },
  "vacation-packages": {
    eyebrow: "DELTA VACATIONS",
    title: "Save more with vacation packages",
    subtitle: "Bundle your flight, hotel and activities to unlock exclusive savings.",
    image: "https://images.unsplash.com/photo-1499063078284-f78f7d89616a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxhaXJwbGFuZSUyMHNreXxlbnwwfHx8fDE3ODIxMDU1MjB8MA&ixlib=rb-4.1.0&q=85",
  },
  cruises: {
    eyebrow: "DELTA CRUISES",
    title: "Set sail and earn miles",
    subtitle: "Earn 1 mile per $1 with our cruise line partners. Book today.",
    image: "https://images.pexels.com/photos/37589299/pexels-photo-37589299.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  activities: {
    eyebrow: "DELTA EXPERIENCES",
    title: "Discover things to do",
    subtitle: "Tours, tickets and unforgettable experiences in 1,000+ destinations.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3ODIxMDU1MjZ8MA&ixlib=rb-4.1.0&q=85",
  },
  "flight-hotel": {
    eyebrow: "DELTA VACATIONS",
    title: "Flight + Hotel packages",
    subtitle: "Save up to $200 per person when you bundle your flight and hotel.",
    image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHNreXxlbnwwfHx8fDE3ODIxMDU1MjB8MA&ixlib=rb-4.1.0&q=85",
  },
};

export const skyMilesContent = {
  overview: {
    eyebrow: "SKYMILES®",
    title: "Welcome to SkyMiles",
    subtitle: "An award-winning loyalty program with miles that never expire.",
    sections: [
      { tag: "EARN", title: "Earn miles your way", desc: "Earn miles flying Delta, with credit cards, hotels, car rentals, dining and more." },
      { tag: "REDEEM", title: "Use miles for what you love", desc: "Book flights, upgrades, vacations, gift cards, merchandise and unique experiences." },
      { tag: "STATUS", title: "Reach Medallion® Status", desc: "Unlock complimentary upgrades, priority services and bonus miles on every flight." },
    ],
  },
  join: {
    eyebrow: "FREE TO JOIN",
    title: "Join SkyMiles. It's free.",
    subtitle: "Become a SkyMiles member and start earning miles toward your next trip.",
    benefits: [
      "Miles that never expire",
      "Member-only pricing on flights",
      "Earn miles flying Delta and 25+ partners",
      "Free checked bag with Delta SkyMiles® Credit Card",
      "Priority boarding & exclusive offers",
      "Access to a global network with SkyTeam",
    ],
  },
  "medallion-status": {
    eyebrow: "MEDALLION® STATUS",
    title: "Reach new heights with Medallion®",
    subtitle: "Four tiers of recognition, each with elevated benefits and exclusive perks.",
    tiers: [
      { name: "Silver Medallion®", mqd: "$5,000 MQDs", color: "from-gray-300 to-gray-500", benefits: ["1-day priority boarding", "Complimentary upgrades", "Free Sky Priority"] },
      { name: "Gold Medallion®", mqd: "$10,000 MQDs", color: "from-yellow-500 to-amber-700", benefits: ["Same-day standby", "Bonus Reward Miles", "Free Preferred Seats"] },
      { name: "Platinum Medallion®", mqd: "$15,000 MQDs", color: "from-slate-400 to-slate-700", benefits: ["Choice Benefits", "Annual Companion Cert.", "Higher upgrade priority"] },
      { name: "Diamond Medallion®", mqd: "$28,000 MQDs", color: "from-[#0a2240] to-[#061629]", benefits: ["Delta Sky Club® access", "Diamond Choice Benefits", "Top-tier priority"] },
    ],
  },
  "earn-miles": {
    eyebrow: "EARN MILES",
    title: "Ways to earn SkyMiles®",
    subtitle: "Earn miles every day — on flights, with our partners and in your daily routine.",
    ways: [
      { title: "Fly Delta", desc: "Earn at least 5 miles per dollar spent on Delta flights based on cabin and status." },
      { title: "SkyMiles® Credit Cards", desc: "Earn miles on everyday purchases with American Express co-branded cards." },
      { title: "SkyTeam & Airline Partners", desc: "Earn miles flying with 25+ partners including KLM, Air France, Korean Air." },
      { title: "Delta Stays", desc: "Earn up to 25,000 bonus miles on qualifying hotel stays through Delta Stays." },
      { title: "Delta Vacations", desc: "Earn miles on vacation packages, plus exclusive member bonuses." },
      { title: "Dining & Shopping", desc: "Earn miles at thousands of restaurants and online retailers." },
    ],
  },
  "use-miles": {
    eyebrow: "USE MILES",
    title: "Use your miles",
    subtitle: "From flights to upgrades to gift cards — your miles take you further.",
    uses: [
      { title: "Award Flights", desc: "Use miles for flights to over 1,000 destinations worldwide." },
      { title: "Cabin Upgrades", desc: "Upgrade to Delta Comfort+®, Premium Select, First Class or Delta One®." },
      { title: "Delta Vacations", desc: "Apply miles toward your next flight + hotel vacation package." },
      { title: "Delta Sky Club® Membership", desc: "Use miles to access award-winning Sky Club lounges worldwide." },
      { title: "Gift Cards & Merchandise", desc: "Shop the SkyMiles Marketplace for gift cards and exclusive items." },
      { title: "Charitable Donations", desc: "Donate miles to organizations through SkyWish & other charity partners." },
    ],
  },
};

export const tripStatusMock = [
  { conf: "ABC123", traveler: "Smith / John", from: "ATL", to: "LAX", date: "Wed, Aug 14, 2025", flight: "DL 1432", status: "On Time" },
  { conf: "XYZ789", traveler: "Doe / Jane", from: "JFK", to: "CDG", date: "Fri, Sep 5, 2025", flight: "DL 264", status: "On Time" },
];

export const flightStatusMock = [
  { num: "DL 1432", from: "ATL", fromTime: "08:15 AM", to: "LAX", toTime: "10:32 AM", status: "On Time", gate: "B14", aircraft: "Boeing 757-200" },
  { num: "DL 264", from: "JFK", fromTime: "06:30 PM", to: "CDG", toTime: "08:05 AM +1", status: "On Time", gate: "T4-A7", aircraft: "Airbus A330-900" },
  { num: "DL 89", from: "SEA", fromTime: "11:45 AM", to: "NRT", toTime: "02:30 PM +1", status: "Boarding", gate: "S12", aircraft: "Airbus A350-900" },
  { num: "DL 22", from: "DTW", fromTime: "07:50 AM", to: "AMS", toTime: "09:25 PM", status: "On Time", gate: "A38", aircraft: "Airbus A330-300" },
];
