import React, { useState, useEffect } from 'react'
import { Nav, Card, CardDeck, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TopArtistWidget from './TopArtistWidget'

const UserProfileComponent = (props) => {
console.log(props)
    // const [lovedTracks, setlovedTracks] = useState(props.lastfmData.lovedtracks.track)
// console.log("lovedTracks => ", lovedTracks)

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

      const imageStyle = {
        maxWidth: '500px'
      }

      const topArtistStyling = {
        border: '10px',
        color: 'red'
      }

    return(
        <div>
          <div className="user-card"> 

              <Card style={cardStyling}>
                      <Col xs={6} md={4}>
                        <Image className="user-profile-component-circled-image" style={imageStyle} src={props.user.image_url} roundedCircle />
                      </Col>
                      <Card.Body>
                      <Card.Title>{props.user.username}</Card.Title>
                      <Card.Text>
                        {props.user.description}
                      </Card.Text>
                      </Card.Body>
                      <button id={props.user.id} onClick={(event) => props.likedButton(event)}>like me</button>
              </Card>


          </div>
          <div style={topArtistStyling}> 
                <Nav defaultActiveKey="link-2" className="flex-column">
                  {/* <Nav.Link href="/home">Active</Nav.Link> */}
                  <Nav.Link eventKey="top-artists"> Top Artists </Nav.Link>
                    <h2>Top Artists: </h2>
                      <CardDeck>
                        {/* {props.lastfmData.lovedtracks.track.map( track => <TopArtistWidget track={track} /> ) } */}
                      </CardDeck>
                  {/* <Nav.Link eventKey="link-2">Link</Nav.Link> */}
                  {/* <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link> */}
                </Nav>
          </div>          
        </div>
    )
}

export default UserProfileComponent
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)