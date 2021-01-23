import React from 'react';
import {
    Navbar, NavbarBrand, NavbarText, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { logoutUser } from './actions/authActions';
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

const Header = (props) => {
    return(
        <Styles>
            <Navbar>
                <NavbarBrand><Heading>Authors' Attic</Heading></NavbarBrand>
                {props.auth.isAuthenticated && <NavbarText><Button style={{ backgroundColor: 'rgba(52, 52, 52, 0.5)'}} onClick={() => props.logoutUser()}>
                    Log Out <i class='fa fa-sign-out' aria-hidden="true"></i></Button></NavbarText> }
            </Navbar>
        </Styles>
    )
}
const mapStateToProps = state =>({
    auth: state.auth 
})
export default connect(mapStateToProps, { logoutUser })(Header);