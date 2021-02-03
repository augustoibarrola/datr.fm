import React, { useState, useEffect } from 'react'
import { Accordion, Card, Form, FormControl, InputGroup, ListGroup, Button } from 'react-bootstrap'

const UserFavoriteAlbums = ({ user, albums, deleteHandler }) => {
    console.log(albums)


    return(
        <div>
            <Accordion >
                <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={ { textDecoration: 'none' } }>
                    <Form.Control type="text" placeholder={`${user.name}'s Favorite Albums`} readOnly style={ { width: '280px' } }  />                
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{ maxHeight: '185px', overflow: 'auto' }}>
    
                        <ListGroup variant="flush">
                            {user.albums.map(album => <ListGroup.Item style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}> <div> <strong> {album.name} </strong> by <em> {album.artist_name} </em> </div> <button id={album.id} onClick={(event) => deleteHandler(event, album.id)}> x </button></ListGroup.Item>)}
                        </ListGroup>

                    <Form.Text id="passwordHelpBlock" muted>
                        {user.username}'s favorite albums
                    </Form.Text>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default UserFavoriteAlbums