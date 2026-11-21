import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATZloOnhfwMlfCfNiIOlRaZse7y2nAlQo",
  authDomain: "velle-c5d8c.firebaseapp.com",
  projectId: "velle-c5d8c",
  storageBucket: "velle-c5d8c.firebasestorage.app",
  messagingSenderId: "642943957338",
  appId: "1:642943957338:web:e846f7dcec51fdcc711b63",
  measurementId: "G-BK3WRZH7KZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
