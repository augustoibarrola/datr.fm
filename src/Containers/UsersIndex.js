import React from 'react'
import UserProfileComponent from '../Components/UserProfileComponent.js'
import { CardDeck } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import UserProfileWidget from '../Components/UserProfileWidget.js'

const UsersIndex = (props) => {

    // const mapUsers = (props) => {
    //     props.users.map(user =>  <Link to={`/users/${user.id}`} ><UserProfileComponent id={user.id} key={user} user={user} presentUser={props.presentUser} likedButton={props.likedButton}/></Link>)
    // }
    return(
        <div className="card-deck">
            <CardDeck>
                    {props.users.map( user =>  <UserProfileWidget user={user} likedButton={props.likedButton}/>)}
            </CardDeck>
        </div>
    )
}

export default UsersIndex
// imported in ../App.js

// UsersIndex should contain UserProfileComponents 

