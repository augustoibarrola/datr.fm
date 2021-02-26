import React, { useState, useEffect } from 'react'
import { Nav, Card, CardDeck, Col, Image, Button, Modal, Accordion, Form, FormControl,
        InputGroup, ListGroup, Popover, Tooltip, OverlayTrigger, Alert }  from 'react-bootstrap'
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import Lastfm from '../Components/Lastfm.js'
import MusicMessage from '../Components/MusicMessage.js'
import UserFavoriteAlbums from '../Components/UserFavoriteAlbums.js'
// import SpotifySearch from '../Components/SpotifySearch.js';

const PresentUserProfile = (props) => {
  
      const [showModal, setShowModal] = useState(false)
      const [showLastfmData, setShowLastfmData] = useState(false)
      const [lastfmUsername, setLastfmUsername] = useState('')
      
      const [userDescription, setUserDescription] = useState(props.user.description)
      const [userName, setUserName] = useState(props.user.name)
      const [userUsername, setUserUsername] = useState(props.user.username)
      const [userProfileUrl, setUserProfileUrl] = useState(props.user.image_url)
      const [userEmail, setUserEmail] = useState(props.user.email)
      
      const [deleteAlert, setDeleteAlert] = useState(false)
      
      const [showMusicMessageModal, setShowMusicMessageModal] = useState(false)
      const [sender, setSender] = useState(props.user)

      const [selectedAlbum, setSelectedAlbum] = useState('')

      const deleteAlertToggle = (event) => {
        event.preventDefault()
        setDeleteAlert(true)
      }
      
      const handleModalShow = () => {
        setShowModal(true)
      }

      const handleModalClose = () => {
        setShowModal(false)
      }

      const handleMusicMessageModalShow = () => {
        setShowMusicMessageModal(true)
      }

      const handleMusicMessageModalClose = () => {
        setShowMusicMessageModal(false)
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

      const musicMessageToggle = (event, album) => {

        setSelectedAlbum(album)

        event.preventDefault()
        handleMusicMessageModalShow()
    }
// 

    return(
      <div>

        <div className="user-container">

          <div className="user-container-title-row">

            <div id="user-username">
              <h1> {props.user.username} </h1>
            </div>

            <div>
              <OverlayTrigger key="right" placement="right" overlay={
                  <Tooltip id='popover-positioned-right'>
                    <strong>Edit Your Profile</strong>
                  </Tooltip>
              }>
                <Button variant="primary" className="standard-button" onClick={handleModalShow}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                    </svg>
                </Button>
              </OverlayTrigger>
            </div>

          </div>

          <div>

          </div>

          <div id="user-profile-img-container">
            <img id="user-profile-img" src={props.user.image_url} />
          </div>

        </div>

            
            <div>
              <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton> 
                  <Modal.Title> Tell us about yourself </Modal.Title>
                </Modal.Header>

                <div className="delete-user-warning-div">
                  {  deleteAlert ?  <Alert variant="danger" > 
                                      <Alert.Heading> You're About To Delete Your Datr.fm Account! </Alert.Heading>
                                      <p> Deleting your user account is permanent, and cannot be undone. Are you sure you wish to continue?</p> 
                                      <Button type="submit" variant="danger" onClick={ event => {
                                        props.deleteHandler(event)
                                        setDeleteAlert(false)
                                        handleModalClose()
                                      } }> Yes, please delete my account. </Button>
                                    </Alert> : null }
                </div>

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
                      <Form.Group>
                        <Button type="submit" variant="outline-danger" onClick={ (event) => deleteAlertToggle(event) } >
                          Delete My Account
                        </Button>
                      </Form.Group>
                      <Button variant="outline-secondary" onClick={ handleModalClose }>
                        Close
                      </Button>
                      <Button id={props.user.id} variant="outline-primary" type="submit" >
                        Save Profile
                      </Button>
                    </Modal.Footer>
                  </Form>
              </Modal>
            </div>


            { showMusicMessageModal ? <MusicMessage user={props.user} userUsername={userUsername} users={props.users} selectedAlbum={selectedAlbum} handleMusicMessageModalClose={handleMusicMessageModalClose} directMusicMessageHandler={props.directMusicMessageHandler} favoriteAlbumHandler={props.favoriteAlbumHandler}/> : null }
 
          {/* </div> */}

      </div>
    )
}

export default PresentUserProfile
// imported in ../Containers/UsersIndex.js
