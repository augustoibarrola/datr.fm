import React, { useState, useEffect } from 'react'
import { Row, Tab, Col, ListGroup  } from 'react-bootstrap'


const SentMessages = (props) => {

    // const [ userMessages, setUserMessages ] = useState(props.presentUserSentMessages)
    let recipients = 
    console.log("USER_AT_SENT_MSGS => ", props.user)
    console.log("USERS_AT_SENT_MSGS => ", props.users)


    return(
        <div>

             <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                
                    <Col sm={4}>
                    
                    <ListGroup>
                        { props.user.messages_sent ? props.user.messages_sent.map(message => <ListGroup.Item action href={`#${message.id}`}> {  message.recipient_id } </ListGroup.Item>) : null }
                    </ListGroup >
                    
                    </Col>
                    
                    <Col sm={8}>
                    
                    <Tab.Content>
                        {props.user.messages_sent ? props.user.messages_sent.map(message =>  <Tab.Pane eventKey={`#${message.id}`}> {message.message_body} </Tab.Pane>) : null}
                    </Tab.Content>
                
                    </Col>
                    
                </Row>
                </Tab.Container> 
        </div>
    )
}

export default SentMessages