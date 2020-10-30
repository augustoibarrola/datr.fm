import React, { useState, useEffect } from 'react'
import './App.css';
import SignInForm from './Components/SignInForm.js'
import Signup from './Components/SignUpForm.js'
import UserNavBar from './Components/UserNavBar.js'
import UserProfile from './Containers/UserProfile.js'
import { Route, Switch } from 'react-router-dom'
import Welcome from './Components/Welcome.js'

function App() {

  // initial presentUser value is false, and while this is true, the sign-in
  // form will be displayed. when setPresentUser is set to whatever user is 
  // logged in, then it will show that user's profile. this is method loginToggle()
  const [presentUser, setPresentUser] = useState(false)

  const [users, setUsers] = useState([])


  const submitHandler = (event) => {
    event.preventDefault()
    let username = event.target[0].value
    let password = event.target[1].value
    let newCurrentUser = users.find(user => user.username === username)
    if(newCurrentUser) {
      setPresentUser(newCurrentUser)
    }
  }

  useEffect(() =>  {
    fetch('http://localhost:3000/users/')
    .then(response => response.json())
    .then(usersJson => setUsers(usersJson))
  }, [])
    
  return (
    <div>
      {presentUser ? <UserNavBar /> : null }
      <div>
      {/* { presentUser ?  < UserProfile user={presentUser} users={users}/>  : < SignInForm user={presentUser} submitHandler={submitHandler}/> } */}
        <Switch>
          <Route path="/signin" render={() =>  < SignInForm user={presentUser} submitHandler={submitHandler}/> } />
          <Route path="/signup" render={() => < Signup /> } />
          <Route path="/" render ={() => <Welcome />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
