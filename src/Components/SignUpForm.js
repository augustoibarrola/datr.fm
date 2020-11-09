import React from 'react'
import { Link } from 'react-router-dom'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

function SignUpForm(props) {

    // return(  
    //     <div> 
    //         <h1>Sign Up</h1>
    //         <form onSubmit={(event) => props.signUpSubmitHandler(event)}>
                
    //             <div>
    //                 <label>Name:</label>
    //                 <input type="text"/>
    //             </div>

    //             <div>
    //                 <label>UserName:</label>
    //                 <input type="text"/>
    //             </div>

    //             <div>
    //                 <label>Email: </label>
    //                 <input type="email" />
    //             </div>

    //             <div>
    //                 <label>Password:</label>
    //                 <input type="password"/>
    //             </div>

    //             <div>
    //                 {/* <Redirect to="/" > */}
    //                     <input type="submit"/>
    //                 {/* </Redirect> */}
    //             </div>

    //         </form>

    //         <Link to="/lastfm"> Sign In With Last.fm </Link>
    //           {/* make above the sign in button to last.fm sign in  */}

    //     </div>
    // )

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

                {/* <Form.Group controlId="formGroupProfilePicture">
                    <Form.Label>Profile Picture</Form.Label>  
                    <Form.File 
                        id="custom-file-translate-scss"
                        label="Profile Picture "
                        lang="en"
                        custom
                    />
                </Form.Group> */}

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


                <Button variant="outline-primary" type="submit"> You're all Set! </Button>{' '}

            </Form>
        </div>
    )
}



export default SignUpForm