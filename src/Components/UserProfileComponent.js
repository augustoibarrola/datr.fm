import React, { useState, useEffect } from 'react'
import { Card, CardDeck, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TopArtistWidget from './TopArtistWidget'

const UserProfileComponent = (props) => {
console.log(props)
    const [topArtists, setTopArtists] = useState(props.lastfmData.topartists.artist)


    useEffect(() => {
        // fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=OtsuguaalorrabI&api_key=${key}&format=json`)
        // .then( response => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        //     throw new Error('error');
        // })
        // .then(data => setLastfmReturnData(data))
        // .catch(() => setLastfmReturnData( { error: 'Fetch request didn\'t work' } ) )
    }, [])


      const cardStyling = {
        border: 'none'
      }

    return(
        <div className="user-card"> 

            <Card style={cardStyling}>
                    <Col xs={6} md={4}>
                      <Image className="user-profile-component-circled-image" src={props.user.image_url} roundedCircle />
                    </Col>
                    <Card.Body>
                    <Card.Title>{props.user.username}</Card.Title>
                    <Card.Text>
                      {props.user.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <button id={props.user.id} onClick={(event) => props.likedButton(event)}>Like</button>
                    </Card.Footer>
                </Card>

              <h2>Top Artists: </h2>
              <CardDeck>
                {topArtists.map( artist => <TopArtistWidget artist={artist} /> ) }
              </CardDeck>
        </div>
    )
}

export default UserProfileComponent
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)