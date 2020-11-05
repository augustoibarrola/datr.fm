import React, { useState, useEffect } from 'react'

function NewMessage(props) {
    // console.log("NEWMESSAGE_PROPS =>", props)
    const messagesAPI_URL = 'http://localhost:3000/messages/'

    const [sender, setSender] = useState(props.user)
    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState('')
  
    const usersArray = props.users.filter( user => user.id !== props.user.id)


    return(
        <div> 
            <h2>New Message</h2> 
            <form onSubmit={(event) => {
                props.messagesSubmitHandler(event, recipient)
                setRecipient('')
                setMsgBody('')
                }}>
                <div>
                    <label >From: </label>
                    <input type="text" value={sender.name} onChange={(event) => setSender(event.target.value)} disabled />
                </div>

                <div>
                    <label >To: </label>
                    <select value={recipient} onChange={(event) => setRecipient(event.target.value)}> 
                        {usersArray.map(user => <option value={user.name} id={user.id}> {user.name} </option>)} */}
                    {/*  */}
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



