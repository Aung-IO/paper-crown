import React, { createContext } from "react";

let AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  return <AuthContext.Provider value={{user : null }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider };
