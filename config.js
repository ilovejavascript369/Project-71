import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAyH0ixUSBH2w18UNQrsRHeHo-cwF3T_r0",
    authDomain: "project-71-77d5e.firebaseapp.com",
    projectId: "project-71-77d5e",
    storageBucket: "project-71-77d5e.appspot.com",
    messagingSenderId: "1097750188770",
    appId: "1:1097750188770:web:f377ed16d2697c60f244bb"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
