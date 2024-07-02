import React from "react";

import "./loader.css";

const Loader = () => {
    return(
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src={`${window.location.origin}/assets/icons/icon1.png`} alt="" className="loader-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;