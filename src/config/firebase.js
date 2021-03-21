import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; 



  const firebaseConfig = {
    apiKey: "AIzaSyCuv20rYX56P_SSYw75gOD_vpingNgfrBo",
    authDomain: "firechat-test-1fd35.firebaseapp.com",
    projectId: "firechat-test-1fd35",
    storageBucket: "firechat-test-1fd35.appspot.com",
    messagingSenderId: "648296366926",
    appId: "1:648296366926:web:0636dccfa7e222ff24141f",
    measurementId: "G-5E8TSXS2J5"
  };
  


firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}




