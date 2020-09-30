import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo from "./Logo_Manwë.png"
import background from "./background.jpeg";

import './Footer.css'


var title = {
    fontSize: `1.5vw`,
    fontWeight: 400,
    fontFamily: `Poppins`,
    color: `#FFFFFF`
}

var text = {
    fontSize: `1.2vw`,
    fontWeight: `normal`,
    fontFamily: `Poppins`,
    color: `#A3A3A3`
}


class Footer extends React.Component {
    render() {
        return (
            <>
            <Container id="footer" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-4">
                        <p style={title}>Contacto</p>
                        <p style={text}>info@manwe.tech</p>

                        <p style={title}>Teléfono</p>
                        <p style={text}>+34 687155736</p>

                        <p style={title}>Sede</p>
                        <p style={text}>C\ Vera s/n, 46021 Valencia, España</p>
                    </Col>
                    <Col className="col-4">
                        <p style={title}>Políticas</p>
                        <p style={text}>Políticas de privacidad</p>
                        <p style={text}>Política de cookies</p>
                        <p style={text}>Términos de uso</p>
                    </Col>
                    <Col className="col-4">
                        <p style={title}>FAQ</p>
                        <p style={text}>¿Tienes dudas?</p>
                        <img src={logo} alt="logo" className="img"/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Footer;