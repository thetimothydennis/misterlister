import axios from "axios";

const usernameURI = "https://api.spotify.com/v1/me";
const createPlaylistURI = "https://api.spotify.com/v1/users/{user_id}/playlists";
const addToPlaylistURI = "https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/";

const getUsername = async () => {
    const username = await axios.get(usernameURI);
    return username;
}

export default getUsername;