import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import styled from'styled-components';

const Styles=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px;
    `;

class Home extends Component{
    render(){
        return(
            <>
            <Header/>
                <Container>
                    <Row>
                        <Styles>
                            <Col sm={{size:4}}>
                                <Card>
                                    <CardImg src='./images/sign.jpg' alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>New User?</CardTitle>
                                        <CardText>Create an account and join our endevour.</CardText>
                                        <Button>Sign-Up <i class='fa fa-user-plus' aria-hidden="true"></i></Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={{ size: 4 }}>
                                <Card>
                                    <CardImg src='./images/login.jpg' alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Have an Account?</CardTitle>
                                        <CardText>Login and explore our deep collection of books.</CardText>
                                        <Button>Login  <i class='fa fa-sign-in' aria-hidden="true"></i></Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Styles>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Home;