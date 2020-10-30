import React from 'react'
import NewMessage from '../Components/NewMessage.js'


const UserProfile = (props) => {
    return(
        <div>
            <p> user goes here: </p>
            {props.user.name}
            < NewMessage user={props.user}/>
        </div>
        )
}

export default UserProfile