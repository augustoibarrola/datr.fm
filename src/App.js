import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import SignInForm from './Components/SignInForm.js'
import Signup from './Components/SignUpForm.js'
import NewMessage from './Components/NewMessage.js'
import UserNavBar from './Components/UserNavBar.js'
import UserProfile from './Containers/UserProfile.js'

function App() {

  // initial presentUser value is false, and while this is true, the sign-in
  // form will be displayed. when setPresentUser is set to whatever user is 
  // logged in, then it will show that user's profile. this is method loginToggle()
  const [presentUser, setPresentUser] = useState(false)

  const loginToggle = () => {
    if (presentUser === false) {
     return < SignInForm user={presentUser} setUser={setPresentUser}/>
    } else {
      <  UserProfile user={presentUser}/> 
    }

  }

  return (
    <div>
    {console.log("presentUser => ", presentUser)}
      {presentUser ? <UserNavBar /> : null }
      <div>
        {loginToggle()}
        < Signup />
        < NewMessage user={presentUser}/>
      </div>
    </div>
  );
}

export default App;
