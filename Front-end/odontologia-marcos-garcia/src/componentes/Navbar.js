// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "../elementos/NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;