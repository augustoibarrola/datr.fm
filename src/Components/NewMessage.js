import React, { useState, useEffect } from 'react'

function NewMessage(props) {

    const messagesAPI_URL = 'http://localhost:3000/messages/'

    const [sender, setSender] = useState('')
    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

        let from = event.target[0].value
        let to = event.target[1].value
        let body = event.target[2].value

        // fetch(messagesAPI_URL, {
        //     method: 'POST', 
        //     headers: {
        //         "content-type": "application/json",
        //         "accepts": "application/json"
        //     },
        //     body: JSON.stringify({
        //         sender_id: from.id,
        //         recipient_id: to.id,
        //         message_body: body
        //     })
        // })
        //!! need to have a user logged in and a user in the database in order to be able to actually persist this. 
    }

    return(
        <div> 
            <h2>New Message</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label >From: </label>
                    <input type="text" value={props.user.name} onChange={(event) => setSender(event.target.value)} disabled />
                </div>

                <div>
                    <label >To: </label>
                    {/* <input type="text" onChange={(event) => setRecipient(event.target.value)}/> */}
                    {}
                </div>

                <div>
                    <label >Message: </label>
                    <input type="textarea" value={msgBody} onChange={(event) => setMsgBody(event.target.value)}/>
                </div>

                <div>
                    <input type="submit"/>
                </div>

            </form>
        </div>
    )
}

export default NewMessage



