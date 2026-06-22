import React from "react";
import HeroSearch from "../components/HeroSearch";
import Promotions from "../components/Promotions";
import Destinations from "../components/Destinations";
import Experience from "../components/Experience";
import News from "../components/News";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <div className="bg-white min-h-screen">
    <Header />
    <main>
      <HeroSearch />
      <Promotions />
      <Destinations />
      <Experience />
      <News />
    </main>
    <Footer />
  </div>
);

export default Home;
