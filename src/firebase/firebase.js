import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBcuQxPkAq3MaXFIwVBrPKXXDfVJNrZGaw",
    authDomain: "flight-search-bdf3c.firebaseapp.com",
    databaseURL: "https://flight-search-bdf3c.firebaseio.com",
    projectId: "flight-search-bdf3c",
    storageBucket: "flight-search-bdf3c.appspot.com",
    messagingSenderId: "83606926770",
    appId: "1:83606926770:web:5bc571bc886cc98522e0ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider as default} 