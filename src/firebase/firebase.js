import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCkW-nmsTDFSOehcJpzp4ihOz7M5GvI0Qc",
  authDomain: "assessment-9ef1c.firebaseapp.com",
  databaseURL: "https://assessment-9ef1c.firebaseio.com",
  projectId: "assessment-9ef1c",
  storageBucket: "assessment-9ef1c.appspot.com",
  messagingSenderId: "422620655977",
  appId: "1:422620655977:web:670a7bf0354b428583cdf8"
  /*
  apiKey: process.env.FIREBASE_API_KEY,
  //apiKey: "AIzaSyBlLxi9KYuwsjj3vOtgy8CkWD2Rg5gj0JQ",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //authDomain: "expensify-da9bb.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  //databaseURL: "https://expensify-da9bb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  */
}; 

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };