import React from 'react';
import {
    Navbar, NavbarBrand } from 'reactstrap';
import styled from 'styled-components';

const Styles=styled.div`
    .navbar{
        background-color: black; 
    }
    .navbar-brand{
        color: white;
    }`;

const Heading = styled.h4`
    color: white;`; 

const Header = () => {
    return(
        <Styles>
            <Navbar>
                <NavbarBrand><Heading>Authors' Attic</Heading></NavbarBrand>
            </Navbar>
        </Styles>
    )
}
export default Header;