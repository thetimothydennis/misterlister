import PropTypes from "prop-types";``

function PlaylistNameBox({togglePlaylistHeader, handleChangeName, playlistName}) {

    return (
        <div id="playlist-name-input">
            <div className="playlist-name-ip-flex">
                <input type="text" name="playlist-name" id="playlist-name" onChange={handleChangeName} value={playlistName} />
                <button onClick={togglePlaylistHeader}>Save</button>
            </div>
        </div>
    )
}

PlaylistNameBox.propTypes = {
    togglePlaylistHeader: PropTypes.func,
    handleChangeName: PropTypes.func,
    playlistName: PropTypes.string
}

export default PlaylistNameBox;