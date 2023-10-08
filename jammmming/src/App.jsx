import { useState, useEffect, useCallback } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import axios from "axios";
import getHashParams from './functions/getHashParams';
import "./App.css";

// Spotify song uri
// https://open.spotify.com/track/5qm0KiVKMXW1kq6VrnIhz5?si=a8131151e89d400e

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
  const [nameBody, setNameBody] = useState([]);
  const [trackUris, setTrackUris] = useState([]);
  
  const userIdURI = "https://api.spotify.com/v1/me";

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

  useEffect(() => {
    setNameBody({
      name: playlistName
    })
  }, [playlistName])

  useEffect(() => {
    const trackUriArr = [];
    for (let track of trackList) {
      trackUriArr.push(track.id);
    }
    setTrackUris(trackUriArr);
  }, [trackList])

  
  const handleSearch = async (e) => {
    e.preventDefault();
    const baseAPIurl = "https://api.spotify.com/v1/search?q=";
    const response = await axios.get(`${baseAPIurl}${searchString}&type=${searchType}`, config);
    setSearchResults(response.data.tracks.items);
  }

  const handleSavePlaylist = async (e) => {
    e.preventDefault();
    const getApiUserId = await axios.get(userIdURI, config);
    const apiUserId = getApiUserId.data.id;
    const baseAPIurl = `https://api.spotify.com/v1/users/${apiUserId}/playlists`;
    const savePlaylistName = await axios.post(baseAPIurl, nameBody, config);
    const playlistId = savePlaylistName.data.id;
    const playlistBody = {
      'uris': trackUris
    };
    const addToPlaylistURI = `https://api.spotify.com/v1/users/${apiUserId}/playlists/${playlistId}/tracks`;
    const savePlaylistToSpotify = await axios.post(addToPlaylistURI, playlistBody, config);
    console.log(savePlaylistToSpotify);
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
