import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import './ToggleTheme.css';

export const ThemeContext = createContext(null);
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [selected, setSelected] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light");


    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const resetForgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current logged in user:', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const selectedCourse = (id) => {
        setLoading(false);
        setSelected(id);
    }

    const toggleTheme = () => {
        setTheme((curr) => curr === "light" ? "dark" : "light")
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        resetForgetPassword,
        signIn,
        googleProviderLogin,
        githubProviderLogin,
        logOut,
        selected,
        selectedCourse,
    };

    const themeInfo = {
        theme, toggleTheme
    }

    return (
        <div id={theme}>
            <ThemeContext.Provider value={themeInfo}>
                <AuthContext.Provider value={authInfo}>
                    {children}
                </AuthContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
};

export default AuthProvider;