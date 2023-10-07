import { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import "./App.css";

const trackArr = [
  {
    name: "Forever Young",
    artist: "Bob Dylan",
    album: "Planet Waves",
    id: "0"
  },
  {
    name: "Pocahontas",
    artist: "Neil Young",
    album: "Rust Never Sleeps",
    id: "1"
  },
  {
    name  : "Willin'",
    artist: "Linda Ronstadt",
    album: "Heart Like a Wheel",
    id: "2"
  }
]

function App() {

  const [playlistName, setPlaylistName] = useState("");
  const [trackList, setTrackList] = useState([]);

  return (
    <div>
      <h1>Jammming</h1>
      <div id="main-container">
        <div id="left-container">
          <SearchBox />
          <SearchResults trackArr={trackArr} trackList={trackList} setTrackList={setTrackList} />
        </div>
        <div id="right-container">
          <Playlist trackList={trackList} setTrackList={setTrackList} playlistName={playlistName} setPlaylistName={setPlaylistName} />
        </div>
      </div>
    </div>
  )
}

export default App;
