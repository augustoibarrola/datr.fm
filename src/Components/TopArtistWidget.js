import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopArtistWidget = ( props ) => {
    console.log(props) //=>> an individual album with .artist(object, .mbid, ["#text"]), .name, .playcount, .url, 
    
    const artistCardStyling = {
        padding: '15px',
    }
    return(
    // <h1>hello </h1>
        <div styling={artistCardStyling}> 
             {/* <h3>{props.user.name}</h3>
             <h4>{props.user.username}</h4> */}
             <Card styling={artistCardStyling}>
                     <Card.Body>
                     <Card.Title> <a href={props.album.url}> {props.album.name} </a> </Card.Title>
                     <Card.Text>
                        by {props.album.artist["#text"]}
                     </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small className="text-muted"> {props.album.playcount} plays </small>
                     </Card.Footer>
                 </Card>
         </div>
    )
}

export default TopArtistWidget 