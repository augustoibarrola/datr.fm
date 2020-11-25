import React, { useState, useEffect } from 'react'
import { Accordion, Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap'

const UserFavoriteAlbums = ({ user, albums }) => {
    console.log(user)
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
                    <Card.Body>
                    

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