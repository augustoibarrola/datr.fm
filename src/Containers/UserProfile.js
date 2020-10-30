import React from 'react'
import NewMessage from '../Components/NewMessage.js'
import { Link } from 'react-router-dom'


const UserProfile = (props) => {
    return(
        <div>
            <p> user goes here: </p>
                {console.log("props => ", props)}
                < NewMessage user={props.user} />
        </div>
        )
}

export default UserProfile
// imported in ../App.js