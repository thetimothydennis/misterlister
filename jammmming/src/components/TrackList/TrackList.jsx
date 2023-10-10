import PropTypes from "prop-types";``
import Track from "../Track/Track.jsx";
import "./TrackList.css";

function TrackList({searchResults, setSearchResults, trackList, setTrackList}) {

    const handleClick = (e) => {
        const remove = e.target.parentElement.children[0].children[0];
        const removeId = remove.id;
        const newTrackList = trackList.filter(item => item.id !== removeId);
        setTrackList(newTrackList)
    }

    return (
        <div id="track-list">            
            {trackList.map((song, x) => {
                return (
                <div className="playlist-track" key={x}>
                    <div>
                        <Track id={song.id} name={song.name} artist={song.artist} album={song.album} />
                    </div>
                    <button className="remove-btn" onClick={handleClick}>-</button>
                </div>
                )
            })}
        </div>
    )
}

TrackList.propTypes = {
    trackList: PropTypes.array,
    setTrackList: PropTypes.func,
    searchResults: PropTypes.array,
    setSearchResults: PropTypes.func
}

export default TrackList;