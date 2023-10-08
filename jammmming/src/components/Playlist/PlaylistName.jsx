import React from "react";

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

export default PlaylistNameBox;