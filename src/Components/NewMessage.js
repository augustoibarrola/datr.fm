import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap'

function NewMessage(props) {
    // console.log("NEWMESSAGE_PROPS =>", props)
    const messagesAPI_URL = 'http://localhost:3000/messages/'

    const [sender, setSender] = useState(props.user)
    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState('')
  
    const usersArray = props.users.filter( user => user.id !== props.user.id)

    const formContainerStyling = {
        maxWidth: '60%'
    }

    const buttonStyling = {
        marginTop: '15px'
    }


    return(
        <div> 


        <div>

            <Form onSubmit={(event) => {
                props.messagesSubmitHandler(event, recipient)
                setRecipient('')
                setMsgBody('')
                }} styling={formContainerStyling}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label> From </Form.Label>
                    <Form.Control type="email" placeholder={sender.name} readOnly />
                </Form.Group>

                <Form.Group controlId="exampleForum.SelectCustom">
                    <Form.Label> To </Form.Label> 
                    <Form.Control as="select" value={recipient} onChange={(event) => setRecipient(event.target.value)} custom >
                    {usersArray.map(user => <option value={user.name} id={user.id}> {user.name} </option>)} 
                    </Form.Control>
                </Form.Group>

                <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" value={msgBody} onChange={(event) => setMsgBody(event.target.value)}/>
                </InputGroup>


                <Button variant="primary" type="submit" style={buttonStyling}>
                    Send Message
                </Button>
            </Form >
        </div>
        </div>
    )
}

export default NewMessage




{/* <div> 
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
            {usersArray.map(user => <option value={user.name} id={user.id}> {user.name} </option>)} 
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
</div> */}