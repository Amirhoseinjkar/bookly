import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoiNQrTDBtVjDO0YwEeENfwu_ecO2Y4gE",
  authDomain: "bookly61-6f7c9.firebaseapp.com",
  projectId: "bookly61-6f7c9",
  storageBucket: "bookly61-6f7c9.firebasestorage.app",
  messagingSenderId: "441878011360",
  appId: "1:441878011360:web:58ff29d1ba614c7f635f85",
  measurementId: "G-KW05VLVKFP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Authentication
const auth = getAuth(app);


export { auth };