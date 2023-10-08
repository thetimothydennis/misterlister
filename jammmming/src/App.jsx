import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import url from './functions/apiAuthorize';
import axios from "axios";
import getHashParams from './functions/getHashParams';
import "./App.css";


// Spotify song uri
// https://open.spotify.com/track/5qm0KiVKMXW1kq6VrnIhz5?si=a8131151e89d400e

// const trackArr = [
//   {
//     name: "Forever Young",
//     artist: "Bob Dylan",
//     album: "Planet Waves",
//     id: "0"
//   },
//   {
//     name: "Pocahontas",
//     artist: "Neil Young",
//     album: "Rust Never Sleeps",
//     id: "1"
//   },
//   {
//     name  : "Willin'",
//     artist: "Linda Ronstadt",
//     album: "Heart Like a Wheel",
//     id: "2"
//   }
// ]

function App() {

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [trackList, setTrackList] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [tokenType, setTokenType] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState("track");

  useEffect(() => {
    const params = getHashParams(window.location.hash);
    setAccessToken(params["#access_token"]);
    setTokenType(params["token_type"]);
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();
    const reqHeaders = {
      "Authorization": `${tokenType} ${accessToken}`
    };
    const config = {
      headers: reqHeaders
    };
    const baseAPIurl = "https://api.spotify.com/v1/search?q=";
    const response = await axios.get(`${baseAPIurl}${searchString}&type=${searchType}`, config);
    setSearchResults(response.data.tracks.items);
  }

  return (
    <div>
      <h1>Jammming</h1>
      <div id="main-container">
        <div id="left-container">
          <SearchBox handleSearch={handleSearch} searchString={searchString} setSearchString={setSearchString} />
          <SearchResults searchResults={searchResults} trackList={trackList} setTrackList={setTrackList} />
        </div>
        <div id="right-container">
          <Playlist trackList={trackList} setTrackList={setTrackList} playlistName={playlistName} setPlaylistName={setPlaylistName} />
        </div>
      </div>
    </div>
  )
}

export default App;
