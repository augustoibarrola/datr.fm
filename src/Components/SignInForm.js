import React from 'react'

function Signin() {

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event.target)
    }
    return(
        <div>
            <h1>hello</h1>
            <h2>Sign in Please</h2>

            <form onSubmit={submitHandler}>

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

export default Signin
