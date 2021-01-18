import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import arrowL from '../../asserts/images/arrow_l.png';
import arrowR from '../../asserts/images/arrow_r.png';

var navBar = {
    width: `100%`,
    paddingTop: `3vw`
}

var navLink = {
    paddingLeft: `2vw`,
    paddingRight: `2vw`,
    fontFamily: `Poppins`,
    fontWeight: 700,
    fontSize: `1.3vw`,
    color: `black`
}

var flecha = {
    float: `left`,
    height: `2.2vw`
}

export class MenuHome extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="light" style={navBar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-flex">
                            <Nav.Link href="#/sobreNosotros" style={navLink}>Sobre Nosotros</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#/contacto" style={navLink}>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export class MenuContact extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="light" style={navBar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-flex">
                            <Nav.Link href="#/" style={navLink}>
                                <img src={arrowL} alt="Flecha" style={flecha} />
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#/sobreNosotros" style={navLink}>Sobre Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export class MenuAboutUs extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="light" style={navBar}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-flex">
                            <Nav.Link href="#/contacto" style={navLink}>Contacto</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#/" style={navLink}>
                                <img src={arrowR} alt="Flecha" style={flecha} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}