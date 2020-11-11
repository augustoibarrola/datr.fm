import React from 'react'
import { Card, CardDeck, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WeeklyAlbumsWidget = ( props ) => {
    console.log(props) //=>> an individual album with .artist(object, .mbid, ["#text"]), .name, .playcount, .url, 
    
    const artistCardStyling = {
        padding: '15px',
        paddingBttom: '1000px'
    }
    return(
    // <h1>hello </h1>
        <div styling={artistCardStyling}> 
             {/* <Card styling={artistCardStyling}>
                     <Card.Body>
                     <Card.Title> <a href={props.album.url}> {props.album.name} </a> </Card.Title>
                     <Card.Text>
                        by {props.album.artist["#text"]}
                     </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small className="text-muted"> {props.album.playcount} plays </small>
                     </Card.Footer>
                 </Card> */}

                 <ListGroup.Item action href={props.album.url} >
                    {props.album.name} by <em>{props.album.artist["#text"]}</em>
                </ListGroup.Item>
                
         </div>
    )
}

export default WeeklyAlbumsWidget 