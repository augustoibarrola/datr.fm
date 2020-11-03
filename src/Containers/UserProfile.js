import React, { useEffect } from 'react'
import NewMessage from '../Components/NewMessage.js'
import { Link } from 'react-router-dom'
import UserNavBar from '../Components/UserNavBar.js'
import UsersIndex from './UsersIndex.js'




const UserProfile = (user) => {

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
            {console.log("USERS_ARRAY ==>", user.users)}
            <h2> {user.user.name}'s User Profile Page</h2>
            {console.log("props 'user' argument ==>", user )}
            <UsersIndex users={user.users} presentUser={user.user}/>
        </div>
        )
}

export default UserProfile
// imported in ../App.js