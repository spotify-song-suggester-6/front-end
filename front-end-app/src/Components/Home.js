import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";



const ScrollDivSongs = styled.div`
width: 98%;
    overflow: auto;
    white-space: nowrap;
    display: flex;
    margin: 0% 1%;
`;

const SongCard = styled.div`
margin: 1%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color: black;
    color: white;
    padding: 2%;
`;

export default function Songs() {
  // data is grabbing the response from the request and then we map through it
  const [data, setData] = useState([]);
  const [songData, setSongData] = useState([]);


  const [query, setQuery] = useState("");
  useEffect(() => {
    //   https://spotify-song-suggester6.herokuapp.com/api/users/:id/favorites
    // https://spotify-song-suggester6.herokuapp.com/api/songs
    axios
      .get(`https://spotify-song-suggester6.herokuapp.com/api/users/4/favorites`)
      .then(response => {
        console.log(response);
        const songTitle = response.data.filter(favInfo =>
            favInfo.title.toLowerCase().includes(query.toLowerCase())
        );
     
        setData(songTitle);
      });
      axios
      .get(`https://spotify-song-suggester6.herokuapp.com/api/songs`)
      .then(response => {
        console.log(response);
        const songTitle = response.data.filter(songInfo =>
            songInfo.track_name.toLowerCase().includes(query.toLowerCase())
        );
     
        setSongData(songTitle);
      });
  }, [query]);
  // this is the function watching for what we put in our input
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div >
       <div className="homeDashboard">
           <h2>DashBoard</h2>
           <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="songs"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search by song title"
          autoComplete="off"
          className="homeInput"
        />
      </form>
           </div> 
       <div>
      
      <div>
          <h5>Favorites:</h5>
      </div>
      <ScrollDivSongs>
          {/* Here we are returning songs or favorite list etc.  */}
        {data.map(data => {
            // debugger;
          return (
            <SongCard  key={data._id}>
              <h2>
                {data.title}
              </h2>
                <div>
                    <h4>song info:</h4>
                    <p>Artist: {data.artist}</p>
                    <p>Title: {data.title}</p>
                </div>    
            </SongCard>
          );
        })}
      </ScrollDivSongs>
      <div>
          <h5>Recommended:</h5>
      </div>
      <ScrollDivSongs>
       {/* Here we are returning songs or favorite list etc.  */}
        {songData.map(data => {
            // debugger;
          return (
            <SongCard  key={data._id}>
              <h2>
                {data.track_name}
              </h2>
                <div>
                    <h4>song info:</h4>
                    <p>Artist: {data.artist_name}</p>
                    <p>Title: {data.track_name}</p>
                </div>    
            </SongCard>
          );
        })}
      </ScrollDivSongs>
      </div>
    </div>
  );
}