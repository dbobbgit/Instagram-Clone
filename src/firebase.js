import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCjH8VyR_WOD-AJMj26fgZQUjQdU_0PxHk",
  authDomain: "instagram-clone-f89ad.firebaseapp.com",
  databaseURL: "https://instagram-clone-f89ad.firebaseio.com",
  projectId: "instagram-clone-f89ad",
  storageBucket: "instagram-clone-f89ad.appspot.com",
  messagingSenderId: "965274145173",
  appId: "1:965274145173:web:5c33069d7370df5ddce69c",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

//   export default db;
