import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { registerUser } from '../actions/authActions'
import { connect } from 'react-redux'
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';
import { withRouter } from 'react-router-dom';

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
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/books')
        }
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
            <div>
                <Header />
                <Container style={{ minHeight: "75vh" }}>
                    <h4 style={{ textAlign: 'center', marginTop: '15px' }}>SIGN UP</h4>
                    <Row className='justify-content-center'>
                        <Col md={4}>
                            <Container style={{ border: '2px solid grey', borderRadius: '16px', margin: '15px' }}>
                                <Form onSubmit={this.onSubmit} style={{margin: '15px'}}>
                                    <Row>
                                        <Col md={12}>
                                            <h5 style={{ marginBottom: '15px' }}>BASIC DETAILS</h5>
                                        </Col>
                                    </Row>
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
                                    <hr />
                                    <Row>
                                        <Col md={12}>
                                            <h5 style={{ marginBottom: '15px' }}>CONTACT DETAILS</h5>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Label>Mobile Phone Number</Label>
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
                                    <hr/>
                                    <Row>
                                        <Col md={12}>
                                            <h5 style={{ marginBottom: '15px' }}>SET A PASSWORD</h5>
                                        </Col>
                                    </Row>
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
                                    <hr/>
                                    <Row className='justify-content-center'>
                                        <Button color="secondary" type="submit">Submit</Button>
                                    </Row>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect( mapStateToProps, { registerUser })(withRouter(Register));