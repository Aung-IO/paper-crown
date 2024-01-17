import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYpuqg8us4ktkjgE4zDTDkqElZ6v8y2OU",
  authDomain: "paper-crown-proj.firebaseapp.com",
  projectId: "paper-crown-proj",
  storageBucket: "paper-crown-proj.appspot.com",
  messagingSenderId: "946593690259",
  appId: "1:946593690259:web:1e755cb71af1962d7c5366",
  measurementId: "G-KJPCS6X663"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };

