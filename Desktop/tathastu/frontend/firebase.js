// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUCcaLwtvFAskOd5KysKsOmhR4ppDPbw",
  authDomain: "tathastu-4d917.firebaseapp.com",
  projectId: "tathastu-4d917",
  storageBucket: "tathastu-4d917.firebasestorage.app",
  messagingSenderId: "894272285949",
  appId: "1:894272285949:web:d82cdf2fbf27dc10852294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}