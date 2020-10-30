import React, { useState, useEffect } from 'react'
import UserProfile from '../Containers/UserProfile.js'
import { NavLink } from 'react-router-dom'

function SignInForm(props) {

    return(
        <div>
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

                <div>
                    <NavLink to="/signup" >Sign Up</NavLink>
                </div>

            </form>

        </div>
    )

}

export default SignInForm
