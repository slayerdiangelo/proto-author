import React, { Component } from 'react';
import { Card, Row, Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { registerUser } from '../actions/authActions'
import { connect } from 'react-redux'
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const FormStyles = styled.div`
    margin: 15px;
`;

const CardStyles = styled.div`

    display: flex;
    flex-direction: column;
    margin: 15px;
`;

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            tele: "",
            address: "",
            city:"",
            state: "",
            password: "",
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            tele: this.state.tele,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            password: this.state.password
        };
        this.props.registerUser(newUser, this.props.history)
    }
    render() {
        return (
            <>
                <Header />
                <Container style={{ minHeight: "75vh" }}>
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
                                                            <Label>Name</Label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='justify-content-center'>
                                                        <Col md={12}>
                                                            <Input onChange={this.onChange} value={this.state.name} type="text" id="name" />
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Row>
                                                        <Col>
                                                            <Label>Email</Label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='justify-content-center'>
                                                        <Col md={12}>
                                                            <Input onChange={this.onChange} value={this.state.email} type="email" id="email" />
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Row>
                                                        <Col>
                                                            <Label>Telephone</Label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='justify-content-center'>
                                                        <Col md={12}>
                                                            <Input onChange={this.onChange} value={this.state.tele} type="text" id="tele" />
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Row>
                                                        <Col>
                                                            <Label>Address</Label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='justify-content-center'>
                                                        <Col md={12}>
                                                            <Input onChange={this.onChange} value={this.state.address} type="text" id="address" />
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Row>
                                                        <Col>
                                                            <Label>City</Label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='justify-content-center'>
                                                        <Col md={12}>
                                                            <Input onChange={this.onChange} value={this.state.city} type="text" id="city" />
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Row>
                                                        <Col>
                                                            <Label>State</Label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='justify-content-center'>
                                                        <Col md={12}>
                                                            <Input onChange={this.onChange} value={this.state.state} type="text" id="state" />
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
                                                    <Button color="primary" type="submit">Register</Button>
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

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect( mapStateToProps, { registerUser })(withRouter(Register));