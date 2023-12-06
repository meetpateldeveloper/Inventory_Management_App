// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqH4ro4K4F2eR2dQIe4ZFu6-F8WLuCNuQ",
  authDomain: "final-project-e1b89.firebaseapp.com",
  projectId: "final-project-e1b89",
  storageBucket: "final-project-e1b89.appspot.com",
  messagingSenderId: "150607814875",
  appId: "1:150607814875:web:e2f13ab95726854981ecfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
