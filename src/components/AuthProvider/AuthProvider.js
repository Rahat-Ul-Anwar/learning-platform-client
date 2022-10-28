import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config.js';
 
 

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true );

   // google pop up

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

  // create user for registration using email and password authentication.

    const createUser = (email, password, photoURL, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password, photoURL,name);
        
    }

 // log in using email and password
    const signIn = (email, password) => {
        setLoading(true);
         
        return signInWithEmailAndPassword(auth,email, password);


     }
    
    


    // for sign out for google

    const logOut = () => {
        setLoading(true);
        
        return signOut(auth);
    }

    

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            
            console.log('inside auth state change', currentUser);
           setUser(currentUser);
           setLoading(false);
       })
        return () => {
            unsubscribe();
            
        } 
    },[])



    const authInfo = { user, loading, providerLogin, logOut , createUser, signIn};
    
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;