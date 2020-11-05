import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Messages from './Messages.js'
import { Link } from 'react-router-dom'
import UserNavBar from '../Components/UserNavBar.js'
import UsersIndex from './UsersIndex.js'
import UserProfileComponent from '../Components/UserProfileComponent.js'
import { propTypes } from 'react-bootstrap/esm/Image'




const UserProfile = (user) => {
    console.log("USER PROPS  AT USER PROFILE ", user)
     const profile = () => {
        fetch('http://localhost:3000/profile', {
            method: 'GET', 
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'content-type': 'application/json',
                'accepts': 'application/json'
            }
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }

    return(
        <div>
            <h2> {user.user.name}'s User Profile Page</h2>
                <p> Username: {user.user.username}</p>
                <p> Description: {user.user.description}</p>
            <div>
            </div>
        </div>
        )
}

export default UserProfile
// imported in ../App.js

// <Switch>
// <Route path="/messages" render={() => < Messages /> }/>
// {/* <Route path="/signup" render={() => < SignUpForm submitHandler={signUpSubmitHandler} /> } /> */}

// <Route exact path="/users" render={() => < UsersIndex user={user.user} users={user.users} likedButton={user.likedButton}/> }/>

// <Route path="/users/:id" render={(routerProps) => < UserProfileComponent {...routerProps} users={user.users}/> }/>
// </Switch>