import React from 'react'
import { Card } from 'react-bootstrap'

const UserProfileComponent = (props) => {
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
                    </Card.Footer>
                </Card>
        </div>
    )
}

export default UserProfileComponent
// imported in ../Containers/UsersIndex.js


// this component should show brief previews of all users (think user cards)