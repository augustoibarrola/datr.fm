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

      const weeklyAlbumsDiv = {
        border: '10px',
        // color: 'red'
      }

      const userCardStyling = {
        maxWidth: '300px',
        paddingBottom: '20px',
        display: 'flex', 
        flexDirection: 'row'
      }

      const userCardBodyStyling = {
        
      }

    return(
        <div>

          <div className="user-card" style={userCardStyling}> 
            <Image className="user-profile-component-circled-image" style={imageStyle} src={props.user.image_url} roundedCircle />

            <div className="user-card-body" style={userCardBodyStyling}> 
              <Card.Body>
                <Card.Title> {props.user.username} </Card.Title>
                <button id={props.user.id} onClick={(event) => props.likedButton(event)} className="btn btn-outline-primary" type="submit">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </button>
              </Card.Body>
            </div>

                <Card.Text> {props.user.description} </Card.Text>
                {/* button that adds description */}
          </div>

          <div style={weeklyAlbumsDiv}> 
            <h2>Weekly Albums: </h2>
            <CardDeck>
              {props.lastfmData.weeklyalbumchart.album.map( album => <TopArtistWidget album={album} /> ) }
            </CardDeck>
          </div>     

        </div>
    )
}

export default UserProfileComponent
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)