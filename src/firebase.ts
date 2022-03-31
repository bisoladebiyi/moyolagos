import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBz7ug0pl5OkOYopjljjAmVKBO4DdK8V5c",
  authDomain: "moyolagos-95ef0.firebaseapp.com",
  projectId: "moyolagos-95ef0",
  storageBucket: "moyolagos-95ef0.appspot.com",
  messagingSenderId: "963080748462",
  appId: "1:963080748462:web:43515f317fb81b47f99c3f",
  measurementId: "G-MV2VDRGMT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
const analytics = getAnalytics(app);


