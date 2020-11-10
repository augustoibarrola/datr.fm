import React, { useEffect, useState } from 'react'
import UserProfileComponent from '../Components/UserProfileComponent.js'
import { CardDeck, InputGroup, FormControl } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import UserProfileWidget from '../Components/UserProfileWidget.js'

const UsersIndex = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
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
                {/* <input type="text" placeholder="Look for Love" onChange={handleSearchBarChange} /> */}
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Looking for Someone?</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text" placeholder="Look for Love" onChange={handleSearchBarChange}  />
                </InputGroup>
            </div>

            <div className="card-deck">
                <div>
                    <CardDeck>
                            { searchResults ? searchResults.map( user =>  <UserProfileWidget user={user} likedButton={props.likedButton}/> ) : null  }
                            {console.log("search results => ", searchResults)}
                    </CardDeck>
                </div>

                {/* <CardDeck>
                        {props.users.map( user =>  <UserProfileWidget user={user} likedButton={props.likedButton}/>)}
                </CardDeck> */}
            </div>

        </div>
    )
}

export default UsersIndex
// imported in ../App.js

// UsersIndex should contain UserProfileComponents 

