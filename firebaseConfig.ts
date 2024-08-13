// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: "shortlink-d6d02.firebaseapp.com",
  projectId: "shortlink-d6d02",
  storageBucket: "shortlink-d6d02.appspot.com",
  messagingSenderId: "217554588537",
  appId: "1:217554588537:web:085f00c8d453accd73d5a8",
  measurementId: "G-PFHHC9SKD0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);