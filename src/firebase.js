// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAatGwBk1UeBej3UUMmtD3SM3sXFxecJXQ",
  authDomain: "yt-clonee.firebaseapp.com",
  projectId: "yt-clonee",
  storageBucket: "yt-clonee.appspot.com",
  messagingSenderId: "34160915908",
  appId: "1:34160915908:web:93def8dcb56219742de091",
  measurementId: "G-WCGMWEX2NH",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
