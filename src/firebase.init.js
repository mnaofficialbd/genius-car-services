// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMW_Um561fQ_I3klpgPXRikdVb2EstB38",
  authDomain: "genius-car-services-79706.firebaseapp.com",
  projectId: "genius-car-services-79706",
  storageBucket: "genius-car-services-79706.appspot.com",
  messagingSenderId: "963280348968",
  appId: "1:963280348968:web:57d2d2de789607ec19121d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;