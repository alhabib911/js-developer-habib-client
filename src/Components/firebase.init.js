// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsDkTcVaOJegpuSiuZgWfa-lxIsKK6mcA",
  authDomain: "student-management-app-81f11.firebaseapp.com",
  projectId: "student-management-app-81f11",
  storageBucket: "student-management-app-81f11.appspot.com",
  messagingSenderId: "693952998453",
  appId: "1:693952998453:web:451864795f03601df7557c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app)
export default auth;