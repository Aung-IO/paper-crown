import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar/>

      {/* dynamic route changes */}
      <div className="mt-3">

      <Outlet />
      </div>

      <Footer/>
    </div>
  );
}
