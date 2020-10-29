import React from 'react'

function Signup() {
    return(  
        <div> 
            <h1>Sign Up</h1>
            <form>
                
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
                    <input type="text" />
                </div>


                <div>
                    <label>Password:</label>
                    <input type="password"/>
                </div>

            </form>
        </div>
    )
}

export default Signup