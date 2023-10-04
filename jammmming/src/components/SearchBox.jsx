import React, {useState, useEffect} from "react";

function SearchBox({searchString, setSearchString}) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id="searchBox">
            <form  onSubmit={handleSubmit}>
                <label htmlFor="search-box">Search Spotify for tracks</label>
                <input value={searchString} onChange={(e) => setSearchString(e.target.value)} type="text" id="search-box" name="search-box" />
                <input type="submit" value="Search Spotify" />
            </form>
        </div>
    )
}

export default SearchBox;