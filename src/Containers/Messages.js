import React, { useState, useEffect } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import NewMessage from '../Components/NewMessage.js'
import SentMessages from '../Components/SentMessages.js'
import RecievedMessages from '../Components/RecievedMessages.js'


const Messages = (props) => {

    const [key, setKey] = useState('new')

    return(
        <div>

            <div>
                <h2>{props.user.username}'s Messages </h2>
            </div>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="recieved" title="Recieved">
                    <RecievedMessages user={props.user} users={props.users} />
                </Tab>

                <Tab eventKey="sent" title="Sent">
                    <SentMessages user={props.user} users={props.users} />
                </Tab>

                <Tab eventKey="new" title="New" >
                    <NewMessage user={props.user} users={props.users} messagesSubmitHandler={props.messagesSubmitHandler}/>
                </Tab>

            </Tabs>
        </div>
    )
}

export default Messages 