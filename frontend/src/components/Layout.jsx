import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="bg-white min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-[100px]">{children}</main>
    <Footer />
  </div>
);

export default Layout;
