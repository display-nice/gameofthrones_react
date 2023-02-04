import React from 'react';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap';
// import {Link} from 'react-router-dom';

import './Header.css';

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
                    <NavLink active href="/characters">Characters</NavLink>
                </NavItem>
                <NavItem>
                    {/* eslint-disable-next-line */}
                    <NavLink href="/houses">Houses</NavLink>
                </NavItem>
                <NavItem>
                    {/* eslint-disable-next-line */}
                    <NavLink href="/books">Books</NavLink>   
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;