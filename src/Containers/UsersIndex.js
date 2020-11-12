import React, { useEffect, useState } from 'react'
import PresentUserProfileComponent from '../Components/PresentUserProfileComponent.js'
import { CardDeck, InputGroup, FormControl } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import UserProfileWidget from '../Components/UserProfileWidget.js'
import PresentUserProfileWidget from '../Components/PresentUserProfileWidget'

const UsersIndex = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [users, setUsers] = useState(props.users.filter( user => user.id !== props.user.id ))

    useEffect(() => {
        const results = users.filter(user => user.username.toLowerCase().includes(searchTerm))
        setSearchResults(results)
    }, [searchTerm])

    const handleSearchBarChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return(
        <div>

            {/* mainuser widhet goes here  */}
            <div>
                <PresentUserProfileWidget user={props.user} likedButton={props.likedButton}/> 
            </div>
            
            {/* search bar logic*/}
            <div className="search-bar-div" style={ { width: '50%' } }>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Looking for Someone?</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text" placeholder="Look for Love" onChange={handleSearchBarChange}  />
                </InputGroup>
            </div>

            {/* deck of user profile widgets is populated here */}
            <div className="card-deck-div" style={ { overflowY: 'auto', height: '700px' } }>
                <CardDeck>
                        { searchResults ? searchResults.map( user =>  <UserProfileWidget user={user} likedButton={props.likedButton}/> ) : null  }
                </CardDeck>
            </div>

        </div>
    )
}

export default UsersIndex
// imported in ../App.js



