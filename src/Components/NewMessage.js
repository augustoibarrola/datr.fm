import React, { useState, useEffect } from 'react'

function NewMessage() {

    const [msgBody, setMsgBody] = useState('')
    
    return(
        <div> 
            <h2>New Form</h2>
            <form>
                <div>
                    <label >From: </label>
                    <input type="text" />
                </div>

                <div>
                    <label >To: </label>
                    <input type="text" />
                </div>

                <div>
                    <label >Message: </label>
                    <input type="text" />
                </div>

            </form>
        </div>
    )
}

export default NewMessage



