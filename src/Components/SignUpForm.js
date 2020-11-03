import React from 'react'

function SignUpForm(props) {

    return(  
        <div> 
            <h1>Sign Up</h1>
            <form onSubmit={(event) => props.submitHandler(event)}>
                
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
                    <input type="submit"/>
                </div>

            </form>
        </div>
    )
}

export default SignUpForm