import React, { useState, useEffect } from 'react'
import { Row, Tab, Col, ListGroup, Image } from 'react-bootstrap'


const RecievedMessages = (props) => {

    const imageStyle = {
        maxWidth: '50px',
        margin: '5px',
    }

    return(
      <div>

             <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                
                    <Col sm={4}>
                    
                    <ListGroup style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
                        {props.user.messages_recieved ? props.user.messages_recieved.map(message =>  <ListGroup.Item action href={`#${message.id}`}> <Image className="user-profile-component-circled-image" style={imageStyle} src={props.users.find( user => user.id == message.sender_id).image_url} roundedCircle /> { props.users.find( user => user.id == message.sender_id).username } <em> { props.users.find( user => user.id == message.sender_id).name } </em> </ListGroup.Item>).reverse() : null }
                    </ListGroup>
                    
                    </Col>
                    
                    <Col sm={8}>
                    
                    <Tab.Content style={{padding: '45px'}}>
                        {props.user.messages_recieved ? props.user.messages_recieved.map(message =>  <Tab.Pane eventKey={`#${message.id}`}>  {message.message_body} </Tab.Pane>).reverse() : null}
                    </Tab.Content>
                
                    </Col>
                    
                </Row>
                </Tab.Container> 
        </div>
    )


}

export default RecievedMessages