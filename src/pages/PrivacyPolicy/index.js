
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

import "./privacy-policy.style.css";
import Loader from "../../Components/Loader";
import Banner from "../../Components/Banner";

const PrivacyPolicy = () => {

    const [privacyP, setPrivacyP] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getprivacyP();
    }, []);

    const getprivacyP = async () => {

        const privacyPText = await api.get('/pages?slug=privacy-policy');
        setIsLoading(false);
        setPrivacyP(privacyPText?.data[0]?.content.rendered);
        
    }

    return(
        <div>
            {isLoading ? 
                <Loader />
            :
                <>
                    <Banner 
                        pageName="Privacy Policy"
                        desc="Adalot is the best Law Firm. We solve your problems  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam"
                    />
                    <div className="feature-area pt-95 pb-90">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="pp-data-holder" dangerouslySetInnerHTML={{ __html: privacyP }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default PrivacyPolicy;