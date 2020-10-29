import React from 'react'
import logo from './logo.svg';
import './App.css';
import Signup from './Components/SignUpForm'
import Signin from './Components/SignInForm'
import NewMessage from './Components/NewMessage'

function App() {
  return (
    <div>
      < Signin />
      < NewMessage />
    </div>
  );
}

export default App;
