import React from 'react'

function NewMessage() {
    return(
        <div> 
            <h2>New Form</h2>
            <form>
                <div>
                    <label >From: </label>
                    <input />
                </div>

                <div>
                    <label >To: </label>
                    <input />
                </div>

                <div>
                    <label >Message: </label>
                    <input />
                </div>

            </form>
        </div>
    )
}

export default NewMessage



