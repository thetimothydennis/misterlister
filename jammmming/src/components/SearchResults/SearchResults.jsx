import React, {useState, useEffect} from "react";
import Track from "../Track/Track";
import "./SearchResults.css";

function SearchResults({searchResults, trackList, setTrackList}) {

    const [render, setRender] = useState(<div></div>);

    useEffect(() => {
        console.log(searchResults)
        if (searchResults.length > 0) {
            const handleClick = (e) => {
                const trackContainer = e.target.parentElement.children[0];
                const trackName = trackContainer.getElementsByClassName("track-name")[0].innerHTML;
                const trackArtist = trackContainer.getElementsByClassName("artist-name")[0].innerHTML;
                const trackAlbum = trackContainer.getElementsByClassName("album-name")[0].innerHTML;
                const trackId = trackContainer.children[0].id;
                const newTrackList = [...trackList, {name: trackName, artist: trackArtist, album: trackAlbum, id: trackId}]
                setTrackList(() => newTrackList)
            }
            setRender(
                searchResults.map((song, x) => {
                    return (
                        <div key={x}>
                            <div className="search-result">
                                <div>
                                    <Track id={song.id} name={song.name} artist={song.artists[0].name} album={song.album.name} />
                                </div>
                                <button onClick={handleClick}>Add</button>
                            </div>
                        </div>
                    )
                })
            )
        }
    }, [trackList, setTrackList, searchResults])
    
    return (
        <div id="search-results">
            <h2>Results</h2>
            {render}
        </div>
    )
}

export default SearchResults;