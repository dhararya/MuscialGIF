import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDKxMqw9eDadoha5LKgTTY9Beb-WpeXYME", 
    authDomain: "musicalgif-e52b9.firebaseapp.com", 
    projectId: "musicalgif-e52b9",
    storageBucket: "musicalgif-e52b9.appspot.com", 
    messagingSenderId: "961424392430", 
    appId: "1:961424392430:web:825bf0e540c351397ab3ff", 
    measurementId: "G-GC7NWJ4W7J"};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

export {db}