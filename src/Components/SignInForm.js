import React, { useState, useEffect } from 'react'
import UserProfile from '../Containers/UserProfile.js'

function SignInForm(props) {

    return(
        <div>
            <h1>hello</h1>
            <h2>Sign in Please</h2>

            <form onSubmit={(event) => props.submitHandler(event)}>
                <div>
                    <label>UserName:</label>
                    <input />
                </div>


                <div>
                    <label>Password:</label>
                    <input />
                </div>

                <div>
                    <input type="submit"/>
                </div>

            </form>

        </div>
    )

}

export default SignInForm
