import React from 'react'

const UserProfile = (props) => {
    return(
        <div>
            <p> user goes here: </p>
            {props.user.name}
        </div>
        )
}

export default UserProfile