// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMDweEXpuDhyRlL7twLyailUsPmTseTdU",
  authDomain: "matrix-ccd6c.firebaseapp.com",
  projectId: "matrix-ccd6c",
  storageBucket: "matrix-ccd6c.appspot.com",
  messagingSenderId: "687978128289",
  appId: "1:687978128289:web:83cf6138c3e60510ec21e0",
  measurementId: "G-GCF1P7QL40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
