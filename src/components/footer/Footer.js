import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


import logo from "../../asserts/images/Logo_Manwë.png"
import background from "../../asserts/images/background.jpeg";

import './Footer.scss';

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
            <Container id="footer" fluid="true">
                <Row className="justify-content-md-center">
                    <Col className="col-4">
                        <p style={title}>Contacto</p>
                        <a href="mailto:info@manwe.tech"><p style={text}>info@manwe.tech</p></a>

                        <p style={title}>Teléfono</p>
                        <a href="tel:+34687155736"><p style={text}>+34 687155736</p></a>

                        <p style={title}>Sede</p>
                        <a href="http://maps.google.com/?q=Ciudad Politécnica de la Innovación (CPI) Edificio 8B Acceso N 4ª Planta, 46022 Valencia" 
                            target='_blank' rel="noopener noreferrer">
                            <p style={text}>C\ Vera s/n, 46021 Valencia, España</p>
                        </a>
                    </Col>
                    <Col className="col-4">
                        <p style={title}>Políticas</p>
                        <Link to="#"><p style={text}>Políticas de privacidad</p></Link>
                        <Link to="#"><p style={text}>Política de cookies</p></Link>
                        <Link to="#"><p style={text}>Términos de uso</p></Link>
                    </Col>
                    <Col className="col-4">
                        <p style={title}>FAQ</p>
                        <Link to="/contacto"><p style={text}>¿Tienes dudas?</p></Link>
                        <Link to="/"><img src={logo} alt="logo" className="img"/></Link>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Footer;