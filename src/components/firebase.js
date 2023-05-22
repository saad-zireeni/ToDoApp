import firebase from 'firebase/compat/app'; 
import "firebase/compat/firestore";

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();