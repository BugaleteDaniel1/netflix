import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
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

export const db = getFirestore(app);

export const signin = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

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

const q = query(collection(db, "products"), where("active", "==", true));
const querySnapshot = await getDocs(q);

export const useProductsData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let prodArr = [];
    console.log(querySnapshot);
    querySnapshot.docs.forEach(async (doc) => {
      const docquery = query(collection(doc.ref, "prices"));
      const priceSnap = await getDocs(docquery);

      priceSnap.forEach((products) => {
        const subscription = {
          priceId: products.id,
          productData: doc.data(),
        };
        prodArr = [...prodArr, subscription];
      });
      setProducts(prodArr);
    });
  }, []);

  return products;
};

export const useUserCheckout = async (priceId) => {
  const docRef = doc(
    collection(db, "customers", `${auth.currentUser.uid}`, "checkout_sessions")
  );
  await setDoc(docRef, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });

  onSnapshot(docRef, (snap) => {
    const checkoutUrl = snap.data().url;
    checkoutUrl ? window.location.replace(checkoutUrl) : "";
    console.log(checkoutUrl);
  });
};

export const useActiveSub = () => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const subsData = await getDocs(
        collection(db, "customers", `${auth.currentUser.uid}`, "subscriptions")
      );
      subsData.forEach((doc) => {
        const sub = {
          role: doc.data().role,
          subEnd: doc.data().current_period_end.seconds,
        };
        Object.keys(sub).length !== 0 && setActive(sub);
      });
    };
    getData();
  }, []);

  return active;
};
