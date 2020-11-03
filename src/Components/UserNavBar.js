import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Route, Switch, Redirect } from 'react-router-dom'
import UserProfile from '../Containers/UserProfile'
import UsersIndex from '../Containers/UsersIndex'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'




const UserNavBar = (props) => {

    const [presentUser, setPresentUser ] = useState(props.user)

    {console.log(props)}
    return(
        <div>
             <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <ReactBootStrap.Navbar.Brand href="#home"> Datr.fm | {props.user.name} </ReactBootStrap.Navbar.Brand>
             <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                 <ReactBootStrap.Nav className="mr-auto">
                     <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                         <ReactBootStrap.NavDropdown.Item href="/likes">Likes</ReactBootStrap.NavDropdown.Item>
                         <ReactBootStrap.NavDropdown.Item href="/users">Users</ReactBootStrap.NavDropdown.Item>
                         <ReactBootStrap.NavDropdown.Item href="/messages">Messages</ReactBootStrap.NavDropdown.Item>
                         <ReactBootStrap.NavDropdown.Item href="/user/:id">User Profile</ReactBootStrap.NavDropdown.Item>
                         <ReactBootStrap.NavDropdown.Divider />
                         <ReactBootStrap.NavDropdown.Item href="/signout">Sign Out</ReactBootStrap.NavDropdown.Item>
                        {/* LINKS ABOVE NEEDS TO BE WORKED OUT */}
                     </ReactBootStrap.NavDropdown>
                 </ReactBootStrap.Nav>
                 <ReactBootStrap.Nav>
                     <ReactBootStrap.Nav.Link eventKey={2} href="/signin"> Sign Out </ReactBootStrap.Nav.Link> 
                     {/* SIGN OUT LINK ABOVE NEEDS TO BE WORKED OUT */}
                 </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
             </ReactBootStrap.Navbar>
        </div>
    )
}

export default UserNavBar
// imported in ../App.js