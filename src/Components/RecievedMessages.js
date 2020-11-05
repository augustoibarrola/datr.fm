import React, { useState, useEffect } from 'react'
import { Row, Tab, Col, ListGroup  } from 'react-bootstrap'


const RecievedMessages = (props) => {
    console.log("PROPS AT RECIEVES MESSAGES => ", props.user.messages_recieved)

    const [ userMessages, setUserMessages ] = useState(props.presentUserSentMessages)

    return(
      <div>

             <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                
                    <Col sm={4}>
                    
                    <ListGroup>
                        {props.user.messages_recieved ? props.user.messages_recieved.map(message =>  <ListGroup.Item action href={`#${message.id}`}>{message.sender_id}</ListGroup.Item>) : null }
                    </ListGroup>
                    
                    </Col>
                    
                    <Col sm={8}>
                    
                    <Tab.Content>
                        {props.user.messages_recieved ? props.user.messages_recieved.map(message =>  <Tab.Pane eventKey={`#${message.id}`}> {message.message_body} </Tab.Pane>) : null}
                    </Tab.Content>
                
                    </Col>
                    
                </Row>
                </Tab.Container> 
        </div>
    )


}

export default RecievedMessages