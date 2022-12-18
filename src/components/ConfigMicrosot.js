import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  OAuthProvider,
  signInWithPopup,
  getRedirectResult,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc0goMv4w7xnKUX69ZHtFl0NarQQN-3cg",
  authDomain: "robotics-3168c.firebaseapp.com",
  projectId: "robotics-3168c",
  storageBucket: "robotics-3168c.appspot.com",
  messagingSenderId: "532622072772",
  appId: "1:532622072772:web:9f77c8fcf917e1762c6291",
  measurementId: "G-JW1TLYVYD0",
};

const app = initializeApp(firebaseConfig);

const provider = new OAuthProvider("microsoft.com");

provider.setCustomParameters({
  tenant: "6d28e4fb-9074-4a0b-a5b8-9a89f632cc60",
});

export const auth = getAuth(app);

export const signInwithMicrosoft = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      //   const name = result.user.displayName;
      //   const email = result.user.email;
      //   const profilePic = result.user.photoURL;

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("name", result._tokenResponse.firstName);
      //   localStorage.setItem("email", email);
      //   localStorage.setItem("profilePic", profilePic);

      console.log(result);
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;

      console.log(accessToken);
      console.log(idToken);

      // reload the current url like a refresh button
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutwithMicrosoft = () => {
  signOut(auth)
    .then(() => {
      localStorage.clear();
      window.location.reload(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
