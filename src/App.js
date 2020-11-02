import React, { useState, useEffect } from 'react'
import './App.css';
import SignInForm from './Components/SignInForm.js'
import Signup from './Components/SignUpForm.js'
import UserNavBar from './Components/UserNavBar.js'
import UserProfile from './Containers/UserProfile.js'
import { Route, Switch } from 'react-router-dom'
import Welcome from './Components/Welcome.js'
import UsersIndex from './Containers/UsersIndex.js'
import NewMessage from './Components/NewMessage.js'

function App() {

  const usersAPI_URL = 'http://localhost:3000/users'

  const [users, setUsers] = useState([])
  // initial presentUser value is false, and while this is true, the sign-in
  // form will be displayed. when setPresentUser is set to whatever user is 
  // logged in, then it will show that user's profile. this is method loginToggle()
  const [presentUser, setPresentUser] = useState(false)
  const [presentToken, setPresentToken] = useState('')



  const submitHandler = (event) => {
    event.preventDefault()
    let username = event.target[0].value
    let password = event.target[1].value
    let newCurrentUser = users.find(user => user.username === username)
    if(newCurrentUser) {
      setPresentUser(newCurrentUser)
    // console.log("newCurrentUser =>>", newCurrentUser)
    }
  }

  useEffect(() =>  {
    // fetch('http://localhost:3000/users/', {
    //   method: 'GET', 
    //   headers: {
    //     'Authorization': `Bearer <token>`,
    //   }
    // })
    // .then(response => response.json())
    // .then(usersJson => setUsers(usersJson))
  }, [])

  const signUpSubmitHandler = (event) => {
      event.preventDefault()
      let name = event.target[0].value
      let userName = event.target[1].value
      let email = event.target[2].value
      let description = ''
      let password = event.target[3].value

      fetch(usersAPI_URL, {
          method: 'POST', 
          headers: {
              'Authorization': `Bearer <token>`,
              "content-type": "application/json",
              "accepts": "application/json"
          },
          body: JSON.stringify({ 
              user: {
                  name: name,
                  username: userName,
                  email: email,
                  description: description,
                  password: password
              }
          })
      })
      .then(response => response.json())
      .then(user => {
        setPresentToken(user.token)
        setPresentUser(user.user)
      })
  }

    
  return (
    <div>
    {console.log("present user =>", presentUser)}
    {console.log("present token =>", presentToken)}
      {presentUser ? <UserNavBar user={presentUser}/> : null }
      <div>

        <Switch>

          <Route path="/signin" render={() =>  < SignInForm user={presentUser} submitHandler={submitHandler}/> } />

          <Route path="/signup" render={() => < Signup submitHandler={signUpSubmitHandler} /> } />
    
          <Route path="/users/" exact render={() => < UsersIndex /> }/>

          <Route path="/users/:id" render ={({match}) => {
            let id = parseInt(match.params.id)
            let loggedUser = users.find(user => user.id === id)
            return < UserProfile user={loggedUser} /> 
          } } />


          <Route path="/" exact render ={() => <Welcome />} />

        </Switch>
      </div>
    </div>
  );
}

export default App;
