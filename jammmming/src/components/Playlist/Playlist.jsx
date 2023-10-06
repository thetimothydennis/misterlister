import {useEffect} from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function Playlist(props) {
    const {setPlaylistName, playlistName, setTrackList, trackList} = props;
    
    const handleChangeName = (e) => {
        setPlaylistName(e.target.value)
    }

    return (
        <div id="playlist">
            <label htmlFor="playlist-name">Set Playlist Name</label>
            <input name="playlist-name" id="playlist-name" type="text" value={playlistName} onChange={handleChangeName} />
            <h2>{playlistName}</h2>
            <button>Add to Spotify</button>
            <TrackList setTrackList={setTrackList} trackList={trackList} />
        </div>
    )
}

export default Playlist;