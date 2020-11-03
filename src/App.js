import React, { useState, useEffect } from 'react'
import './App.css';
import SignInForm from './Components/SignInForm.js'
import SignupForm from './Components/SignUpForm.js'
import UserNavBar from './Components/UserNavBar.js'
import UserProfile from './Containers/UserProfile.js'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './Components/Welcome.js'
import UsersIndex from './Containers/UsersIndex.js'
import NewMessage from './Components/NewMessage.js'

function App() {

  const usersAPI_URL = 'http://localhost:3000/users/'
  const heartsAPI_URL = 'http://localhost:3000/hearts/'

  const [users, setUsers] = useState([])
  // initial presentUser value is false, and while this is true, the sign-in
  // form will be displayed. when setPresentUser is set to whatever user is 
  // logged in, then it will show that user's profile. this is method loginToggle()
  const [presentUser, setPresentUser] = useState('')
  const [presentToken, setPresentToken] = useState('')



  const signInSubmitHandler = (event) => {
      // a user hits the sign in button and a POST request to 
      // /login/ is made, which triggers the auth#create action 
      // in the backend. If a user is found given the username and their password 
      // matches that users password_digest string, a token will be created with that user's
      // id, and that user and that jwt token will be rendered. if the user isnt found
      // by the auth#create action, the status will be "unauthorized", and the user will not
      // have been created 

    event.preventDefault()
    let username = event.target[0].value
    let password = event.target[1].value

    let user = {username, password}

    fetch('http://localhost:3000/login/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      setPresentUser(data.user)
    })
    // let token = localStorage.getItem("token")
    // fetch('http://localhost:3000/profile/', {
    //   method: 'GET', 
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //   }
    // })
    // .then(response => response.json())
    // .then(user=> console.log("user => ", user) )
  }

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
      .then(newUser => setPresentUser(newUser))
  }


  useEffect(() =>  {
    let token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/users/', {
        method: 'GET', 
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(response => response.json())
      .then(users=> setUsers(users) )
    }
  }, [])


  return (
    <div>
      {console.log("presentUser => ", presentUser)}
      <UserNavBar user={presentUser} users={users}  />
      <div>
            {presentUser ? < UserProfile user={presentUser} users={users}/> : < SignInForm signInSubmitHandler={signInSubmitHandler} /> }
      </div>
    </div>
  );
}

export default App;




// <Switch>
// <Route exact path="/" render={() => presentUser ? < UserProfile user={presentUser} users={users}/> : < SignInForm signInSubmitHandler={signInSubmitHandler}/> } />
  
// <Route path="/signin" render={() => < SignInForm signInSubmitHandler={() => signInSubmitHandler}/>  }/>
// {/* <Route path="/signup" render={() => < SignUpForm submitHandler={signUpSubmitHandler} /> } /> */}
// <Route path="/users/" exact render={() => < UsersIndex users={users} liked={likedButton}/> }/>
// <Route path="/users/:id" render={() => < UserProfile user={presentUser} /> } />


// </Switch>