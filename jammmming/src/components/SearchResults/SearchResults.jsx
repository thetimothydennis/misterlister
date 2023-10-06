import React, {useEffect} from "react";
import Track from "../Track/Track";
import "./SearchResults.css";

function SearchResults({trackArr, trackList, setTrackList}) {

    const handleClick = (e) => {
        const trackContainer = e.target.parentElement.children[0];
        const trackName = trackContainer.getElementsByClassName("track-name")[0].innerHTML;
        const trackArtist = trackContainer.getElementsByClassName("artist-name")[0].innerHTML;
        const trackAlbum = trackContainer.getElementsByClassName("album-name")[0].innerHTML;
        const trackId = trackContainer.children[0].id;
        const newTrackList = [...trackList, {name: trackName, artist: trackArtist, album: trackAlbum, id: trackId}]
        setTrackList(() => newTrackList)
    }

    
    return (
        <div id="search-results">
            <h2>Results</h2>
            {trackArr.map((song, x) => {
                return (
                    <div key={x}>
                        <div className="search-result">
                            <div>
                                <Track id={song.id} name={song.name} artist={song.artist} album={song.album} />
                            </div>
                            <button onClick={handleClick}>Add</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults;