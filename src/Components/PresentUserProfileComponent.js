import React, { useState, useEffect } from 'react'
import { Nav, Card, CardDeck, Col, Image, Button, Modal, Accordion, Form, FormControl, InputGroup, ListGroup, Popover, Tooltip, OverlayTrigger }  from 'react-bootstrap'
import { Label } from 'semantic-ui-react'
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import TopArtistWidget from './WeeklyAlbumsWidget'
import Lastfm from './Lastfm.js'

const PresentUserProfileComponent = (props) => {
  console.log("props at presentUserprofilecomponent", props)
  
      const { Header, Footer, Sider, Content } = Layout;
      const [showModal, setShowModal] = useState(false)
      const [showLastfmData, setShowLastfmData] = useState(false)
      const [lastfmUsername, setLastfmUsername] = useState('')
      
      const [userDescription, setUserDescription] = useState(props.user.description)
      const [userName, setUserName] = useState(props.user.name)
      const [userUsername, setUserUsername] = useState(props.user.username)
      const [userProfileUrl, setUserProfileUrl] = useState(props.user.image_url)
      const [userEmail, setUserEmail] = useState(props.user.email)
      
      const handleModalShow = () => {
        setShowModal(true)
      }

      const handleModalClose = () => {
        setShowModal(false)
      }

      const descriptionChangeHandler = (event) => {
        setUserDescription(event.target.value)
      }

      const nameChangeHandler = (event) => {
        setUserName(event.target.value)
      }

      const usernameChangeHandler = (event) => {
        setUserUsername(event.target.value)
      }

      const emailChangeHandler = (event) => {
        setUserEmail(event.target.value)
      }

      const userProfileUrlHandler = (event) => {
        setUserProfileUrl(event.target.value) 
      }

      const lastfmUsernameSearch = (event) => {
        setLastfmUsername(event.target.value)
      }

      const cardStyling = {
        border: 'none'
      }

      const imageStyle = {
        maxWidth: '500px'
      }


      const userCardStyling = {
        maxWidth: 'max-content',
        paddingBottom: '20px',
        display: 'flex', 
        flexDirection: 'row'
      }

      const userCardBodyStyling = {
        
      }

    return(
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


            
            <div>{/* button that adds description with modal */}
              <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton> 
                  <Modal.Title> Tell us about yourself </Modal.Title>
                </Modal.Header>
                  <Form onSubmit={ (event) => {
                    props.userUpdateHandler(event, userDescription, userName, userUsername, userEmail, userProfileUrl) 
                    handleModalClose()
                  }} style ={ { width: '100%' } }>
                    <Modal.Body>
                      <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>  
                        <FormControl id="inlineFormInputGroup" placeholder={userName} value={userName} onChange={ nameChangeHandler }/>     
                      </Form.Group>

                      <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>  
                        <FormControl id="inlineFormInputGroup" placeholder={userUsername} value={userUsername} onChange={ usernameChangeHandler }/>     
                      </Form.Group>

                      <Form.Group controlId="formGroupProfile Picture Url">
                        <Form.Label>Profile Picture</Form.Label>  
                        <FormControl id="inlineFormInputGroup" placeholder={userProfileUrl} value={userProfileUrl} onChange={ userProfileUrlHandler } />     
                      </Form.Group>

                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder={userEmail} value={userEmail} onChange={ emailChangeHandler } />
                      </Form.Group>
                      <input type="text" style={ { width: '100%', height: '235px', paddingBottom: '185px', paddingLeft: '10px', flexWrap: 'wrap' } } placeholder={ userDescription } onChange={ descriptionChangeHandler } />
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={ handleModalClose }>
                        Close
                      </Button>
                      <Button id={props.user.id} variant="primary" type="submit" >
                        Save Profile
                      </Button>
                    </Modal.Footer>
                  </Form>
              </Modal>
            </div>
          </div>

          <div className="user-edit-controls-div" style={ { padding: '20px' } }>
            <OverlayTrigger 
              key="right"
              placement="right"
              overlay={
                <Tooltip id='popover-positioned-right'>
                  <strong>Edit Your Profile</strong>
                </Tooltip>
              }
            >
              <Button variant="primary" onClick={handleModalShow} style={ { width: 'min-content', height: 'min-content'} }>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                  </svg>
              </Button>
            </OverlayTrigger>
          </div>


          {/* Last.fm weekly albums fetch request activated by button inside of accordion component */}
          <Accordion >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={ { textDecoration: 'none' } }>
                <Form.Control type="text" placeholder="Last.fm Scrobbles" readOnly />                
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
        </div>

    
        <div>
          { showLastfmData ? <Lastfm user={props.user}lastfmData={props.lastfmData}/> : null}
        </div>

    


      </div>
    )
}

export default PresentUserProfileComponent
// imported in ../Containers/UsersIndex.js