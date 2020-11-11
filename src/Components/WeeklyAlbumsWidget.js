import React from 'react'
import { Card, CardDeck, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WeeklyAlbumsWidget = ( props ) => {
    
    const artistCardStyling = {
        padding: '15px',
        paddingBttom: '1000px'
    }
    return(
        <div styling={artistCardStyling}> 
                 <ListGroup.Item action href={props.album.url} >
                    {props.album.name} by <em>{props.album.artist["#text"]}</em>
                </ListGroup.Item>
                
         </div>
    )
}

export default WeeklyAlbumsWidget 