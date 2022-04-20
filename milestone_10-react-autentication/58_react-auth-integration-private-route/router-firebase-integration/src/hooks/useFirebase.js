import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '.././Firebase/firebase.init'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});

    
    useEffect(() => {
      
    }, [])

    const signInWithGoogle = () => {
        console.log('Sign in soon');
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
        })
    }

    // return [user, setUser];
    return { user, signInWithGoogle};
}

export default useFirebase;