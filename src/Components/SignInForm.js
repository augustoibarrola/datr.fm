import React, { useState, useEffect } from 'react'
import UserProfile from '../Containers/UserProfile.js'

function SignInForm(props) {

    // const [users, setUsers] = useState([])
    // const [currentUser, setCurrentUser] = useState(false)

    // const submitHandler = (event) => {
    //     event.preventDefault()
    //     let username = event.target[0].value
    //     let password = event.target[1].value
    //     let newCurrentUser = users.find(user => user.username === username)
    //     if(newCurrentUser) {
    //         setCurrentUser(newCurrentUser)
    //         props.setUser(newCurrentUser)
    //     }
    // }

    // useEffect(() =>  {
    //     fetch('http://localhost:3000/users/')
    //     .then(response => response.json())
    //     .then(usersJson => setUsers(usersJson))
    // }, [])
    

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

            {/* {currentUser ? < UserProfile user={currentUser}/> : console.log("nope")} */}

        </div>
    )

}

export default SignInForm
