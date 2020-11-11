import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Figure } from 'react-bootstrap'
import { responsiveArray } from 'antd/lib/_util/responsiveObserve'

const PresentUserProfileWidget = (props) => {
    
      const userCardStyling = {
        maxWidth: '300px',
        paddingBottom: '20px',
        display: 'flex', 
        flexDirection: 'row'
      }
      
    return(
        <div className="user-card" style={userCardStyling}> 
          {/* <Card.Img variant="top" src={props.user.image_url} /> */}
          <Figure>
            <Figure.Image style={ { width: '300px', height: 'auto' } } src={props.user.image_url} /> 
            <Figure.Caption>
              {props.user.username}
            </Figure.Caption>
          </Figure>
        </div>
    )
}

export default PresentUserProfileWidget
