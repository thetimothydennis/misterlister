import { useState } from 'react'
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import PlaylistQueue from './components/PlaylistQueue';

function App() {

  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [playlistQueue, setPlaylistQueue] = useState([]);

  return (
    <>
      <SearchBox searchString={searchString} setSearchString={setSearchString} />
      <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} />
      <PlaylistQueue playlistQueue={playlistQueue} setPlaylistQueue={setPlaylistQueue} />
    </>
  )
}

export default App;
