// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNBbi_AO0hD8aw4pXVvYqejFedP3iDH6Y",
    authDomain: "notes-app-ajanthan-n.firebaseapp.com",
    projectId: "notes-app-ajanthan-n",
    storageBucket: "notes-app-ajanthan-n.appspot.com",
    messagingSenderId: "359335673359",
    appId: "1:359335673359:web:8cb2552d51076d858aad7a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };