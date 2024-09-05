// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwuWoW-K8_mhi1K1NeO87qXocB-2pK16U",
  authDomain: "guestbook-419a2.firebaseapp.com",
  projectId: "guestbook-419a2",
  storageBucket: "guestbook-419a2.appspot.com",
  messagingSenderId: "17067749004",
  appId: "1:17067749004:web:721db1609a1d69c7e095a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const ragisterWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    return user;
  } catch (error) {
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    throw error;
  }
};

const sendPaswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export {
  ragisterWithEmailAndPassword,
  loginWithEmailAndPassword,
  sendPaswordReset,
  auth,
  signInWithGoogle,
};
