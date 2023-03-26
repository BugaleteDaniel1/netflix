import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBUQwkJvRlia4B3GkptD826crC_r3z9m-k",
  authDomain: "netflix-clone-c3404.firebaseapp.com",
  projectId: "netflix-clone-c3404",
  storageBucket: "netflix-clone-c3404.appspot.com",
  messagingSenderId: "605366919975",
  appId: "1:605366919975:web:9089ef853dd26887737f02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signin = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

//auth.currentUser to find the current user

export const signup = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
};
