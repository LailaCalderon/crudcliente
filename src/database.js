// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiRv3UrUvMJDvsMJQ8gf10WqqehP95uYE",
  authDomain: "tasks-9bf3a.firebaseapp.com",
  projectId: "tasks-9bf3a",
  storageBucket: "tasks-9bf3a.appspot.com",
  messagingSenderId: "1036901292752",
  appId: "1:1036901292752:web:6c255ebc1a9bf8c879dcd5",
  measurementId: "G-384P6KL75Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);