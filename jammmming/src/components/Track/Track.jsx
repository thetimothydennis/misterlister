import PropTypes from "prop-types";``
import "./Track.css";

function Track({id, name, artist, album}) {

    return (
        <div id={id} className="track" value={id}>
            <div id={id} className="track-name">
                {name}
            </div>
            <div id={id}>
                <span className="artist-name">{artist}</span> - <span id={id} className="album-name">{album}</span>
            </div>
        </div>
    )
}

Track.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string
}

export default Track;