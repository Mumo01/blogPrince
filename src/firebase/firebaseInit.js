import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9A37zUH8h6NpOQcQJQfR55jRzpDuYHHU",
  authDomain: "blogprince-4a010.firebaseapp.com",
  projectId: "blogprince-4a010",
  storageBucket: "blogprince-4a010.appspot.com",
  messagingSenderId: "823051496446",
  appId: "1:823051496446:web:e4282865a3c446a4cdaeaf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();