import React,
{
    useState,
    useEffect,
} from "react";
import api from "../../axios"
import { FaQuoteRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

import "./about.style.css"
import Loader from "../../Components/Loader";
import Banner from "../../Components/Banner";

const About = () => {

    const [about, setAbout] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAbout();
    }, []);

    const getAbout = async () => {

        const aboutText = await api.get('/pages?slug=about-us');
        setIsLoading(false);
        setAbout(aboutText?.data[0]?.content.rendered);
        
    }

    return(
        <div>
            {isLoading ? 
                <Loader />
            :
                <>
                    <Banner 
                        pageName="About Us"
                        desc="Adalot is the best Law Firm. We solve your problems  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam"
                    />
                    <div className="feature-area pt-95 pb-90">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="about-data-holder" dangerouslySetInnerHTML={{ __html: about }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {/* <div className="feature-area pt-95 pb-90">
                <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-md-4">
                            <div className="section-title feature-section-title">
                                <h2>Why you <br /> <span>Choose</span> me?</h2>
                                <p>Lawyer boluptatum deleniti atque corrupti quosres et quas molestias cepturi sint  eca itate non vident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aera</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-feature">
                                        <h2>Fight for Justice</h2>
                                        <p>Fight for justice is our main goal voluptatum it atque corrupti quos es et quas molestias pturi sint occaeca  tate non </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-feature">
                                        <h2>Best Case Strategy</h2>
                                        <p>Case strategy is the key to success atque rupti quos es et quas molestias cepturi sint occaeca  tate non provident, similique sunt  </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-feature">
                                        <h2>Most Experienced</h2>
                                        <p>We have experienced lawyer’s  deleniti atque corrupti quos es et quas molestias cepturi int occaeca  tate non provident similique </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-feature">
                                        <h2>Quick Case Solve</h2>
                                        <p>voluptatum deleniti atque corrupti quos es et quas molestias cepturi sint occaeca  tate non provident, similique sunt </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-wrapper black-bg pt-110 pb-110">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="about-img">
                                            <img src={`${window.location.origin}/assets/images/about.jpg`} alt="" />
                                            <a className="venobox" data-vbtype="video" data-gall="gall-video" data-autoplay="true" href="https://www.youtube.com/watch?v=ffIddFseYXE">
                                                <MdOutlinePlayCircleOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="about-content">
                                            <span>20 years of experience</span>
                                            <h1>Hay! Here is Robert Jackson</h1>
                                            <h5>Professional & Experienced Lawyer</h5>
                                            <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias  
                                                epturi sint  eca iditate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aerat voluptatem. 
                                                Ut enim ad minima veniam, quis nostrum exercitationem ullam poris suscipit modi tempora incidunt </p>
                                            <div className="author-signeture">
                                                <img src={`${window.location.origin}/assets/images/signeture.png`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-area pt-120 pb-55">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4">
                            <div className="service-img">
                                <img src={`${window.location.origin}/assets/images/service.jpg`} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title mb-60">
                                    <img src={`${window.location.origin}/assets/icons/icon1.png`} alt="" />
                                        <h4>Services</h4>
                                        <h2>My Practice Area</h2>
                                        <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias cepturi sint  eca itate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-service mb-60 d-flex flex-nowrap">
                                                <div className="service-icon">
                                                    <img src={`${window.location.origin}/assets/icons/icon2.png`} alt="" />
                                                </div>
                                                <div className="service-content">
                                                    <h4><a href="single-service.html">Criminal Law</a></h4>
                                                    <p>voluptatum deleniti atque corrupti is es et quas molestias cepturi sint aete non provident, similique sunt </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-service mb-60 d-flex flex-nowrap">
                                                <div className="service-icon">
                                                    <img src={`${window.location.origin}/assets/icons/icon3.png`} alt="" />
                                                </div>
                                                <div className="service-content">
                                                    <h4><a href="single-service.html"> Divorce Law</a></h4>
                                                    <p>voluptatum deleniti atque corrupti is es et quas molestias cepturi sint aete non provident, similique sunt </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-service mb-60 d-flex flex-nowrap">
                                                <div className="service-icon">
                                                    <img src={`${window.location.origin}/assets/icons/icon4.png`} alt="" />
                                                </div>
                                                <div className="service-content">
                                                    <h4><a href="single-service.html">Corporate Law</a></h4>
                                                    <p>voluptatum deleniti atque corrupti is es et quas molestias cepturi sint aete non provident, similique sunt </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-service mb-60 d-flex flex-nowrap">
                                                <div className="service-icon">
                                                    <img src={`${window.location.origin}/assets/icons/icon5.png`} alt="" />
                                                </div>
                                                <div className="service-content">
                                                    <h4><a href="single-service.html">Civil Litigation</a></h4>
                                                    <p>voluptatum deleniti atque corrupti is es et quas molestias cepturi sint aete non provident, similique sunt </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-and-quote-area pt-100 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="request-quate-area">
                                <div className="request-quate-title mb-55 text-center">
                                    <img src={`${window.location.origin}/assets/icons/icon1.png`} alt="" />
                                    <h2>Request a free Quote</h2>
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
                                            <h4>Testimonials</h4>
                                            <h2>Clinets Review</h2>
                                            <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas iaspturi sint  eca itate non provident, similique sunt in culpa modi tempora </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="single-testimonial mb-50">
                                            <div className="testimonial-content">
                                                <FaQuoteRight />
                                                <p>deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, milique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolor</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <h5>James Franklin, <span>Business man</span></h5>
                                            </div>
                                        </div>
                                        <div className="single-testimonial">
                                            <div className="testimonial-content">
                                                <FaQuoteRight />
                                                <p>deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, milique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolor</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <h5>James Franklin, <span>Business man</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default About;