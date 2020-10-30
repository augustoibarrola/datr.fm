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

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(false)

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
    

  // const loginToggle = () => {
  //   if (presentUser === false) {
  //    return < SignInForm user={presentUser} submitHandler={submitHandler}/>
  //   } else if (currentUser !== false) {
  //     <  UserProfile user={presentUser}/> 
  //   }
  // }

  return (
    <div>
      {presentUser ? <UserNavBar /> : null }
      <div>
        {/* {loginToggle()} */}
        {presentUser ?  < UserProfile user={presentUser}/>  : < SignInForm user={presentUser} submitHandler={submitHandler}/> }
        < Signup />
        < NewMessage user={presentUser}/>
      </div>
    </div>
  );
}

export default App;
