import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubmitBook extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: "",
            author: "",
            desc: "",
            price: ""
        };
    }
    onChange = (e) =>{
        this.setState({[e.target.id]: e.target.value})
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const bookData = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            desc: this.state.desc,
            price: this.state.price
        };
    }
    render(){
        return(
            <div>
                <Header />
                <Container style={{ minHeight: "75vh"}}>
                    <h4 style={{ textAlign: 'center', marginTop: '15px' }}>POST YOUR BOOK</h4>
                    <Row className='justify-content-center'>
                        <Col md={4}>
                            <Container style={{ border: '2px solid grey', borderRadius: '16px', margin: '15px'}}>
                                <Form onSubmit={this.onSubmit} style={{margin: '15px'}}>
                                    <Row>
                                        <Col md={12}>
                                            <h5 style={{ marginBottom: '15px' }}>INCLUDE SOME DETAILS</h5>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Label>Title</Label>
                                            </Col>
                                        </Row>
                                        <Row className='justify-content-center'>
                                            <Col md={12}>
                                                <Input onChange={this.onChange} value={this.state.title} type="text" id="title" />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Label>Author</Label>
                                            </Col>
                                        </Row>
                                        <Row className='justify-content-center'>
                                            <Col md={12}>
                                                <Input onChange={this.onChange} value={this.state.author} type="text" id="author" />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Label>Description</Label>
                                            </Col>
                                        </Row>
                                        <Row className='justify-content-center'>
                                            <Col md={12}>
                                                <Input onChange={this.onChange} value={this.state.desc} type="textarea" id="desc" />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <hr/>
                                    <Row>
                                        <Col md={12}>
                                            <h5 style={{ marginBottom: '15px'}}>SET A PRICE</h5>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Row>
                                            <Col>
                                                <Label>Price</Label>
                                            </Col>
                                        </Row>
                                        <Row className='justify-content-center'>
                                            <Col md={12}>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>₹</InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input onChange={this.onChange} value={this.state.price} type="text" id="price" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <hr/>
                                    <Row className='justify-content-center'>
                                        <Button color="secondary" type="submit">Post now</Button>
                                    </Row>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
        id: state.auth.user.id
})

export default connect( mapStateToProps )(withRouter(SubmitBook));