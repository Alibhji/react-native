// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF_a8wCv-S3ryzmJdpbsF70Dr4G9CaEX0",
  authDomain: "react-native-test-aeb33.firebaseapp.com",
  projectId: "react-native-test-aeb33",
  storageBucket: "react-native-test-aeb33.appspot.com",
  messagingSenderId: "85655475160",
  appId: "1:85655475160:web:412c822e34cfe894fd98ad",
  measurementId: "G-GS95SHZMJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
export default firebaseAuth 
// const analytics = getAnalytics(app);