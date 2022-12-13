import React from 'react';
import './header.css'
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap';


const Header = () => {
    return (
        <Navbar className='header-block'>
            <h3 className='header-title'>
                {/* eslint-disable-next-line */}
                <a href="#">
                    Game of Thrones DB
                </a>
            </h3>
            <Nav pills className='header-nav'>
                <NavItem>
                    {/* eslint-disable-next-line */}
                    <NavLink active href="#">Characters</NavLink>
                </NavItem>
                <NavItem>
                    {/* eslint-disable-next-line */}
                    <NavLink href="#">Houses</NavLink>
                </NavItem>
                <NavItem>
                    {/* eslint-disable-next-line */}
                    <NavLink href="#">Books</NavLink>   
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;