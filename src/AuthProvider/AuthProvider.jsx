import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true);


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user profile
    const updateUserProfile = (fullname, imageURL) => {
        return updateProfile(auth.currentUser, {
            displayName: fullname,
            photoURL: imageURL
        })
    }


    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // sign out user
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {


        setLoading(false); 
        setUser(user);
        
        console.log('Current User', user);
        if (user) {
            const userEmail = user?.email || user.email;
            const loggedUser = { email: userEmail };
            axios.post('https://harvest-hub-server-nine.vercel.app/jwt', loggedUser, {
                withCredentials: true
            })
            .then(res => {
                console.log('token response', res.data);
                setLoading(false); 
            })
            .catch(err => {
                console.error('Token creation error:', err);
                setLoading(false); 
            });
        } else {
            axios.post('https://harvest-hub-server-nine.vercel.app/logout', loggedUser, {
                withCredentials: true
            })
            .then(res => {
                console.log(res.data);
                setLoading(false); 
            })
            .catch(err => {
                console.error('Logout error:', err);
                setLoading(false); 
            });
        }
    });

    return () => unsubscribe();
}, []);



    const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;