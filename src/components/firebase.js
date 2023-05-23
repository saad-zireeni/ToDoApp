import firebase from 'firebase/compat/app'; 
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMQMb2-tQz3glUaldzgtHzNCo6UPkJwTU",
    authDomain: "todoapp-78738.firebaseapp.com",
    projectId: "todoapp-78738",
    storageBucket: "todoapp-78738.appspot.com",
    messagingSenderId: "1947794773",
    appId: "1:1947794773:web:99625c950ad661b41483dc"

};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();