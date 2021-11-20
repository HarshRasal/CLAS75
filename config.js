import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_6VJ0qH89_OIUwRmF8FCAYv3Aunf5VsM",
  authDomain: "bed-time-story-19da0.firebaseapp.com",
  projectId: "bed-time-story-19da0",
  storageBucket: "bed-time-story-19da0.appspot.com",
  messagingSenderId: "738671726007",
  appId: "1:738671726007:web:04462b29e3a4b5ad872c32"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
