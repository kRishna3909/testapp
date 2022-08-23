import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'

import imgOne from'./imgOne.jpg'
import imgTwo from './imgTwo.jpg'
import imgThree from './imgThree.jpg'
import { Button, Carousel, Container, Nav,Image, NavDropdown } from "react-bootstrap";
import './homepage.css'
import { Link } from "react-router-dom";
function Homepage() {
    return (<>

                <Nav justify variant="pills" style={{backgroundColor:'#343A40'}}>
                     <Container className='d-flex fs-5 p-2 '>
                        <Nav.Item >
                            <Link to='/' className='text-decoration-none text-light'>Home</Link>
                        </Nav.Item>
                        <NavDropdown title='Commodities' className='text-decoration-none text-light'>
                            <NavDropdown.Item>Commodities</NavDropdown.Item>
                            <NavDropdown.Item>Organic</NavDropdown.Item>
                            <NavDropdown.Item>InOrganic</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Link to='/about' className='text-decoration-none text-light'>AboutUs</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/table" className='text-decoration-none text-light'>Table</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/api" className='text-decoration-none text-light'>API</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/logIn" className='text-decoration-none text-light'>LogIn</Link>
                        </Nav.Item>
                    </Container>
                </Nav>
                
            
            <Container fluid >
                 <Carousel variant="dark" >
                    <Carousel.Item >
                    <img  src={imgOne}  className='carousel-img'></img>
                        <Carousel.Caption>

                            <h1>Buy Local / Directly From Farmers</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    

                    <Carousel.Item >
                    <Image thumbnail src={imgTwo} className='carousel-img'></Image>
                    <Carousel.Caption>
                    <h1>Sell directly  to Trader</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        {/* <img className="d-block w-100 h-25" alt="Fiffrarewqrst slide" src={imgThree} ></img> */}
                        <Image thumbnail src={imgThree} className='carousel-img'></Image>
                        <Carousel.Caption>

                            <h4>Img One</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>


        


    </>
    )
}

export default Homepage