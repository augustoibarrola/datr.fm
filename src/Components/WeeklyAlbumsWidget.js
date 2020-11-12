import React, { useEffect, useState } from 'react'
import { Card, CardDeck, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WeeklyAlbumsWidget = ( props ) => {
    console.log("props at album widget", props.album)

    const [album, setAlbum] = useState('')

    useEffect(() => {
        setAlbum(props.album)
    }, [])

    
    const artistCardStyling = {
        padding: '15px',
        paddingBttom: '1000px'
    }


    return(
        <div styling={artistCardStyling}> 
                <form onSubmit={ event => props.musicMessageToggle( event, album ) }>
                    <ListGroup.Item as="button" type="submit" style={{ width: '100%' }} >
                        <strong> {props.album.name}  </strong> by <em>{props.album.artist["#text"]}</em>
                    </ListGroup.Item>
                </form>
                
         </div>
    )
}

export default WeeklyAlbumsWidget 