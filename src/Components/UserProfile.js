import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Image, Card, Button, Modal, Form } from 'react-bootstrap'
import Messages from '../Containers/Messages.js'

import UserNavBar from './UserNavBar.js'
import UsersIndex from '../Containers/UsersIndex.js'
import PresentUserProfileComponent from './PresentUserProfileComponent.js'
import { propTypes } from 'react-bootstrap/esm/Image'




const UserProfile = (props) => {
    console.log("USER PROPS  AT USER PROFILE ", props)

    const [showModal, setShowModal] = useState(false)
    const [messageBody, setMessageBody] = useState('')

    const handleModalShow = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    const messageBodyHandler = (event) => {
        setMessageBody(event.target.value)
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

          <div className="user-card" style={userCardStyling}> 
            <Image className="user-profile-component-circled-image" style={imageStyle} src={props.user.image_url} roundedCircle />

            <div className="user-card-body" style={userCardBodyStyling}> 
              <Card.Body>
                    <Card.Title> {props.user.username} </Card.Title>
                <button id={props.user.id} onClick={(event) => props.likedButton(event)} className="btn btn-outline-primary" type="submit">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </button>
              </Card.Body>
            </div>

            <div>
                {props.user.description}
            </div>


          </div>
            {/* button above should activate modal  */}
            {/* modal should be preset with presentUser id + profileUser.id */}
            {/* should be hooked up to a messagesubmithandler in APP */}
            

            <Button variant="primary" onClick={handleModalShow}>
                Send Me A Message
              </Button>

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
                    <input type="textarea" value={ messageBody } onChange={ messageBodyHandler } style={ { width: '100%', height: '235px', paddingBottom: '185px', paddingLeft: '10px', border: 'gray' } } />
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
    )
}

export default UserProfile
// imported in ../App.js

// <Switch>
// <Route path="/messages" render={() => < Messages /> }/>
// {/* <Route path="/signup" render={() => < SignUpForm submitHandler={signUpSubmitHandler} /> } /> */}

// <Route exact path="/users" render={() => < UsersIndex user={user.user} users={user.users} likedButton={user.likedButton}/> }/>

// <Route path="/users/:id" render={(routerProps) => < UserProfileComponent {...routerProps} users={user.users}/> }/>
// </Switch>