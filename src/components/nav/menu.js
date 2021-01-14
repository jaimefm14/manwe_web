import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

var navBar = {
    width: `100%`, 
    paddingTop: `3vw`
}

var navLink = {
    paddingLeft: `2vw`,
    paddingRight: `2vw`,
    fontFamily: `Poppins`,
    fontWeight: 700,
    fontSize: `1.5vw`,
    color: `#5d5d5d`
}

class Menu extends React.Component {
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

export default Menu;