import React from 'react'
import NewMessage from '../Components/NewMessage.js'
import { Link } from 'react-router-dom'


const UserProfile = (props) => {
    return(
        <div>
            <p> user goes here: </p>
            {props.user.name}
            < NewMessage user={props.user} users={props.users}/>
        </div>
        )
}

export default UserProfile