import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Media, Button } from 'reactstrap'
import { connect } from 'react-redux';
import { getBook } from '../actions/authActions';
import styled from 'styled-components';
import Header from '../HeaderComponent';
import Footer from '../FooterComponent';

const Top = styled.div`
    .jumbo{
        background: url("/images/info.jpg");
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        position: relative;
    }
`;

class BookInfo extends Component{

    static getDerivedStateFromProps = props =>{
        if(!props.isLoaded)
            props.getBook(parseInt(props.match.params.id));

    }
    render(){
        return(
            <div>
                <Header/><Top>
                    <Jumbotron fluid className="jumbo">
                        <Container>
                            <Row>
                                <Col md={9}>
                                    <h1 className="display-4" style={{color: 'white'}}>{this.props.book.title}</h1>
                                    <p className="lead" style={{ color: 'white' }}>“If you don’t like to read, you haven’t found the right book.” - J.K. Rowling</p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron></Top>
                <Container fluid style={{minHeight: '75vh'}}>
                <Row>
                    <Col md={{ size:5, offset: 1}} style={{ border: '2px solid grey', borderRadius: '10px', marginTop: '15px', marginBottom: '15px' }}>
                            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Media object src='/images/img-1.jpg' style={{maxHeight: '200px', maxWidth: '200px', marginTop: '10px'}}/>
                            </Container>
                        <Container fluid style={{ margin: '10px'}}>
                                <hr />
                            <Row><h4>Details</h4></Row>
                            <Row>
                                <Col md={6}>
                                    <Row>Author</Row>
                                    <Row>Year</Row>
                                </Col>
                                <Col md={6}>
                                    <Row>{this.props.book.author}</Row>
                                    <Row>{this.props.book.year}</Row>
                                </Col>
                            </Row>
                            <hr/>
                            <Row><h4>Description</h4></Row>
                            <Row>
                                <Col md={12}>
                                    <Row>{this.props.book.desc}</Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={{ size: 5}}>
                        <Row>
                            <Container style={{ border: '2px solid grey', borderRadius: '10px', margin:'15px' }}>
                                <Container fluid style={{margin: '10px'}}>
                                    <Row>
                                        <Col>
                                            <h3>₹ {this.props.book.price}</h3>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            {this.props.book.title}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ size: 6}}>
                                            {this.props.user.city}, {this.props.user.state}
                                        </Col>
                                        <Col md={{offset: 4}}>
                                            Dec 23
                                        </Col>
                                    </Row>
                                </Container>
                            </Container>
                            </Row>
                            <Row>
                                <Container style={{ border: '2px solid grey', borderRadius: '10px', margin: '15px' }}>
                                    <Container fluid style={{ margin: '10px' }}>
                                        <Row>
                                            <Col>
                                                <h4>Seller Description</h4>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col>
                                                <Media>
                                                    <Media left>
                                                        <Media object src="/images/user.jpg" style={{ maxHeight: '75px', maxWidth: '75px'}}/>
                                                    </Media>
                                                        <Media body style={{marginLeft: '10px', marginTop: '5px'}}>
                                                            <Media heading>
                                                                {this.props.user.name}
                                                            </Media>
                                                            {this.props.user.email}
                                                        </Media>
                                                </Media>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '7px'}}>
                                                    <Button style={{ height: '50px', width: '400px', margin: '15px' }}>
                                                        Tel No: {this.props.user.tele}</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Container>
                            </Row>
                        </Col>
                </Row>
                </Container>
                <Footer/>
            </div>

        )
    }
}
const mapStateToProps  = state =>({
    isLoaded: state.user_book.isLoaded,
    user: state.user_book.user,
    book: state.user_book.book
})
export default connect (mapStateToProps, { getBook })(BookInfo);