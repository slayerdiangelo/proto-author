import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email: "",
            password: "",
        };
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/books')
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/books')
        }
    }
    onChange = e =>{
        this.setState({[e.target.id] : e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    }
    render(){
        return(
            <div>
                <Header/>
                <Container style={{minHeight: "75vh"}}>
                    <h4 style={{ textAlign: 'center', marginTop: '15px' }}>LOG IN</h4>
                    <Row className='justify-content-center'>
                        <Col md={4}>                             
                            <Container style={{ border: '2px solid grey', borderRadius: '16px', margin: '15px' }}>
                            <Form onSubmit={this.onSubmit} style={{ margin: '15px' }}>
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
const mapStateToProps = state => {
    return{
        auth: state.auth,
        errors: state.errors
    }
}
export default connect(mapStateToProps, { loginUser })(withRouter(Login));