import React from "react";
import url from "../../functions/apiAuthorize";
import "./LoginPage.css";

function LoginPage() {
    const handleClick = () => {
        window.location = url;
    }

    return (
        <div id="login">
            <h1>Welcome to Mr. Lister!</h1>
            <p>
                Mr. Lister is a web app that allows the user to create a playlist and save it to 
                their Spotify account. This application is built in React, and queries the Spotify 
                API for track search and playlist creation. It also uses React Router to create separate 
                routes for this page and for the application, and Axios is used for handling GET and 
                POST requests to the Spotify API.
            </p>
            <button onClick={handleClick}>Login with Spotify</button>
        </div>
    )
}

export default LoginPage;