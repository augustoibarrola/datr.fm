// import React, { useState, useEffect } from 'react'
// import { InputGroup, FormControl, Button } from 'react-bootstrap'


// const SpotifySearch = ({ spotifySearch }) => {

//     const [searchBar, setSearchBar] = useState('')
//     return(
//         <div className="search-bar-div" style={ { width: '50%' } }>
//             <form onSubmit={event => {
//                 spotifySearch(event)
//             }}> 
//                 <InputGroup className="mb-3">
//                     <FormControl type="text" placeholder="search tracks" value={searchBar} onChange={(event) => setSearchBar(event.target.value) } />
//                 </InputGroup>
//                 <InputGroup.Append>
//                     <Button type="submit" >search</Button>
//                 </InputGroup.Append>
//             </form>
//         </div>
//     )
// }


// export default SpotifySearch