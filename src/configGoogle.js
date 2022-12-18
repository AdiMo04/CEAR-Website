import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCc0goMv4w7xnKUX69ZHtFl0NarQQN-3cg",
    authDomain: "robotics-3168c.firebaseapp.com",
    projectId: "robotics-3168c",
    storageBucket: "robotics-3168c.appspot.com",
    messagingSenderId: "532622072772",
    appId: "1:532622072772:web:9f77c8fcf917e1762c6291",
    measurementId: "G-JW1TLYVYD0"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};