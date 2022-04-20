// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQiRAewrmSvyBweSHS-VX8Oqnl0sdwNN8",
  authDomain: "genius-car-services-e97df.firebaseapp.com",
  projectId: "genius-car-services-e97df",
  storageBucket: "genius-car-services-e97df.appspot.com",
  messagingSenderId: "335962315849",
  appId: "1:335962315849:web:5670fede8f1c910883f398",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;