import React from 'react'
import { Route, NavLink } from 'react-router-dom'

const Welcome = () => {
    return(
        <div>
            <h1>Datr.fm</h1>
            <NavLink to="/signin" >Sign In </NavLink> 
        </div>

    )
}

export default Welcome