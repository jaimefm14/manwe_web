import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import arrowT from '../../asserts/images/arrow_t.png';
import logo from '../../asserts/images/Logo_Manwe_simple.png';

var navBar = {
    // paddingTop: '1vw'
    backgroundColor: 'rgba(240,240,240,1)'
}

var navImg = {
    display: 'flex',
}

var navLink = {
    paddingLeft: `2vw`,
    paddingRight: `2vw`,
    fontFamily: `Poppins`,
    fontWeight: 700,
    fontSize: `1.3em`,
    color: `rgb(80,80,80)`,
    textAlign: 'center'
}

var flecha = {
    float: `left`,
    height: `2.2vw`
}

export class MenuHome extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect class="justify-content-between" expand="lg" variant="light" fixed="top" style={navBar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
                        <Col className="justify-content-center">
                            <Nav.Link href="#/sobreNosotros" style={navLink}>About us</Nav.Link>
                        </Col>
                        <Col className="justify-content-center" style={navImg}>
                            <Navbar.Brand href="#/" >
                                <img alt="manwe logo" src={logo} width="auto" height="50vw" style={{marginBottom: 0}}/>
                            </Navbar.Brand>                       
                        </Col>
                        <Col className="justify-content-center">
                            <Nav.Link href="#/contacto" style={navLink}>Contact</Nav.Link> 
                        </Col>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}



export class MenuPoliticas extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="light" style={navBar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-flex">
                            <Nav.Link href="#/" style={navLink}>
                                <img src={arrowT} alt="Flecha" style={flecha} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}