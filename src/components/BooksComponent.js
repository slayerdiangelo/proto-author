import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardBody,
    CardTitle, CardText, CardSubtitle, Jumbotron
} from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getBookInfo } from './actions/authActions';

const Styles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap; 
    `;
const BookStyles = styled.div`  
    margin: 10px;`;

const Image=styled.div`
    width: 100%;
    height: 23vw;
    object-fit: cover;`;

const Top = styled.div`
    .jumbo{
        background: url("./images/cover.jpg");
        color: white;
        position: relative;
    }
`;
class Books extends Component{

    static getDerivedStateFromProps = props => {
        if(!props.book.isLoaded){
            props.getBookInfo();
        }    
    }
    render(){
        return(
            <div>
                <Header/><Top>
                <Jumbotron fluid className="jumbo">
                        <Container>          
                            <h1 className="display-4">New Additions</h1>
                            <p className="lead">“Rainy days should be spent at home with a cup of tea and a good book.” - Bill Patterson</p>
                        </Container>
                </Jumbotron></Top>
                <Container style={{minHeight: '75vh'}}>
                <Styles>
                    <Row>
                        {
                        this.props.book.books.map((book) => {
                            return(
                                <Col md={4}>
                                    <BookStyles>
                                    <Card><Image>
                                        <CardImg src='./images/img-1.jpg' alt="Card image cap" />
                                        </Image><CardBody>
                                            <CardTitle tag="h5">{book.name}</CardTitle>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">₹{book.price}</CardSubtitle>
                                            <CardText>{book.author}</CardText>
                                            <div className="text-center">
                                                <Button outline color="secondary">More Info</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    </BookStyles>
                                </Col>
                            )})}
                    </Row>
                </Styles>
                </Container>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    book: state.book
})
export default connect(mapStateToProps, { getBookInfo })(Books);
