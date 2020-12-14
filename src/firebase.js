import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdzDDjmWNme8jzhYLvRwXR8e4dBYmIu_4",
  authDomain: "instagram-clone-e4d90.firebaseapp.com",
  databaseURL: "https://instagram-clone-e4d90.firebaseio.com",
  projectId: "instagram-clone-e4d90",
  storageBucket: "instagram-clone-e4d90.appspot.com",
  messagingSenderId: "790433112816",
  appId: "1:790433112816:web:60ceeffa03e53137c59835",
  measurementId: "G-MFLEKYCB9G",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
