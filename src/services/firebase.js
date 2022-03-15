import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBk6FD_idmMj_EelsyLzd51e7gajfooQHo",
    authDomain: "flash-cards-68c66.firebaseapp.com",
    databaseURL: "https://flash-cards-68c66-default-rtdb.firebaseio.com",
    projectId: "flash-cards-68c66",
    storageBucket: "flash-cards-68c66.appspot.com",
    messagingSenderId: "626798737774",
    appId: "1:626798737774:web:f0ff7cfd77aefcb044a97f"
  };

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
const database = fire.database();

export default database;