import React from 'react'
import UserProfileComponent from '../Components/UserProfileComponent.js'
import { CardDeck } from 'react-bootstrap'

const UsersIndex = (props) => {
    return(
        // <div>
        //     <p>User Index</p>
        //     {props.users.map(user => <UserProfileComponent key={user.id} user={user} />)}
        //     {console.log("users in userIndex =>", props)}
        // </div>
        <div className="card-deck">
            <CardDeck>
                {props.users.map(user => <UserProfileComponent key={user.id} user={user} presentUser={props.presentUser}/>)}
            </CardDeck>
        </div>
    )
}

export default UsersIndex
// imported in ../App.js

// UsersIndex should contain UserProfileComponents 