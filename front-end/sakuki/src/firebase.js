// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlwygSkWEOVFXSAH-WA-DivImLUPrsDiY",
  authDomain: "sakuki-34692.firebaseapp.com",
  projectId: "sakuki-34692",
  storageBucket: "sakuki-34692.appspot.com",
  messagingSenderId: "507346819930",
  appId: "1:507346819930:web:cf8d7705f9b73c6bf3f163",
  measurementId: "G-866KZP5RZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app