import React, { useState, useEffect } from 'react'
import UserProfile from './UserProfile.js'
import { NavLink, Redirect } from 'react-router-dom'
import { Form, Col, InputGroup, FormControl, Button  } from 'react-bootstrap'
import { Button as SemanticButtonn, Divider, Form as SemanticForm, Grid, Segment } from 'semantic-ui-react'

function SignInForm(props) {

    const signInHeadingStyling = {
        paddingBottom: '15px',
    }

    const notMemberStyling = {
        paddingTop: '20px',
        display: 'flex', 
        justifyContent: 'space-around',
        flexDirection: 'column',
        maxWidth: '100%'
    }

    const notMemberStylingH4 = {
        paddingBottom: '6px'
    }

    return(
        <div className="TEST" style={ { backgroundColor: '#fcd4e5', padding: '50px', width: '50%', borderRadius: '25px', border: '2px solid red' } }>
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
                            <Button type="submit" className="mb-2" variant="outline-danger">
                            Log In
                            </Button>
                        </Col>
                    </Form.Row>
                    <div className="not-a-member" style={notMemberStyling}>
                        <h4 style={notMemberStylingH4}> Not A Member? </h4>
                        <NavLink to="/signup">
                            <Button variant="outline-danger"> Let's Change That </Button>{' '}
                        </NavLink>
                    </div>
                </Form>
            </div>
        </div>

        



           


    )

}

export default SignInForm
