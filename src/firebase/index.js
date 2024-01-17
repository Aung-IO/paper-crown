import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBPt3spCWLCUU_XJ7qYmJlpixPIRHm5FKE",
  authDomain: "paper-crown-48ae3.firebaseapp.com",
  projectId: "paper-crown-48ae3",
  storageBucket: "paper-crown-48ae3.appspot.com",
  messagingSenderId: "147470463418",
  appId: "1:147470463418:web:ca2c3217a984c280e26d83",
  measurementId: "G-643YM63MT3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };

