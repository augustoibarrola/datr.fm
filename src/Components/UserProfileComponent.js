import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

const UserProfileComponent = (props) => {

    const [likes, setLikes] = useState([])


    const likedButton = (event) => {
        console.log(props.presentUser.id)
        console.log("PROPS =>", props.user.id)

        let token = localStorage.getItem("token")

        fetch('http://localhost:3000/hearts', {
          method: 'POST', 
          headers: {
            'Authorization': `Bearer ${token}`,
            "content-type": "application/json",
            "accepts": "application/json"
          }, 
          body: JSON.stringify({
            liker_id: props.presentUser.id,
            liked_id: props.user.id
           })
        })
        .then(response => response.json())
        .then(res => testMethod(res))
      }

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


      
    return(
        <div className="user-card"> 
            {/* <h3>{props.user.name}</h3>
            <h4>{props.user.username}</h4> */}
            <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>{props.user.name}</Card.Title>
                    <Card.Text>
                      {props.user.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <button id={props.user.id} onClick={(event) => likedButton(event)}>Like</button>
                    </Card.Footer>
                </Card>
        </div>
    )
}

export default UserProfileComponent
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)