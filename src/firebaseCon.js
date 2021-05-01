import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAXuGCFB8MnwtpET6E0YzwVNLcLHzVzzCk",
    authDomain: "todoapp-a1203.firebaseapp.com",
    projectId: "todoapp-a1203",
    storageBucket: "todoapp-a1203.appspot.com",
    messagingSenderId: "285376917702",
    appId: "1:285376917702:web:4d16f5f1647427ee6fa7c7"
  };

  firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore();

