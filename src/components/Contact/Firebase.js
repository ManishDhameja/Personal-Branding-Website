import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZlDo931u-blZz-s7rH5B4tjSVTfvEiXY",
    authDomain: "contact-form-agw.firebaseapp.com",
    databaseURL: "https://contact-form-agw-default-rtdb.firebaseio.com",
    projectId: "contact-form-agw",
    storageBucket: "contact-form-agw.appspot.com",
    messagingSenderId: "847306652666",
    appId: "1:847306652666:web:5c58526757f0d5a87b8243"
  
});

var db = firebaseApp.firestore();

export { db };