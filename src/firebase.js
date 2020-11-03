import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDFJwkJW5HfbgNpfeyuqWZw-UhTZKVhFow",
  authDomain: "whatsappclone-116dd.firebaseapp.com",
  databaseURL: "https://whatsappclone-116dd.firebaseio.com",
  projectId: "whatsappclone-116dd",
  storageBucket: "whatsappclone-116dd.appspot.com",
  messagingSenderId: "919556827835",
  appId: "1:919556827835:web:97e572fb0076b94fe2579e"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;