import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import axios from "axios";
import getHashParams from './functions/getHashParams';
import "./App.css";
import getUserId from './functions/apiCreatePlaylist';

// Spotify song uri
// https://open.spotify.com/track/5qm0KiVKMXW1kq6VrnIhz5?si=a8131151e89d400e

const userIdURI = "https://api.spotify.com/v1/me";
const createPlaylistURI = "https://api.spotify.com/v1/users/{user_id}/playlists";
const addToPlaylistURI = "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/";


function App() {

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [trackList, setTrackList] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [tokenType, setTokenType] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState("track");
  const [reqHeaders, setReqHeaders] = useState({});
  const [config, setConfig] = useState({});
  const [userId, setUserId] = useState("");

 

  useEffect(() => {
    const params = getHashParams(window.location.hash);
    setAccessToken(params["#access_token"]);
    setTokenType(params["token_type"]);
  }, [])

  useEffect(() => {
    setReqHeaders({
      "Authorization": `${tokenType} ${accessToken}`
    })
  }, [tokenType, accessToken])

  useEffect(() => {
    setConfig({
      headers: reqHeaders
  })
  }, [reqHeaders])


  const getUserId = async () => {
    const apiUserId = await axios.get(userIdURI, config);
    return apiUserId.data.id;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const baseAPIurl = "https://api.spotify.com/v1/search?q=";
    const response = await axios.get(`${baseAPIurl}${searchString}&type=${searchType}`, config);
    setSearchResults(response.data.tracks.items);
  }

  const handleSavePlaylist = async (e) => {
    e.preventDefault();
    const apiUserId = await getUserId();
    setUserId(apiUserId);

  }

  return (
    <div>
      <h1>Mr. Lister</h1>
      <div id="main-container">
        <div id="left-container">
          <SearchBox handleSearch={handleSearch} searchString={searchString} setSearchString={setSearchString} />
          <SearchResults searchResults={searchResults} trackList={trackList} setTrackList={setTrackList} />
        </div>
        <div id="right-container">
          <Playlist handleSavePlaylist={handleSavePlaylist} trackList={trackList} setTrackList={setTrackList} playlistName={playlistName} setPlaylistName={setPlaylistName} />
        </div>
      </div>
    </div>
  )
}

export default App;
