import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTdfZjoLaCE1hKCLPukTFh2Ogw_OzFm38",
    authDomain: "blogprince-1a52e.firebaseapp.com",
    projectId: "blogprince-1a52e",
    storageBucket: "blogprince-1a52e.appspot.com",
    messagingSenderId: "1085760491305",
    appId: "1:1085760491305:web:ffac4405b7e45b72f57138"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export (timestamp);
  export default firebaseApp.firestore();