import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const UserProfileWidget = (props) => {

    const [likes, setLikes] = useState([])


      // const testMethod = (res) => {
      //   let token = localStorage.getItem("token")
      //   fetch('http://localhost:3000/total_unique_likers/', {
      //       method: 'GET', 
      //       headers: {
      //           'Authorization': `Bearer ${token}`,
      //           "content-type": "application/json",
      //           "accepts": "application/json"
      //       }
      //   })
      //   .then(response => response.json())
      //   .then(res => console.log("RESPONSE =>>", res))
      // }
      
    return(
        <div className="user-card"> 
            {/* <h3>{props.user.name}</h3>
            <h4>{props.user.username}</h4> */}
            <Card>
                    <Card.Img variant="top" src={props.user.image_url} />
                    <Card.Body>
                    <Link to={`/users/${props.user.id}`} ><Card.Title>{props.user.username}</Card.Title></Link>
                    </Card.Body>
                    <Card.Footer>
                    {/* <button id={props.user.id} onClick={(event) => props.likedButton(event)}>Like</button> */}
                    </Card.Footer>
                </Card>
        </div>
    )
}

export default UserProfileWidget
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)