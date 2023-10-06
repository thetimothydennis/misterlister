import React, {useEffect} from "react";
import "./Track.css";

function Track(props) {

    const {id, handleClick, name, artist, album} = props;    
    
    return (
        <div id={id} className="track" onClick={handleClick} value={id}>
            <div id={id} className="track-name">
                {name}
            </div>
            <div id={id}>
                <span className="artist-name">{artist}</span> - <span id={id} className="album-name">{album}</span>
            </div>
        </div>
    )
}

export default Track;