import React, { useState, useEffect } from 'react'
import { Nav, Card, CardDeck, Col, Image, Button, Modal, Accordion, Form, FormControl, InputGroup }  from 'react-bootstrap'
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
        <div className="TEST" style={{maxWidth: '880px'}}>

          <div className="user-card" style={userCardStyling}> 
            <Image className="user-profile-component-circled-image" style={imageStyle} src={props.user.image_url} roundedCircle />

            <div className="user-card-body" style={{ width: 'maxContent', display: 'flex', flexDirection: 'column', alignItems: 'end', maxWidth: '630px' } }> 
              {/* <Card.Body style={ { width: '260px', display: 'flex', justifyContent: "space-evenly" } } >*/}
              <div className="user-usernametitle-div" style={ { display: 'flex', flexDirection: 'row' , padding: '20px'} }>
                <Card.Title style={ { paddingTop: '8px', paddingRight: '15px' } }> {props.user.username} </Card.Title> 
                <button id={props.user.id} onClick={(event) => props.likedButton(event)} className="btn btn-outline-primary" type="submit" style={ { maxHeight: '37px' } }>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </button>
              </div>

              <div className="user-userdescription-div" style={ { display: 'flex', flexDirection: 'row' , padding: '20px'} }>
                <Card.Title style={ { width: '400px', textAlign: 'end', paddingRight: '14px' } }> {props.user.description} </Card.Title>
                <Button variant="primary" onClick={handleModalShow} style={ { width: 'min-content', height: 'min-content'} }>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                  </svg>
                </Button>
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
                  }} style ={ { width: '830px' } }>
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


          {/* Last.fm weekly albums fetch request activated by button inside of accordion component */}
          <Accordion >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Last.fm                
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
                        <Button variant="outline-secondary" type="submit" > Submit </Button>
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
          { showLastfmData ? <Lastfm lastfmData={props.lastfmData}/> : null}
        </div>

      </div>
    )
}

export default PresentUserProfileComponent
// imported in ../Containers/UsersIndex.js
