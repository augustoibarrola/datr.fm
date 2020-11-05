import React, { useState, useEffect } from 'react'
import UserProfile from '../Containers/UserProfile.js'
import { NavLink, Redirect } from 'react-router-dom'
import { Form, Col, InputGroup, FormControl, Button  } from 'react-bootstrap'

function SignInForm(props) {

    const signInHeadingStyling = {
        paddingBottom: '15px',
    }

    return(
        <div>
            <div style={signInHeadingStyling}> 
                <h2> Sign In Please</h2>
            </div>
            <div>
            <Form onSubmit={(event) => props.signInSubmitHandler(event)}>
                    <Form.Row className="align-items-center">

                        <Col xs="auto">
                        
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                            </Form.Label>
                            
                            <InputGroup className="mb-2">
                            
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            
                            <FormControl id="inlineFormInputGroup" placeholder="Username" />
                            
                            </InputGroup>
                            
                        </Col>
                        
                            <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                            Password
                            </Form.Label>
                            
                            <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            type="password"
                            placeholder="Password"
                            />
                        </Col>

                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                            Log In
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        </div>



           


    )

}

export default SignInForm
// imported in ../App.js

//  <h2>Sign in Please</h2>

//             <form onSubmit={(event) => props.signInSubmitHandler(event)}>
//                 <div>
//                     <label>UserName:</label>
//                     <input />
//                 </div>


//                 <div>
//                     <label>Password:</label>
//                     <input type="password" />
//                 </div>

//                 <div>
//                         <input type="submit"/> 
//                 </div>

//             </form>

//             <div>
//                 <NavLink to="/signup" >Sign Up</NavLink>
//             </div> 