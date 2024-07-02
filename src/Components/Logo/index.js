import React from "react";

import "./logo.css";

const Logo = () => {
    return(
        <>
            <div className="logo">
                <a href="/">
                    <div className="holder">
                        <img className="logo-img" src={`${window.location.origin}/assets/images/logo.png`} alt="" />
                    </div>
                </a>
            </div>
        </>
    );
}

export default Logo;