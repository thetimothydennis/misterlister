import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import axios from "axios";
import getHashParams from './functions/getHashParams';
import "./App.css";

function App() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [trackList, setTrackList] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [tokenType, setTokenType] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
    const response = await axios.get(`${baseAPIurl}${searchString}&type=track`, config);
    setSearchResults(response.data.tracks.items);
  }

  const handleSavePlaylist = async (e) => {
    e.preventDefault();
    const getApiUserId = await axios.get(userIdURI, config);
    const apiUserId = getApiUserId.data.id;
    const baseAPIurl = `https://api.spotify.com/v1/users/${apiUserId}/playlists`;
    const savePlaylistName = await axios.post(baseAPIurl, nameBody, config);
    const playlistId = savePlaylistName.data.id;
    const playlistBody = { 'uris': trackUris };
    const addToPlaylistURI = `https://api.spotify.com/v1/users/${apiUserId}/playlists/${playlistId}/tracks`;
    const savePlaylistToSpotify = await axios.post(addToPlaylistURI, playlistBody, config);
    console.log(savePlaylistToSpotify);
    if (savePlaylistToSpotify.status === 201) {
      alert("Playlist saved!")
    } else if (savePlaylistToSpotify.status >= 400) {
      alert("Error saving playlist.")
    }
  }

  return (
    <div id="root-container">
      <div id="header">
        <h1>Mr. Lister</h1>
      </div>
      <div id="main-container">
        <div id="left-container">
          <SearchBox {...{handleSearch, searchString, setSearchString}} />
          <SearchResults {...{trackUris, searchResults, trackList, setTrackList}} />
        </div>
        <div id="right-container">
          <Playlist {...{handleSavePlaylist, trackList, setTrackList, playlistName, setPlaylistName}} />
        </div>
      </div>
    </div>
  )
}

export default App;
