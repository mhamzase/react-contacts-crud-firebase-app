import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyB0ahH6iHrQPZqufjD1a_CTKAnUmePjLWM",
    authDomain: "react-crud-953ba.firebaseapp.com",
    databaseURL: "https://react-crud-953ba-default-rtdb.firebaseio.com",
    projectId: "react-crud-953ba",
    storageBucket: "react-crud-953ba.appspot.com",
    messagingSenderId: "564342100045",
    appId: "1:564342100045:web:2270cb5fead5dcd2064c04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;