import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAGavrH_p-JUdrdmE4MgBBYHEJJOmyLCjI",
    authDomain: "d-wiz-f27ae.firebaseapp.com",
    projectId: "d-wiz-f27ae",
    storageBucket: "d-wiz-f27ae.appspot.com",
    messagingSenderId: "894183615753",
    appId: "1:894183615753:web:0431efcb9113e4a6a9f7d8",
    measurementId: "G-KV7EH8SEKQ"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;