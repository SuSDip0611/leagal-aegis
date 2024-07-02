import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../Logo';
import "./footer.style.css";
import { footerMenus } from "../../Utils/helpers";

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-top-area black-bg pt-100 pb-65">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <div className="single-footer-widget mb-30">
                                    <a className="footer-logo" href="index.html">
                                        <Logo />
                                    </a>
                                    <p>Lawyer boluptatum atque corrupe uas molestias cepturi sint  eca itate non nt in culpa modi tempora incidunt</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 footer-menu">
                                <div className="single-footer-widget mb-30">
                                    <h3 className="footer-title">Quick Links</h3>
                                    <Navbar className="footer-navbar" >
                                        <Nav className="foot-nav-menu">
                                            {footerMenus?.map((menu, indx) => {
                                                return(
                                                    <Nav.Link 
                                                        key={indx} 
                                                        href={menu.url}
                                                        className="footer-menu-text"
                                                    >
                                                        {menu.menu}
                                                    </Nav.Link>
                                                )
                                            })}
                                        </Nav>
                                    </Navbar>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <div className="single-footer-widget mb-30">
                                    <h3 className="footer-title">Contact Info</h3>
                                    <p>129 Street Avenue, Alex Complex Central Street, New York</p>
                                    <p className="contact-info">
                                        <a href="#">+91 9999988888</a>
                                    </p>
                                    <p className="contact-info">
                                        <a href="#">info@legalaegis.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area pt-20 pb-20">
                    <div className="container text-center">
                    <p><span>&copy;</span> Copyright, 2024 All right reserved by <a href="/">Legal Aegis</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;