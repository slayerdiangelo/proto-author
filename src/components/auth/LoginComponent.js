import React, { Component } from 'react';
import { Card, Row, Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';
import styled from 'styled-components';

const FormStyles=styled.div`
    margin: 15px;
`;

const CardStyles=styled.div`

    display: flex;
    flex-direction: column;
    margin: 15px;
`;

class Login extends Component{
    constructor(){
        super();
        this.state={
            email: "",
            password: "",
        };
    }
    onChange = e =>{
        this.setState({[e.target.id] : e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const UserData = {
            email: this.state.email,
            password: this.state.password
        };
    }
    render(){
        return(
            <>
            <Header/>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={4}>
                        <CardStyles>
                        <Card>
                            <Container>
                            <FormStyles>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Email</Label>
                                        </Col>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <Col md={12}>
                                            <Input onChange={this.onChange} value={this.state.email} type="email" id="email"/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Password</Label>
                                        </Col>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <Col md={12}>
                                            <Input onChange={this.onChange} value={this.state.password} type="password" id="password" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Row className='justify-content-center'>
                                    <Button color="primary" type="submit">Log In</Button>
                                </Row>
                            </Form>
                            </FormStyles>
                            </Container>
                        </Card>
                        </CardStyles>
                    </Col>
                </Row>
            </Container>
            <Footer/>
            </>
        )
    }

}

export default Login;