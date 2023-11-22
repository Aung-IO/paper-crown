import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

export default function useSignin() {
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);
  
    const signIn = async (email, password) => {
      try {
        setLoading(true);
        let res = await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        setError("");
        return res.user;
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
  
    return { error, loading, signIn };
}
