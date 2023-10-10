import {useState, useEffect} from "react";
import PropTypes from "prop-types";``
import Track from "../Track/Track";
import "./SearchResults.css";

function SearchResults({setSearchResults, searchResults, trackList, setTrackList}) {

    const [render, setRender] = useState(<div></div>);

    useEffect(() => {
        if (searchResults.length > 0) {
            const handleClick = (e) => {
                const trackContainer = e.target.parentElement.children[0];
                const trackName = trackContainer.getElementsByClassName("track-name")[0].innerHTML;
                const trackArtist = trackContainer.getElementsByClassName("artist-name")[0].innerHTML;
                const trackAlbum = trackContainer.getElementsByClassName("album-name")[0].innerHTML;
                const trackId = trackContainer.children[0].id;
                const trackCheck = trackList.find(track => track.id === trackId);
                if (trackCheck) {
                    alert("Track already exists in playlist.")
                } else {
                    const newTrackList = [...trackList, {name: trackName, artist: trackArtist, album: trackAlbum, id: trackId}]
                    setTrackList(() => newTrackList);      
                    const newSearchResults = searchResults.filter(track => track.uri !== trackId);
                    setSearchResults(() => newSearchResults)           
                }
            }
            setRender(
                searchResults.map((song, x) => {
                    return (
                        <div key={x}>
                            <div className="search-result">
                                <div>
                                    <Track id={song.uri} name={song.name} artist={song.artists[0].name} album={song.album.name} />
                                </div>
                                <button className="add-btn" onClick={handleClick}>+</button>
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
            <div id="populated-results">
                {render}
            </div>
        </div>
    )
}

SearchResults.propTypes = {
    searchResults: PropTypes.array,
    trackList: PropTypes.array,
    setTrackList: PropTypes.func,
    setSearchResults: PropTypes.func
}

export default SearchResults;