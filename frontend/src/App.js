import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSearch from "./components/HeroSearch";
import Promotions from "./components/Promotions";
import Destinations from "./components/Destinations";
import Experience from "./components/Experience";
import News from "./components/News";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
