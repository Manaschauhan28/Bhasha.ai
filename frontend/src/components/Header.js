import React from 'react'
import { Navbar,Nav,Container, Row, Col } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import '../App.css';
// import { logoImage } from 'logo.png'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <header>
        <Navbar bg='myColor' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className='fs-2'>
                      <img src={'logo.png'} height={100} width={100} alt='Pari भाषा.ai' className='rounded'></img>
                    </Navbar.Brand>
                </LinkContainer>

                <Nav className="justify-content-end fs-5" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/about">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/service">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/pricing" >
                            Pricing
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant='primary'>Get Started</Button>
                    </Nav.Item>

                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header;
