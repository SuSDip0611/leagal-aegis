import React,
{
    useState,
    useEffect,
} from "react";
import { 
    Col, 
    Row, 
    Container, 
    ResponsiveEmbed
} from 'react-bootstrap';

import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import MainRoute from "../../routes/mainRoutes";

const AppLayout = () => {

    return(
        <div className="wrapper">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <Header />
                    <MainRoute />
                    <Footer />
                </div>
            </div>

        </div>
    );
}

export default AppLayout;