import React,
{
    useState,
    useEffect,
} from "react";

import "./servicecard.style.css";

const ServiceCard = ({ service }) => {
    return(
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 blog-card" key={service?.id}>
            <div className="single-blog mb-30">
                <a href={`/get-service/${service?.id}`}>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="blog-img">
                                <a href={`/get-service/${service?.id}`}><img src={`${window.location.origin}${service?.image}`} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <div className="blog-list-content" >
                                <h3><a className="blog-title-text" href={`/get-service/${service?.id}`}>{service?.service}</a></h3>
                                <p className="blog-desc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                {/* <a href={`/get-service/${service?.id}`}><span>Continue Reading</span> <FaArrowRightLong className="arrIcon" /> </a> */}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ServiceCard;