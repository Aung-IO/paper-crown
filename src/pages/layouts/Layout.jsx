import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "../../components/Navbar";
import './style.css';

export default function Layout() {
  const location = useLocation()

  return (
    <div>
      <Navbar />

      {/* dynamic route changes */}
      <SwitchTransition>
        <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
          <div className="mt-3 ">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>

      {/* <Footer /> */}
    </div>
  );
}
