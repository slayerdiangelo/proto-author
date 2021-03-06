import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect }  from "react-redux";
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
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/books')
        }
    }
    render(){
        return(
            <>
            <Header/>
                <Container style={{ minHeight: "75vh" }}>
                    <Row>
                        <Styles>
                            <Col sm={{size:4}}>
                                <Card>
                                    <CardImg src='/images/sign.jpg' alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>New User?</CardTitle>
                                        <CardText>Create an account and join our endevour.</CardText>
                                        <Button><Link to='/register' style={{ color: 'white', textDecoration: 'none' }}>Sign-Up </Link><i class='fa fa-user-plus' aria-hidden="true"></i></Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={{ size: 4 }}>
                                <Card>
                                    <CardImg src='/images/login.jpg' alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Have an Account?</CardTitle>
                                        <CardText>Login and explore our deep collection of books.</CardText>
                                        <Button><Link to='/login' style={{color: 'white', textDecoration: 'none'}}>Login </Link><i class='fa fa-sign-in' aria-hidden="true"></i></Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Styles>
                    </Row>
                </Container>
                <Footer/>
            </>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(withRouter(Home));