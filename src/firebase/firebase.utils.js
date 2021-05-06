import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9LUVjIAhPwqdZ5XLYrD6-p6hPomITxqo",
    authDomain: "crown-clothing-43a30.firebaseapp.com",
    projectId: "crown-clothing-43a30",
    storageBucket: "crown-clothing-43a30.appspot.com",
    messagingSenderId: "214279307319",
    appId: "1:214279307319:web:15a202761b8918e3ed7fb2",
    measurementId: "G-97TG6835W4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;