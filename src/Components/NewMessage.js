import React, { useState, useEffect } from 'react'

function NewMessage(props) {

    const messagesAPI_URL = 'http://localhost:3000/messages/'

    const [sender, setSender] = useState('')
    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

        let from = props.user.id
        let to = props.users.find(user => user.name == event.target[1].value)
        let body = event.target[2].value

        fetch(messagesAPI_URL, {
            method: 'POST', 
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                sender_id: from,
                recipient_id: to.id,
                message_body: body
            })
        })
        .then(response => response.json())
        .then(console.log)
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
                    <select value={recipient} onChange={(event) => setRecipient(event.target.value)}>
                        {props.users.map(user => <option value={user.name} id={user.id}> {user.name} </option>)}
                        {/* <option value="option1" >option 1</option>
                        <option value="option 2" >option 2</option> */}
                    </select>
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



