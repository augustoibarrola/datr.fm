import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Image, Card, Button, Modal, Form, FormControl, ListGroup, Accordion, InputGroup, OverlayTrigger ,Tooltip } from 'react-bootstrap'
import Messages from '../Containers/Messages.js'
import Lastfm from './Lastfm.js'
import UserNavBar from './UserNavBar.js'
import UsersIndex from '../Containers/UsersIndex.js'
import PresentUserProfileComponent from './PresentUserProfileComponent.js'
import { propTypes } from 'react-bootstrap/esm/Image'




const UserProfile = (props) => {
    console.log("USER PROPS  AT USER PROFILE ", props)

    const [showModal, setShowModal] = useState(false)
    const [messageBody, setMessageBody] = useState('')

    const [showLastfmData, setShowLastfmData] = useState(false)
    const [lastfmUsername, setLastfmUsername] = useState('')



    const handleModalShow = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    const messageBodyHandler = (event) => {
        setMessageBody(event.target.value)
    }

    const lastfmUsernameSearch = (event) => {
      setLastfmUsername(event.target.value)
    }

    const userCardStyling = {
        maxWidth: '300px',
        paddingBottom: '20px',
        display: 'flex', 
        flexDirection: 'row'
      }

      const imageStyle = {
        maxWidth: '500px'
      }

      const userCardBodyStyling = {
        
    }


    return(
        <div>

          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

            <div className="user-div" style={{maxWidth: '880px'}}>

              <div className="user-usernametitle-div" style={ { display: 'flex', flexDirection: 'row' , paddingBottom: '30px'} }>
                <h1 style={ {  paddingRight: '15px' } }> {props.user.username} </h1> 
              </div>

              <div className="user-card" style={userCardStyling}> 
                <Image className="user-profile-component-circled-image" style={imageStyle} src={props.user.image_url} roundedCircle />

                <div className="user-card-body" style={{ width: 'maxContent', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', maxWidth: '630px' } }> 

                  <div className="user-userdescription-div" style={ { display: 'flex', flexDirection: 'row' , padding: '20px'} }>
                    <ListGroup variant="flush">
                      <ListGroup.Item style={ { background: '#fcd7d4' } } > <h3> Description </h3> </ListGroup.Item>
                      <ListGroup.Item style={ { background: '#fcd7d4' } } > <em> {props.user.description} </em> </ListGroup.Item>
                    </ListGroup>
                  </div>


                </div>
              </div>

              
            </div>

            <div>
              { showLastfmData ? <Lastfm user={props.user}lastfmData={props.lastfmData}/> : null}
            </div>

          </div>

          <div className="send-message-div" style={ { padding: '20px' } }>
            <OverlayTrigger 
              key="right"
              placement="right"
              overlay={
                <Tooltip id='popover-positioned-right'>
                  <strong>Say Hey!</strong>
                </Tooltip>
              }
            >

              <Button variant="primary" onClick={handleModalShow} style={ { width: 'max-content', height: 'min-content'} } >
                Send Me A Message
              </Button>
            </OverlayTrigger>
          </div>

          <Accordion style={{maxWidth: '880px'}}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={ { textDecoration: 'none' } }>
                <Form.Control type="text" placeholder="Last.fm Scrobbles" readOnly style={ { width: '100%' } } />                
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <form onSubmit={ (event) => {
                    props.lastfmHandler(event)
                    setLastfmUsername('')
                    setShowLastfmData(true)
                  } } >
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Append>
                        <Button variant="outline-danger" type="submit" > Submit </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </form> 
                  <Form.Text id="passwordHelpBlock" muted>
                    Enter {props.user.username}'s Last.fm Username to recieve their top albums this week
                  </Form.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>



          <div className="modal-div">


              <Modal show={showModal} onHide={handleModalClose}>

                <Modal.Header closeButton> 
                  <Modal.Title> New Message </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form.Label >From:  </Form.Label>
                  <Form.Control type="text" placeholder={`${props.presentUser.username} (Me)`} disabled />
                  <Form.Label >To:  </Form.Label>
                  <Form.Control type="text" placeholder={props.user.username} disabled />
                  <div className="text-input-div" style={ { paddingTop: 'inherit' } }>
                    <input type="textarea" value={ messageBody } onChange={ messageBodyHandler } style={ { width: '100%', height: '235px', paddingBottom: '185px', paddingLeft: '10px' } } />
                  </div>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={ handleModalClose }>
                    Close
                  </Button>
                  <Button id={props.user.id} variant="primary" onClick={ (event) => {
                    props.directMessageHandler(event, messageBody)
                    setMessageBody('')
                    handleModalClose()
                  } } >
                    Send Message
                  </Button>
                </Modal.Footer>
              </Modal>
          </div>



        </div>
    )
}

export default UserProfile
