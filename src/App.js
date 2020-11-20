import React, { useState, useEffect } from 'react'
import './App.css';
import SignInForm from './Components/SignInForm.js'
import SignUpForm from './Components/SignUpForm.js'
import UserNavBar from './Components/UserNavBar.js'
import UserProfile from './Components/UserProfile.js'
import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './Components/Welcome.js'
import UsersIndex from './Containers/UsersIndex.js'
import PresentUserProfile from './Containers/PresentUserProfile.js'
import UserProfileWidget from './Components/UserProfileWidget.js'
import Messages from './Containers/Messages.js'
import NewMessage from './Components/NewMessage.js'
import Lastfm from './Components/Lastfm.js'

const App = () => {

  const usersAPI_URL = 'http://localhost:3000/users/'
  const heartsAPI_URL = 'http://localhost:3000/hearts/'
  const albumsAPI_URL = 'http://localhost:3000/albums/'
  const messagesAPI_URL = 'http://localhost:3000/messages/'
  const lastfmKey = process.env.REACT_APP_LASTFM_KEY
  const token = localStorage.getItem("token")



  const [users, setUsers] = useState([])
  const [presentUser, setPresentUser] = useState('')
  const [presentUserSentMessages, setPresentUserSentMessages ] = useState('')
  const [presentToken, setPresentToken] = useState('')
  const [lastfmReturnData, setLastfmReturnData ] = useState('')
  const [lastfmtags, setLastfmTags] = useState('')

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
      console.log("data at sign in handler", data)
      localStorage.setItem("token", data.jwt)
      setPresentUser(data.user)
    })
  }

  const signUpSubmitHandler = (event) => {
      event.preventDefault()
      let name = event.target[0].value
      let userName = event.target[1].value
      let imageUrl = event.target[2].value
      let email = event.target[3].value
      let description = ''
      let password = event.target[4].value

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
                  // age: 
                  username: userName,
                  email: email,
                  description: description,
                  image_url: imageUrl,
                  password: password
                  // t.string "name"
                  // t.integer "age"
                  // t.string "username"
                  // t.string "email"
                  // t.text "description"
                  // t.string "image_url"
                  // t.string "password_digest"
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

  const getIndex = (likedUsers) => {
    for( let i = 0; i < likedUsers.length; i++) {
       if( likedUsers[i] === true) {
           return i;
       }
    }
  }

  const likedButton = (event) => {
    event.preventDefault()
    console.log("presentUser liking someone ==>", presentUser)
    console.log("person being liked ==>", event.target.id)

    let liker_id = presentUser.id
    let liked_id = event.target.id
    let likedUsers = presentUser.liked_users.filter(hearts => hearts.liked_id == liked_id )

    console.log(" liked users in liked handler", likedUsers)

    if (likedUsers.length > 0) {
      console.log("you've already liked this user")
    } else if ( likedUsers.length <= 0 ) {
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
  }

  const messagesSubmitHandler = (event, recipient) => {
    event.preventDefault()
    console.log("event when submitting new message => ", event)
    
    let sender_id = presentUser.id
    let sendee = users.filter(user => user.name == recipient)
    let recipient_id = sendee[0].id
    let message_body = event.target[2].value


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
         console.log("present user when new message comes back from fetch", presentUser)
         setPresentUserSentMessages(presentUser.messages_sent.push(data.new_message))
     })
  }

  const directMessageHandler = (event, messageBody) => {
    // event.preventDefault()


    fetch(messagesAPI_URL, {
      method: 'POST', 
      headers: {
          'Authorization': `Bearer ${token}`,
          "content-type": "application/json",
          "accepts": "application/json"
      },
      body: JSON.stringify({
          sender_id: presentUser.id,
          recipient_id: event.target.id,
          message_body: messageBody
      })
  })
  .then(response => response.json())
  .then(data => {
      setPresentUserSentMessages(presentUser.messages_sent.push(data.new_message))
  })
  }

  const userUpdateHandler = (event, userDescription, userName, userUsername, userEmail, userProfileUrl) => {
    event.preventDefault()
    presentUser.description = userDescription
    presentUser.name = userName
    presentUser.username = userUsername
    presentUser.email = userEmail
    presentUser.image_url = userProfileUrl
    console.log("PRESENTUSER AT PATCH HANDLER =>", presentUser )
    console.log(event.target)


     fetch(usersAPI_URL + presentUser.id, {
       method: 'PATCH', 
       headers: {
         'Authorization': `Bearer ${token}`,
         "content-type": "application/json",
         "accepts": "application/json"
       },
       body: JSON.stringify( presentUser )
     })
     .then(response => response.json())
     .then(patchedUser => {
       console.log("UPDATED USER  AT USERUPDATEHANDLER=> ", patchedUser )
        setPresentUser(patchedUser)
     })
  }

  const lastfmHandler = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target[0])
    console.log("lastfmhandler success", event.target[0].value)
    let lastfmUsername = event.target[0].value 
    fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=${lastfmUsername}&api_key=${lastfmKey}&format=json`)
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('error');
    })
    .then(data => setLastfmReturnData(data))
    .catch(() => setLastfmReturnData( { error: 'Fetch request didn\'t work' } ) )
    // .catch(() => setLastfmReturnData( { error: 'Fetch request didn\'t work' } ) )
  }

  const deleteHandler = (event) => {

    console.log("event at deletehandler execution => ", event.target)
    fetch(usersAPI_URL + presentUser.id, {
      method: 'DELETE', 
      headers: {
        'Authorization': `Bearer ${token}`,
        "content-type": "application/json",
        "accepts": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => console.log("response from delete request => ", data))
    setPresentUser('')
    localStorage.removeItem("token")

  }

  const directMusicMessageHandler = (event, msgBody) => {

    console.log("props at direct music message handler => ", event)
    console.log("msgBody at DMMH => ", msgBody)
  }

  
  
  const favoriteAlbumHandler = (event, selectedAlbum) => {
    console.log("EVENT => ", event )
    console.log("EVENT TARGET => ", event.target)
    console.log("SELECTED ALBUM => ", selectedAlbum)

    fetch(albumsAPI_URL, {
      method: 'POST',
      headers: {
        // 'Authorization': `Bearer <token>`,
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({ 
        user_id: presentUser.id, 
        name: selectedAlbum.name, 
        artist_name: selectedAlbum.artist["#text"], 
        image_url: ""

        // t.bigint "user_id"
        // t.string "name"
        // t.string "artist_name"
        // t.string "image_url"
        // t.datetime "created_at", precision: 6, null: false
        // t.datetime "updated_at", precision: 6, null: false
        // t.index ["user_id"], name: "index_albums_on_user_id"
      })
      .then(response => response.json())
      .then(data => console.log("response data favorting album => ", data))
    })
  }


  useEffect(() =>  {
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
  }, [presentUser])


  return (
    <div>
      <UserNavBar user={presentUser} users={users} />
      <div className="ux-body">
         <Switch>

            <Route path="/users/:id" render={(routerProps) => {
              const idUser = users.find(user => user.id == routerProps.match.params.id )
              return  < UserProfile {...routerProps} user={idUser} users={users} presentUser={presentUser} likedButton={likedButton} lastfmData={lastfmReturnData} directMessageHandler={directMessageHandler} /> 
            }}/>

            <Route path="/users" render={() => presentUser ? < UsersIndex user={presentUser} users={users} likedButton={likedButton}/>  :  <Redirect to="/"/> }/>

            <Route path="/lastfm" render={() => < Lastfm user={presentUser} favoriteAlbumHandler={favoriteAlbumHandler} /> }/>
            {/* Make above for last.fm sign in route.  */}

            <Route path="/signin" render={() =>  presentUser ? <Redirect to="/"/> : < SignInForm signInSubmitHandler={() => signInSubmitHandler}/>  }/>

            <Route path="/signup" render={() =>  presentUser ? <Redirect to="/" />  : < SignUpForm signUpSubmitHandler={signUpSubmitHandler} /> } />
            
            <Route path="/signout" render={() => {
                setPresentUser('')
                localStorage.removeItem("token")
               return presentUser ? <Redirect to="/" /> : <Redirect to="/" />
            }} />

            <Route path="/messages" render={() => presentUser ? < Messages user={presentUser} users={users} messagesSubmitHandler={messagesSubmitHandler} presentUserSentMessages={presentUserSentMessages}/> :  <Redirect to="/"/>  } />

            <Route path="/" render={() => presentUser ? < PresentUserProfile user={presentUser} users={users} likedButton={likedButton} lastfmData={lastfmReturnData} userUpdateHandler={userUpdateHandler} lastfmHandler={lastfmHandler} deleteHandler={deleteHandler} directMusicMessageHandler={directMusicMessageHandler} favoriteAlbumHandler={favoriteAlbumHandler} /> : < SignInForm signInSubmitHandler={signInSubmitHandler}/> } />

        </Switch>

      </div>
    </div>
  );
}

export default App;



