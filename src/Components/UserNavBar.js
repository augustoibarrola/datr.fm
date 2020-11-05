import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import UserProfile from '../Containers/UserProfile'
import UsersIndex from '../Containers/UsersIndex'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'




const UserNavBar = (props) => {

    const [presentUser, setPresentUser ] = useState(props.user)

    return(
        <div>
             <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <ReactBootStrap.Navbar.Brand ><NavLink to="/" > Datr.fm | {props.user.name}  </NavLink> </ReactBootStrap.Navbar.Brand>
             <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                 <ReactBootStrap.Nav className="mr-auto">
                     <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">

                         <ReactBootStrap.NavDropdown.Item ><NavLink to="/users">Users</NavLink></ReactBootStrap.NavDropdown.Item>
                         <ReactBootStrap.NavDropdown.Item ><NavLink to="/messages">Messages</NavLink></ReactBootStrap.NavDropdown.Item>
                         <ReactBootStrap.NavDropdown.Item ><NavLink to={`/users/${props.user.id}`}>User Profile</NavLink></ReactBootStrap.NavDropdown.Item>
 
                     </ReactBootStrap.NavDropdown>
                 </ReactBootStrap.Nav>
                 <ReactBootStrap.Nav>
                { presentUser ? <NavLink to="/signout">Sign Out</NavLink> : <NavLink to="/signin">Sign In</NavLink>} 
                 </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
             </ReactBootStrap.Navbar>
        </div>
    )
}

export default UserNavBar
// imported in ../App.js