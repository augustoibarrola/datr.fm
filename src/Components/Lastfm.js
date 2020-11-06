import React, { useState, useEffect } from 'react'

const Lastfm = (props) => {

    // const [lastfmReturnData, setLastfmReturnData ] = useState({})
    // const key = process.env.REACT_APP_LASTFM_KEY

    // useEffect(() => {
    //     fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=OtsuguaalorrabI&api_key=${key}&limit=1&nowplaying=true&format=json`)
    //     .then( response => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         throw new Error('error');
    //     })
    //     .then(data => setLastfmReturnData(data))
    //     .catch(() => setLastfmReturnData( { error: 'Fetch request didn\'t work' } ) )
    // }, [])


    return(
        <h1>hello</h1>
    )
}

export default Lastfm