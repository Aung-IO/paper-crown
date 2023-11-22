import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

export default function useSignOut() {
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);
  
    const logout = async () => {
      try {
        setLoading(true);
        let res = await signOut(auth);
        setLoading(false);
        setError("");
        return res.user;
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
  
    return { error, loading, logout };
}