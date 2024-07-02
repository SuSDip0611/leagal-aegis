import React from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from "../Logo";
import './header.style.css';
import { headerMenus } from "../../Utils/helpers";

const MobileMenu = () => {
    return(
        <Navbar className="mobile-menu-holder" bg="light" expand="sm">
            <Container>
                <Navbar.Brand href="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto menu-name">
                        {headerMenus?.map((menu, i) => {
                            return <Nav.Link className={`menu-mobile-text ${window.location.pathname === menu.url ? "selectedMenu" : ""}`} href={menu.url} key={i}>{menu.menu}</Nav.Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MobileMenu;