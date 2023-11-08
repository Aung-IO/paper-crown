import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./style.css";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      {/* dynamic route changes */}
      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
          <div className="mt-2 m-12">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div className="m-14 -mb-20">
        <Footer />
      </div>
    </div>
  );
}
