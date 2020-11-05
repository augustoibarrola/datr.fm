import React, { useState, useEffect } from 'react'
import { Card, Col, Image } from 'react-bootstrap'

const UserProfileComponent = (props) => {

    const [likes, setLikes] = useState([])


      const testMethod = (res) => {
        let token = localStorage.getItem("token")
        fetch('http://localhost:3000/total_unique_likers/', {
            method: 'GET', 
            headers: {
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
                "accepts": "application/json"
            }
        })
        .then(response => response.json())
        .then(res => console.log("RESPONSE =>>", res))
      }

      const cardStyling = {
        border: 'non'
      }
      
    return(
        <div className="user-card"> 
            {/* <h3>{props.user.name}</h3>
            <h4>{props.user.username}</h4> */}
            <Card style={cardStyling}>
                    <Col xs={6} md={4}>
                      <Image className="user-profile-component-circled-image" src={props.user.image_url} roundedCircle />
                    </Col>
                    {/* <Card.Img variant="top" src={props.user.image_url} /> */}
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
        </div>
    )
}

export default UserProfileComponent
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)