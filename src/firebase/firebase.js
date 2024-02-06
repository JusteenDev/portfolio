import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getStorage } from "@firebase/storage";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWExP0xAfHSjqO-jfzMimFx9Y-IYEUBBo",
  authDomain: "justeen-portfolio.firebaseapp.com",
  databaseURL: "https://justeen-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "justeen-portfolio",
  storageBucket: "justeen-portfolio.appspot.com",
  messagingSenderId: "110111956715",
  appId: "1:110111956715:web:94880d704dd8ff9c3ae8ae",
  measurementId: "G-5C8JTGF3PL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();