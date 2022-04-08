import "./App.css";
import app from "./firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error("error", error);
      })
      // console.log("working");
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google sign in</button>
    </div>
  );
}

export default App;
