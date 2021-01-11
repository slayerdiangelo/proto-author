import React from 'react';
import { Navbar, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Styles=styled.div`
    .navbar{
        background-color: black;
        width: 100%;
    }
`;
const Column = styled.div`
        display: flex;
        flex-direction: column;
        margin: 10px 30px auto 30px;
`;
const Social = styled.div`
        display: flex;
        flex-direction: row;
        margin: 10px 30px auto 30px;
`;
const Heading=styled.h5`
    color: white;`;

const HeadingList = styled.h6`
    color: grey;`;

const Line = styled.hr`
    border: solid 1px grey;
    width: 700px`;

const Footer = () =>{
    return(
            <Styles>
                <Navbar className="navbar-fixed-bottom">
                    <Container className="justify-content-center">
                        <Row> 
                            <Col md={3}><Column>
                                <Row><Heading>HIGHLIGHTS</Heading></Row>
                                <Row><HeadingList>Our Story</HeadingList></Row>
                                <Row><HeadingList>Contact</HeadingList></Row>
                            </Column></Col>
                            <Col md={3}><Column>
                                <Row><Heading>RESOURCES</Heading></Row>
                                <Row><HeadingList>FAQs</HeadingList></Row>
                                <Row><HeadingList>Blog</HeadingList></Row>
                                <Row><HeadingList>Support</HeadingList></Row>
                            </Column></Col>
                            <Col md={3}><Column>
                                <Row><Heading>LEGAL</Heading></Row>
                                <Row><HeadingList>Privacy</HeadingList></Row>
                                <Row><HeadingList>Terms of Services</HeadingList></Row>
                            </Column></Col>
                            <Col md={3}><Social>
                                <Col><HeadingList>Facebook</HeadingList></Col>
                                <Col><HeadingList>Twitter</HeadingList></Col>
                                <Col><HeadingList>LinkedIn</HeadingList></Col>
                            </Social></Col>
                        </Row>
                        <Row><Line/></Row>
                    </Container>
                    <Container className="justify-content-center"><Row><HeadingList>© CEC CSE Department</HeadingList></Row></Container>
                </Navbar>
            </Styles>
    )
}
export default Footer;                           