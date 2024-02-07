'use client'
import React from "react";
import Footer from "../common/Footer";
import NavBar from "../common/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="font-sans">
      <NavBar/>
      <div className="z-10">
        <main className="mx-auto pl-8 pr-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
