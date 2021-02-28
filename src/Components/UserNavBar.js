import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import UsersIndex from '../Containers/UsersIndex'
import UserProfile from './UserProfile'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'



const UserNavBar = (user) => {

    const [presentUser, setPresentUser ] = useState(user)


    return(
        <div>

            {/* <div>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" style={ { backgroundColor: '#fcd7d4', textDecoration: 'none' } }>
                <ReactBootStrap.Navbar.Brand ><NavLink to="/"> Datr.fm | {user.username}  </NavLink> </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">

                                <ReactBootStrap.NavDropdown.Item > <NavLink to="/users">Users</NavLink> </ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item > <NavLink to="/messages">Messages</NavLink> </ReactBootStrap.NavDropdown.Item>

                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav >
                    { user ? <NavLink to="/signout">Sign Out</NavLink> : <NavLink to="/signin"> Sign In</NavLink> } 
                    { user ? <img id="navbar-profile-img " src={user.image_url} /> : null } 
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div> */}

            <div>
                <ul className="nav-bar">
                    <li className="nav-bar-li">
                        <NavLink to="/"> Datr.fm | {user.username}  </NavLink>
                    </li>
                    <li className="nav-bar-li">
                        <NavLink to="/users">Users</NavLink>
                    </li>
                    <li className="nav-bar-li">
                        <NavLink to="/messages">Messages</NavLink>
                    </li>
                    <li className="nav-bar-li">
                        { user ? <NavLink to="/signout">Sign Out</NavLink> : <NavLink to="/signin"> Sign In</NavLink> } 
                    </li>
                    <li>
                        { user ? <img id="navbar-profile-img " src={user.image_url} /> : null } 
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default UserNavBar