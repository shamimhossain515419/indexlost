"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Auth/Firebase';
export const AuthContact = createContext(null)
import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     sendEmailVerification,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     updateProfile,
} from 'firebase/auth'
const GlobalState = ({ children }) => {

     const Auth = getAuth(app)
     const [user, setUser] = useState(false)
     const [open, setOpen] = useState(false)
     const [loading, setLoading] = useState(true)
     const [showModal, setShowModal] = useState(false)
     const GoogleProvider = new GoogleAuthProvider();



     const Sign_Up = async (email, password) => {
          const result = await createUserWithEmailAndPassword(Auth, email, password);
          return result;

     }

     const Login = async (email, password) => {
          const result = await signInWithEmailAndPassword(Auth, email, password);
          return result;

     }

     const profileUpdate = async (name, photo) => {
          const result = await updateProfile(name, photo);
          return result
     }
     const Sing_out = async () => {
          const result = await signOut(Auth);
          return result
     }

     const GoogleLogin = async () => {
            const result=await signInWithPopup(Auth, GoogleProvider);
            return result
     }


     useEffect(() => {
          const unSubscript = onAuthStateChanged(Auth, currentUser => {
               setUser(currentUser);
               setLoading(false);
          })
          return () => {
               unSubscript()
          }

     })

     const authInfo = {
          user, open, setOpen, showModal, setShowModal, Sign_Up, Login, profileUpdate, GoogleLogin, Sing_out
          , loading

     }


     return (
          <div>

               <AuthContact.Provider value={authInfo}>
                    {children}
               </AuthContact.Provider>


          </div>
     );
};

export default GlobalState;