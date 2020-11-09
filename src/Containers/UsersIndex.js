import React, { useEffect, useState } from 'react'
import UserProfileComponent from '../Components/UserProfileComponent.js'
import { CardDeck } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import UserProfileWidget from '../Components/UserProfileWidget.js'

const UsersIndex = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    // const mapUsers = (props) => {
    //     props.users.map(user =>  <Link to={`/users/${user.id}`} ><UserProfileComponent id={user.id} key={user} user={user} presentUser={props.presentUser} likedButton={props.likedButton}/></Link>)
    // }

    useEffect(() => {
        const results = props.users.filter(user => user.username.toLowerCase().includes(searchTerm))
        setSearchResults(results)
    }, [searchTerm])

    const handleSearchBarChange = (event) => {
        setSearchTerm(event.target.value)
    }
    return(
        <div>
            <div className="search-bar-div">
                {/* search bar should go here  */}
                <input type="text" placeholder="Looks for Love" onChange={handleSearchBarChange} />
            </div>

            <div className="search-results-div">
                <ul>
                    { searchResults.map( user =>  <UserProfileWidget user={user} likedButton={props.likedButton}/> ) }
                    {console.log("search results => ", searchResults)}
                </ul>
            </div>

            <div className="card-deck">
                <CardDeck>
                        {props.users.map( user =>  <UserProfileWidget user={user} likedButton={props.likedButton}/>)}
                </CardDeck>
            </div>

        </div>
    )
}

export default UsersIndex
// imported in ../App.js

// UsersIndex should contain UserProfileComponents 

