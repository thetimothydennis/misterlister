import generateRandomString from "./genRandomStr";

const API_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://localhost:5173/callback";

const state = generateRandomString(16);

let stateKey = "spotify_auth_state";

localStorage.setItem(stateKey, state);
const scope = "user-read-private user-read-email playlist-modify-public playlist-modify private";

let url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += `&client_id=${encodeURIComponent(API_CLIENT_ID)}`;
url += `&scope=${encodeURIComponent(scope)}`;
url += `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
url += `&state=${encodeURIComponent(state)}`;
url += "&show_dialog=false";

export default url;
