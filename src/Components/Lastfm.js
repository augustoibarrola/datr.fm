import React, { useState, useEffect } from 'react'
import { CardDeck, ListGroup, Form } from 'react-bootstrap'
import WeeklyAlbumsWidget from './WeeklyAlbumsWidget.js'

const Lastfm = (props) => {
    console.log("props at lastfm component", props)
    const weeklyAlbumsDiv = {
        border: '10px',
        display: 'flex',
      }

    return(
        <div style={ { paddingTop: '20px' } }>
            <Form.Control type="text" placeholder="Last.fm Scrobbles" style={ { textAlign: 'start', padding: '30px', width: '100%' } } readOnly />                
            <div style={{border: '10px', display: 'flex', flexWrap: 'wrap'}}> 
                <ListGroup style={ { maxHeight: '680px', overflowY: 'auto' } } >
                    { props.lastfmData ? props.lastfmData.weeklyalbumchart.album.map( album => <WeeklyAlbumsWidget album={album} musicMessageToggle={ props.musicMessageToggle } /> ) : null }
                </ListGroup>
            </div>
        </div>

    )
}

export default Lastfm