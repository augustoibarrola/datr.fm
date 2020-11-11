import React, { useState, useEffect } from 'react'
import { CardDeck } from 'react-bootstrap'
import TopArtistWidget from './TopArtistWidget.js'

const Lastfm = (props) => {

    const weeklyAlbumsDiv = {
        border: '10px',
        display: 'flex',
      }

    return(
        <div>
            <h2>Weekly Albums: </h2>
            <div style={weeklyAlbumsDiv}> 
                <CardDeck>
                { props.lastfmData ? props.lastfmData.weeklyalbumchart.album.map( album => <TopArtistWidget album={album} /> ) : null }
                </CardDeck>
            </div>     
        </div>

    )
}

export default Lastfm