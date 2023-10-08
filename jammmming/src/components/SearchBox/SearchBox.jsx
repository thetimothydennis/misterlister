import PropTypes from "prop-types";``
import "./SearchBox.css";

function SearchBox({handleSearch, searchString, setSearchString}) {

    return (
        <div id="search-box">
            <form  onSubmit={handleSearch}>
                <label htmlFor="search-box"><h2>Search Spotify</h2></label>
                <input value={searchString} onChange={(e) => setSearchString(e.target.value)} type="text" id="search-box" name="search-box" />
                <input type="submit" value="Search Spotify" />
            </form>
        </div>
    )
}

SearchBox.propTypes = {
    handleSearch: PropTypes.func,
    searchString: PropTypes.string,
    setSearchString: PropTypes.func
}

export default SearchBox;