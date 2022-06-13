import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAFvqS3ufqMFrXizmCSEbtACN2CdvAUPyE",
    authDomain: "disneyplusclone-868db.firebaseapp.com",
    projectId: "disneyplusclone-868db",
    storageBucket: "disneyplusclone-868db.appspot.com",
    messagingSenderId: "400036949305",
    appId: "1:400036949305:web:7dadccfb3145d1ae000ce8",
    measurementId: "G-3TGYFZXT58"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;