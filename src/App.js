import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import SignInForm from './Components/SignInForm.js'
import Signup from './Components/SignUpForm.js'
import NewMessage from './Components/NewMessage.js'
import UserNavBar from './Components/UserNavBar.js'

function App() {

  const [presentUser, setPresentUser] = useState(false)

  return (
    <div>
    {console.log("presentUser => ", presentUser)}
      {presentUser ? <UserNavBar /> : null }
      <div>
        < SignInForm user={presentUser} setUser={setPresentUser}/>
        < Signup />
        < NewMessage />
      </div>
    </div>
  );
}

export default App;
