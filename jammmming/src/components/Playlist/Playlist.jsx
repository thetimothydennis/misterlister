import {useEffect} from "react";
import PropTypes from "prop-types";``
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";
import PlaylistNameBox from "./PlaylistName";

function Playlist(props) {
    const {
        handleSavePlaylist, 
        setPlaylistName, 
        playlistName, 
        setTrackList,
        trackList
    } = props;

    useEffect(() => {
        let playlistHeader = document.getElementById("playlist-header");
        let playlistNameInput = document.getElementById("playlist-name-input");
        playlistNameInput.style.display = "none";
        playlistHeader.style.display = "block";
    }, [])

    const togglePlaylistHeader = () => {
        let playlistHeader = document.getElementById("playlist-header");
        let playlistNameInput = document.getElementById("playlist-name-input");
        if ((playlistHeader.style.display === "block") && (playlistNameInput.style.display === "none")) {
            playlistHeader.style.display = "none";
            playlistNameInput.style.display = "block";
        } else if ((playlistHeader.style.display === "none") && (playlistNameInput.style.display === "block")) {
            playlistHeader.style.display = "block";
            playlistNameInput.style.display = "none";
        }
    }

    const handleChangeName = (e) => {
        setPlaylistName(e.target.value)
    }

    return (
        <div id="playlist">
            <h2 onClick={togglePlaylistHeader} id="playlist-header">{playlistName}</h2>
            <PlaylistNameBox {...{playlistName, togglePlaylistHeader, handleChangeName}} />
            <button onClick={handleSavePlaylist}>Add to Spotify</button>
            <TrackList {...{setTrackList, trackList}} />
        </div>
    )
}

Playlist.propTypes = {
    handleSavePlaylist: PropTypes.func,
    setPlaylistName: PropTypes.func,
    playlistName: PropTypes.string,
    setTrackList: PropTypes.func,
    trackList: PropTypes.array
}

export default Playlist;