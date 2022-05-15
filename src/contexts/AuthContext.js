import React, { useContext, useEffect, useState } from "react";

import { db } from "../server/firebase";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUid, setCurrentUid] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (username, email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", user.user.uid), {
      uid: user.user.uid,
      username: username,
    });
  };

  const logOut = async () => {
    await signOut(auth);
    setCurrentUid(null);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUid(user ? user.uid : null);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const value = {
    currentUid,
    signIn,
    signUp,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
