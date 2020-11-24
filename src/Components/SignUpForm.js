import React from 'react'
import { Link } from 'react-router-dom'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

const SignUpForm = (props) => {

    const signUpHeadingStyling = {
        paddingBottom: '15px'
    }

    return(
        <div> 
            <div style={signUpHeadingStyling}>
                <h2> Sign Up </h2>
            </div>
            <Form onSubmit={(event) => props.signUpSubmitHandler(event)}>

                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>  
                        <FormControl id="inlineFormInputGroup" placeholder="Name" />     
                </Form.Group>
            
                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>  
                        <FormControl id="inlineFormInputGroup" placeholder="Username" />     
                </Form.Group>

                <Form.Group controlId="formGroupProfile Picture Url">
                    <Form.Label>Profile Picture Url</Form.Label>  
                        <FormControl id="inlineFormInputGroup" placeholder="Profile Picture Url" />     
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="outline-danger" type="submit"> You're all Set! </Button>{' '}

            </Form>
        </div>
    )
}



export default SignUpForm