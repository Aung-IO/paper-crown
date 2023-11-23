import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";

import AuthContextProvider from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Router/>
  </AuthContextProvider>
);
