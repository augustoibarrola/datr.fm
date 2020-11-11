import React, { useState, useEffect } from 'react'
import { CardDeck, ListGroup } from 'react-bootstrap'
import WeeklyAlbumsWidget from './WeeklyAlbumsWidget.js'

const Lastfm = (props) => {

    const weeklyAlbumsDiv = {
        border: '10px',
        display: 'flex',
      }

    return(
        <div style={ { paddingTop: '20px' } }>
            <h2>Weekly Albums: </h2>
            <div style={{border: '10px', display: 'flex', flexWrap: 'wrap'}}> 
                {/* <CardDeck>
                { props.lastfmData ? props.lastfmData.weeklyalbumchart.album.map( album => <WeeklyAlbumsWidget album={album} /> ) : null }
                </CardDeck> */}

                <ListGroup >
                { props.lastfmData ? props.lastfmData.weeklyalbumchart.album.map( album => <WeeklyAlbumsWidget album={album} /> ) : null }
                </ListGroup>
            </div>
        </div>

    )
}

export default Lastfm