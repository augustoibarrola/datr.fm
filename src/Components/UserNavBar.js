import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import UsersIndex from '../Containers/UsersIndex'
import UserProfile from './UserProfile'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'



const UserNavBar = (props) => {

    const [presentUser, setPresentUser ] = useState(props.user)


    return(
        <div>
             <ReactBootStrap.Navbar collapseOnSelect expand="lg" style={ { backgroundColor: '#fcd7d4', textDecoration: 'none' } }>
             <ReactBootStrap.Navbar.Brand ><NavLink to="/"> Datr.fm | {props.user.username}  </NavLink> </ReactBootStrap.Navbar.Brand>
             <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                 <ReactBootStrap.Nav className="mr-auto">
                     {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
                            <ReactBootStrap.NavDropdown.Item ><NavLink to="/users">Users</NavLink></ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item ><NavLink to="/messages">Messages</NavLink></ReactBootStrap.NavDropdown.Item>
                     {/* </ReactBootStrap.NavDropdown> */}
                 </ReactBootStrap.Nav>
                 <ReactBootStrap.Nav >
                { props.user ? <NavLink to="/signout">Sign Out</NavLink> : <NavLink to="/signin"> Sign In</NavLink> } 
                { props.user ? <img id="navbar-profile-img " src={props.user.image_url} /> : null } 
                 </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
             </ReactBootStrap.Navbar>
        </div>
    )
}

export default UserNavBar