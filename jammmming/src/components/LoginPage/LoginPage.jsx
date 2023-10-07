import React from "react";
import url from "../../functions/apiAuthorize";

function LoginPage() {
    const handleClick = () => {
        window.location = url;
    }

    return (
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default LoginPage;