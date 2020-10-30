import React from 'react'


const UserNavBar = (props) => {
    return(
        <div>
            <h2> Welcome {props.user.name}</h2>
            <p>(UserNavBar Component)</p>
        </div>

    )
}

export default UserNavBar
// imported in ../App.js