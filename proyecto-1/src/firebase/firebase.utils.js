import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// config

var firebaseConfig = {
  apiKey: "AIzaSyCoUQCF8c2GLKzP9vm8L9jTVuL4U6r-dUA",
  authDomain: "react-test-bcf8d.firebaseapp.com",
  projectId: "react-test-bcf8d",
  storageBucket: "react-test-bcf8d.appspot.com",
  messagingSenderId: "655328756302",
  appId: "1:655328756302:web:6b535323a804301ca4391f",
  measurementId: "G-7YNXEJHF7X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //define el path de la collection con el identificador de usuario
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error: ", err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); // firestore: apunta a collections y documents

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;