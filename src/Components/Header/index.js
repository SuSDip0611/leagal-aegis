import React,
{
    useRef,
    useState,
    useEffect
} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { 
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

import "./header.style.css";
import Logo from '../Logo';
import MobileMenu from './MobileMenu';
import { headerMenus } from '../../Utils/helpers';

const Header = () => {

    const headerRef = useRef(null);

    const [ sticky, setSticky ] = useState({ isSticky: false, offset: 0 });

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset || document.documentElement.scrollTop > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
        } else {
        setSticky({ isSticky: false, offset: 0 });
        }
    };  

    // add/remove scroll event listener
    useEffect(() => {
        if (!isMobile) {
            var header = headerRef.current.getBoundingClientRect();
            const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
            }
    
            window.addEventListener('scroll', handleScrollEvent);
    
            return () => {
            window.removeEventListener('scroll', handleScrollEvent);
            };            
        }
    }, []);

    return(
        <>  
            <header>
                <div className="header-container">
                    <div className="header-top-area default-bg">
                        <div className="container">
                            {/* <div className="row row-75"> */}
                            <div className="row">
                                <div className="header-top-wrap col-12">
                                    <div className="row">
                                        <div className="col-md-3 col-xl-3">
                                            <div className="header-top-left">
                                                <p>CALL US : <a href="#"> +91 9999988888</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-xl-5">
                                            <div className="header-top-middle text-center">
                                                <ul className="social-link">
                                                    <li><a href="#"><FaFacebookF className='social-icon' /></a></li>
                                                    <li><a href="#"><FaWhatsapp className='social-icon' /></a></li>
                                                    <li><a href="#"><FaInstagram className='social-icon' /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <div className="header-top-right">
                                                <p>MAIL US :<a href="#">info@legalaegis.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <BrowserView>
                        <div className={`header-bottom-area header-sticky ${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
                            <div className="container">
                                <div className="row align-items-center top-wrapper" >
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 ">
                                            <div className="header-logo">
                                                <Logo />
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                                            <div className="header-menu-area text-right">
                                                <Navbar sticky="top" >
                                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                                        {headerMenus?.map((menu, indx) => {
                                                            return(
                                                                <Nav.Link 
                                                                    key={indx} 
                                                                    href={menu.url}
                                                                    className={`menu-text ${window.location.pathname === menu.url ? "selectedMenu" : ""}`}
                                                                >
                                                                    {menu.menu}
                                                                </Nav.Link>
                                                            )
                                                        })}
                                                    </Nav>
                                                </Navbar>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <MobileMenu />
                    </MobileView>
                    
                </div>
            </header>
        </>
    );
}

export default Header;