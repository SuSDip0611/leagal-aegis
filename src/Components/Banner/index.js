import React from "react";

import "./banner.style.css"

const Banner = ({ pageName, desc }) => {
    return(
        <div className="page-banner-area bg-img-3 pt-95 pb-90">
		    <div className="container">
		        <div className="row">
		            <div className="page-banner-content col-12 text-center">
                        <h2>{pageName}</h2>
                        <p>{desc}</p>
		                {/* <ul className="breadcrumb-pagination">
		                    <li><a href="/">Home</a></li>
		                    <li>About</li>
		                </ul> */}
		            </div>
		        </div>
		    </div>
		</div>
    );
}

export default Banner;