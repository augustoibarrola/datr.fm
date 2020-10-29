import React from 'react'
import logo from './logo.svg';
import './App.css';
import Signin from './Components/SignInForm'
import Signup from './Components/SignUpForm'
import NewMessage from './Components/NewMessage'

function App() {
  return (
    <div>
      < Signin />
      < Signup />
      < NewMessage />
    </div>
  );
}

export default App;
