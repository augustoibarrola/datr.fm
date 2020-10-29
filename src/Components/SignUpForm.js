import React from 'react'

function Signup() {

    const usersAPI_URL = 'http://localhost:3000/users'

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        let name = event.target[0].value
        let userName = event.target[1].value
        let email = event.target[2].value
        let description = ''
        let password = event.target[3].value

        fetch(usersAPI_URL, {
            method: 'POST', 
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                name: name,
                username: userName,
                email: email,
                description: description,
                password: password
            })
        })
        .then(response => response.json())
        .then(console.log)
    }


    return(  
        <div> 
            <h1>Sign Up</h1>
            <form onSubmit={submitHandler}>
                
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

export default Signup