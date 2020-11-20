import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const MusicMessage = (props) => {
    console.log("PROPS AT MUSIC MESSAGE COMPONENT => ", props)

    const [showMusicMessageModal, setShowMusicMessageModal] = useState(true)
    // const [sender, setSender] = useState(props.user)
    const [recipient, setRecipient] = useState('')
    const [msgBody, setMsgBody] = useState(``)
    const [selectedAlbum, setSelectedAlbum] = useState(props.selectedAlbum)
    
    
    const usersArray = props.users.filter( user => user.id !== props.user.id)
   
    const msgBodyHandler = (event) => {
        setMsgBody(event.target.value)
      }

    return(

        <div className="musicmessage-modal-div">
            <Modal show={showMusicMessageModal} onHide={() => props.handleMusicMessageModalClose() }>

            <Modal.Header closeButton> 
                <Modal.Title> New Message </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label >From:  </Form.Label>
                <Form.Control type="text" placeholder={`${props.userUsername} (Me)`} disabled />

                <Form.Group controlId="exampleForum.SelectCustom">
                    <Form.Label> To </Form.Label> 

                    <Form.Control as="select" value={recipient} onChange={(event) => setRecipient(event.target.value)} custom >
                        {usersArray.map(user => <option value={user.name} id={user.id}> {user.name} </option>)} 
                    </Form.Control>

                </Form.Group>
                <div className="text-input-div" style={ { paddingTop: 'inherit' } }>
                <textarea type="textarea" wrap="hard" value={ `Hey, check out what I've been listening to! ${selectedAlbum.name} by ${selectedAlbum.artist["#text"]} at ${selectedAlbum.url}` } onChange={ event => msgBodyHandler(event) } style={ { width: '100%', height: '235px', paddingBottom: '185px', paddingLeft: '10px' } } />
                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="outline-success" onClick={ (event) => props.favoriteAlbumHandler(event, selectedAlbum) }>
                Favorite Album
                </Button>


                <Button variant="outline-secondary" onClick={ () => props.handleMusicMessageModalClose }>
                Close
                </Button>

                <Button id={props.user.id} variant="outline-primary" onClick={ (event) => {
                props.directMusicMessageHandler(event, msgBody)
                setMsgBody('')
                props.handleMusicMessageModalClose()
                } } >
                Send Message
                </Button>

            </Modal.Footer>
            </Modal> 
        </div>


    )



}

export default MusicMessage