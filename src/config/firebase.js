import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; 


firebase.initializeApp({
});
     // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA97w54XbQBO7fIsI7RY8ifxZK1DYJPj-Y",
    authDomain: "firechat-ssek.firebaseapp.com",
    projectId: "firechat-ssek",
    storageBucket: "firechat-ssek.appspot.com",
    messagingSenderId: "55021505514",
    appId: "1:55021505514:web:c62345ba580b1cb202c093",
    measurementId: "G-JBHKKRK1KS"
  };



firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

import{
    db,
    googleAuthProvider,
}from './config/firebase';


function App(){
    return(
    <div></div>
    );
}