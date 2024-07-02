import React,
{
    useRef,
    useState,
    useEffect
} from 'react';
import { useParams } from 'react-router-dom';
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import "./getservice.style.css";
import Banner from '../../Components/Banner';
import Loader from '../../Components/Loader';
import { services } from '../../Utils/helpers';

const GetService = () => {

    const params = useParams();
    const serviceId = params?.slug;

    const [ isLoading, setIsLoading ] = useState(true);
    const [ serviceData, setServiceData ] = useState({});
    
    useEffect(() => {
        setIsLoading(false);
        // getBlogDetails();
        setServiceData(services.filter(srvc => srvc.id == serviceId));
    }, []);


    /*const getBlogDetails = async () => {
        const blogDtl = await api.get(`/posts/${params?.slug}?_embed`);        
        setIsLoading(false);
        setBlogData(blogDtl?.data);
    }*/

    return(
        <div>
            {isLoading ? 
                <Loader />
            :
                <>
                    <Banner 
                        pageName={`Get Service, ${serviceData[0].service}`}
                        desc=""
                    />
                    <div className="testimonial-and-quote-area pt-100 pb-100">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="request-quate-area">
                                        <div className="request-quate-title mb-55 text-center">
                                            <img src={`${window.location.origin}/assets/icons/icon1.png`} alt="" />
                                            <h2>Request a free Quote for, <br /> {serviceData[0].service}</h2>
                                        </div>
                                        <div className="request-quate-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-6">
                                                        <div className="request-quate-form-style mb-30">
                                                            <input name="first-name" placeholder="First Name" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-6">
                                                        <div className="request-quate-form-style mb-30">
                                                            <input name="last-name" placeholder="Last Name" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-6">
                                                        <div className="request-quate-form-style mb-30">
                                                            <input name="phone" placeholder="Phone" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-6">
                                                        <div className="request-quate-form-style mb-30">
                                                            <input name="email" placeholder="Email" type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12">
                                                        <div className="request-quate-form-style mb-30">
                                                            <input name="subject" placeholder="Subject" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12">
                                                        <div className="request-quate-form-style">
                                                            <textarea name="message" placeholder="Massage"></textarea>
                                                            <button type="submit" className="default-btn">
                                                                Send Now 
                                                                <FaArrowRightLong />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="testimonial-area">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="section-title mb-40">
                                                <img src={`${window.location.origin}/assets/icons/icon1.png`} alt="" />
                                                    <h4>Service Details</h4>
                                                    <p>{serviceData[0].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default GetService;