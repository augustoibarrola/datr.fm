import React from 'react'
import { Link } from 'react-router-dom'

function SignUpForm(props) {

    return(  
        <div> 
            <h1>Sign Up</h1>
            <form onSubmit={(event) => props.signUpSubmitHandler(event)}>
                
                <div>
                    <label>Name:</label>
                    <input type="text"/>
                </div>

                <div>
                    <label>UserName:</label>
                    <input type="text"/>
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password"/>
                </div>

                <div>
                    {/* <Redirect to="/" > */}
                        <input type="submit"/>
                    {/* </Redirect> */}
                </div>

            </form>

            <Link to="/lastfm"> Sign In With Last.fm </Link>
              {/* make above the sign in button to last.fm sign in  */}

        </div>
    )
}

export default SignUpForm