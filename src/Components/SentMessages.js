import React, { useState, useEffect } from 'react'
import { Row, Tab, Col, ListGroup  } from 'react-bootstrap'


const SentMessages = (props) => {

    const [ userMessages, setUserMessages ] = useState(props.presentUserSentMessages)
    console.log(props.presentUserSentMessages)



    return(
        <div>

             <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                
                    <Col sm={4}>
                    
                    <ListGroup>
                        {userMessages ? userMessages.map(message =>  <ListGroup.Item action href={`#${message.id}`}>{message.recipient.username}</ListGroup.Item>) : null }
                    </ListGroup>
                    
                    </Col>
                    
                    <Col sm={8}>
                    
                    <Tab.Content>
                        {userMessages ? userMessages.map(message =>  <Tab.Pane eventKey={`#${message.id}`}> {message.message_body} </Tab.Pane>) : null}
                    </Tab.Content>
                
                    </Col>
                    
                </Row>
                </Tab.Container> 
        </div>
    )
}

export default SentMessages