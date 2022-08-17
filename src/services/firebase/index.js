import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4cK7s7v9FopVFyvkHgUxT_Uolad3KnS8",
  authDomain: "trippelheim-czjft.firebaseapp.com",
  projectId: "trippelheim-czjft",
  storageBucket: "trippelheim-czjft.appspot.com",
  messagingSenderId: "367225337567",
  appId: "1:367225337567:web:336ca01b8956790ae3db6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
