import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase';
export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }
    const facebookSignIn = (facebookProvider) => {
        return signInWithPopup(auth, facebookProvider)
    }
    const LogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { facebookSignIn, googleSignIn, user, LogIn, Register, loading, LogOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;