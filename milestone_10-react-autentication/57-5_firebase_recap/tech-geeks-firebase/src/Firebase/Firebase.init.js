// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4DNkoHRzOINCm_I-PuPMxx6YzqlZ16Ws",
  authDomain: "tech-geeks-b8a19.firebaseapp.com",
  projectId: "tech-geeks-b8a19",
  storageBucket: "tech-geeks-b8a19.appspot.com",
  messagingSenderId: "1057679020365",
  appId: "1:1057679020365:web:8930e7b3a795cda7d16704",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);


export default firebaseApp;