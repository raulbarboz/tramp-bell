import * as firebase from 'firebase';
//import 'firebase/storage';

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };

// set the database
firebase.initializeApp(config);
const database = firebase.database();

//set the database auth provider
var authProvider = firebase.auth();

//var storage = firebase.storage();
//const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
export { firebase, authProvider, database as default };