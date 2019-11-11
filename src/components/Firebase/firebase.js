import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWwnpvvuLMBoLcp96KJTNFihEngyL_p98",
  authDomain: "tailor-11759.firebaseapp.com",
  databaseURL: "https://tailor-11759.firebaseio.com",
  projectId: "tailor-11759",
  storageBucket: "tailor-11759.appspot.com",
  messagingSenderId: "799540228712",
  appId: "1:799540228712:web:0a1fa965574c39aecd01dd",
  measurementId: "G-L31C1MYPMG"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
}

export default Firebase;
