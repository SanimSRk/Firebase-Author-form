import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/author.init';

export const AuthContext = createContext(null);
const googleProveder = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [users, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const createUsers = (email, pasword) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, pasword);
  };
  const singUpUsers = (email, pasword) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, pasword);
  };
  const singinGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProveder);
  };
  const gitHubLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoding(false);
      console.log('current users set', currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    singinGoogle,
    loding,
    logOut,
    users,
    createUsers,
    singUpUsers,
    gitHubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
