import React, { useState, useEffect } from 'react'
import './App.css';
import SignInForm from './Components/SignInForm.js'
import SignUpForm from './Components/SignUpForm.js'
import UserNavBar from './Components/UserNavBar.js'
import UserProfile from './Containers/UserProfile.js'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './Components/Welcome.js'
import UsersIndex from './Containers/UsersIndex.js'
import UserProfileComponent from './Components/UserProfileComponent.js'
import UserProfileWidget from './Components/UserProfileWidget.js'
import Messages from './Containers/Messages.js'
import NewMessage from './Components/NewMessage.js'

const App = () => {

  const usersAPI_URL = 'http://localhost:3000/users/'
  const heartsAPI_URL = 'http://localhost:3000/hearts/'
  const messagesAPI_URL = 'http://localhost:3000/messages/'

  const [users, setUsers] = useState([])
  const [presentUser, setPresentUser] = useState('')
  const [presentUserSentMessages, setPresentUserSentMessages ] = useState('')
  const [presentToken, setPresentToken] = useState('')



  const signInSubmitHandler = (event) => {
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
              // 'Authorization': `Bearer <token>`,
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
      .then(newUser => {
        console.log("NEW_USER => ", newUser)
        localStorage.setItem("token", newUser.jwt)
        setPresentUser(newUser.user)
      })
  }

  const likedButton = (event) => {
    console.log("presentUser id ==>", presentUser)
    console.log("event.target ==>", event.target)

    let token = localStorage.getItem("token")

    fetch('http://localhost:3000/hearts', {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${token}`,
        "content-type": "application/json",
        "accepts": "application/json"
      }, 
      body: JSON.stringify({
        liker_id: presentUser.id,
        liked_id: event.target.id
       })
    })
    .then(response => response.json())
    .then(console.log)
  }

  const messagesSubmitHandler = (event, recipient) => {
    event.preventDefault()
    console.log("event when submitting new message => ", event)
    
    let sender_id = presentUser.id
    let sendee = users.filter(user => user.name == recipient)
    let recipient_id = sendee[0].id
    let message_body = event.target[2].value
    let token = localStorage.getItem("token")


     fetch(messagesAPI_URL, {
         method: 'POST', 
         headers: {
             'Authorization': `Bearer ${token}`,
             "content-type": "application/json",
             "accepts": "application/json"
         },
         body: JSON.stringify({
             sender_id: presentUser.id,
             recipient_id: recipient_id,
             message_body: message_body
         })
     })
     .then(response => response.json())
     .then(data => {
         console.log("POST_REQUEST_MESSAGES_RESPONSE => ", data)
     })
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
      {console.log("presentUser", presentUser)}
      {console.log("presentUserSentMessages", presentUserSentMessages)}
      {console.log("users", users)}
      <UserNavBar user={presentUser} users={users} />
      <div className="ux-body">
        {/* {presentUser ? < UserProfile user={presentUser} users={users}/> : < SignInForm signInSubmitHandler={signInSubmitHandler} /> } */}
        
         <Switch>

            <Route path="/users/:id" render={(routerProps) =>{
              const idUser = users.find(user => user.id == routerProps.match.params.id )
              return  < UserProfileComponent {...routerProps} user={idUser} users={users} likedButton={likedButton}/>
            }}/>

            <Route path="/users" render={() => < UsersIndex user={presentUser} users={users} likedButton={likedButton}/> }/>

            <Route path="/signin" render={() =>  < SignInForm signInSubmitHandler={() => signInSubmitHandler}/>  }/>

            <Route path="/signup" render={() =>  presentUser ? <Redirect to="/" />  : < SignUpForm signUpSubmitHandler={signUpSubmitHandler} /> } />
            
            <Route path="/signout" render={() => {
                setPresentUser('')
                localStorage.removeItem("token")
               return presentUser ? <Redirect to="/" /> : <Redirect to="/" />
            }} />

            <Route path="/messages" render={() => presentUser ? < Messages user={presentUser} users={users} messagesSubmitHandler={messagesSubmitHandler}/> : null } />

            <Route path="/" render={() => presentUser ? < UserProfileComponent user={presentUser} users={users} likedButton={likedButton}/> : < SignInForm signInSubmitHandler={signInSubmitHandler}/> } />

        </Switch>

      </div>
    </div>
  );
}

export default App;



