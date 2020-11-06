import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

const TopArtistWidget = ( props ) => {
    console.log(props.artist.image[1]["#text"])
    return(
    // <h1>hello </h1>
        <div className="user-card"> 
             {/* <h3>{props.user.name}</h3>
             <h4>{props.user.username}</h4> */}
             <Card>
                     <Card.Img variant="top" src={props.artist.image[2]["#text"]} />
                     <Card.Body>
                     <Card.Title>{props.artist.name}</Card.Title>
                     <Card.Text>
                       {/* {props.user.description} */}
                     </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                     <small className="text-muted"> {props.artist.playcount} plays </small>
                     </Card.Footer>
                 </Card>
         </div>
    )
}

export default TopArtistWidget 