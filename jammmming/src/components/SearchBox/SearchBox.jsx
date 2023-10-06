import {useState, useEffect} from "react";
import "./SearchBox.css";

function SearchBox({searchString, setSearchString}) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id="search-box">
            <form  onSubmit={handleSubmit}>
                <label htmlFor="search-box"><h2>Search Spotify</h2></label>
                <input value={searchString} onChange={(e) => setSearchString(e.target.value)} type="text" id="search-box" name="search-box" />
                <input type="submit" value="Search Spotify" />
            </form>
        </div>
    )
}

export default SearchBox;