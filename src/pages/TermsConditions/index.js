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

import "./terms-conditions.style.css";
import Loader from "../../Components/Loader";
import Banner from "../../Components/Banner";

const TermsConditions = () => {

    const [tAndC, setTAndC] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        gettAndC();
    }, []);

    const gettAndC = async () => {

        const tAndCText = await api.get('/pages?slug=terms-and-conditions');
        setIsLoading(false);
        setTAndC(tAndCText?.data[0]?.content.rendered);
        
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
                                    <div className="tc-data-holder" dangerouslySetInnerHTML={{ __html: tAndC }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default TermsConditions;