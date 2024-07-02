import React,
{
    useState,
    useEffect,
} from "react";

import "./services.style.css";

import api from "../../axios";
import Loader from "../../Components/Loader";
import Banner from "../../Components/Banner";
import { services } from "../../Utils/helpers";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {

    

    // const [services, setServices] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        // setIsLoading(true);
        // getAllBlogs();
    }, []);

    /*const getAllBlogs = async () => {

        const blogs = await api.get('/posts?_embed');

        setIsLoading(false);
        setServices(blogs?.data);
        
    }*/

    return(
        <div>
            {isLoading ? 
                <Loader />
            :
                <>
                    <Banner 
                        pageName="Services"
                        desc=""
                    />
                    <div className="service-area pt-120">
                        <div className="container">
                            <div className="row">
                                {services?.map((service, index) => {
                                    return <ServiceCard service={service} />
                                })}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Services;