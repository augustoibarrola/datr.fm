import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const UserProfileWidget = (props) => {
console.log("PROPS AT WIDGET => ", props)
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

      const userCardStyling = {
        maxWidth: '300px',
        paddingBottom: '20px',
        display: 'flex', 
        flexDirection: 'row'
      }
      
    return(
        <div className="user-card" style={userCardStyling}> 
            <Card>
                    <Card.Img variant="top" src={props.user.image_url} />
                    <Card.Body>
                    <Link to={`/users/${props.user.id}`} ><Card.Title>{props.user.username}</Card.Title></Link>
                    </Card.Body>
                    <Card.Footer>
                    {/* <button id={props.user.id} onClick={(event) => props.likedButton(event)}>Like</button> */}
                    {/* place send message button somwhere here in footer */}
                    {/* <button id={ props.user.id } onClick={ (event) => props.likedButton(event) } > Like This User </button> */}
                    <button id={props.user.id} onClick={(event) => props.likedButton(event)} className="btn btn-outline-primary" type="submit">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                    {/* button sends POST to hearts and button changes  */}
                    {/* submithandler should be conditioal – if the relationship between the two already exists, delete the heart  */}
                    </Card.Footer>
                </Card>
        </div>
    )
}

export default UserProfileWidget
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)