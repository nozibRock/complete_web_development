import './App.css';

import { getAuth } from "firebase/auth";
import app from './firebase.init';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {

  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('form submitted');
  }
  return (
    <div className="App">
      <form action="" onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" name="" id="" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        <br /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
