import React, {useEffect} from "react";
import Track from "../Track/Track.jsx";


function TrackList(props) {

    const {trackList, setTrackList} = props;

    const handleClick = (e) => {
        const removeId = e.target.parentElement.children[0].id;
        const newTrackList = trackList.filter(item => item.id !== removeId)
        setTrackList(newTrackList)
    }

    return (
        <div id="track-list">            
            {trackList.map((song, x) => {
                return (
                <div key={x}>
                    <Track id={song.id} name={song.name} artist={song.artist} album={song.album} />
                    <button onClick={handleClick}>Remove</button>
                </div>
                )
            })}
        </div>
    )
}

export default TrackList;