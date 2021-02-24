import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


import logo from "../../asserts/images/Logo_Manwë.png";
import facebook from "../../asserts/images/facebook.svg";
import instagram from "../../asserts/images/instagram.svg";
import linkedin from "../../asserts/images/linkedin.svg";
import twitter from "../../asserts/images/twitter.svg";

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
                        <Col className="col-5">
                            <p style={title}>Contact</p>
                            <a href="mailto:info@manwe.tech"><p style={text}>info@manwe.tech</p></a>

                            <p style={title}>Phone</p>
                            <a href="tel:+34 687155736"><p style={text}>+34 687155736</p></a>

                            {/*<p style={title}>Sede</p>
                        <a href="http://maps.google.com/?q=Ciudad Politécnica de la Innovación (CPI) Edificio 8B Acceso N 4ª Planta, 46022 Valencia" 
                            target='_blank' rel="noopener noreferrer">
                            <p style={text}>C\ Vera s/n, 46021 Valencia, España</p>
                        </a>*/}
                        
                            <a href="https://www.linkedin.com/company/manwë" target="_blank" rel="noopener noreferrer">
                                <img className="linkedin" src={linkedin} alt="Linkedin" />
                            </a>
                            {/*<a href="https://www.linkedin.com/company/manwë" target="_blank" rel="noopener noreferrer">
                            <img className="socialNetworks" src={facebook} alt="Facebook"/>
                        </a>*/}
                            {/*<a href="https://www.linkedin.com/company/manwë" target="_blank" rel="noopener noreferrer">
                            <img className="socialNetworks" src={twitter} alt="Twitter"/>
                        </a>*/}
                            <a href="https://www.linkedin.com/company/manwë" target="_blank" rel="noopener noreferrer">
                                <img className="socialNetworks" src={instagram} alt="Instagram" />
                            </a>
                        </Col>
                        <Col className="col-5">
                            <p style={title}>Policy</p>
                            <Link to="politica-de-privacidad"><p style={text}>Privacy policy</p></Link>
                            <Link to="politica-de-cookies"><p style={text}>Cookies policy</p></Link>
                            {/*<Link to="#"><p style={text}>Use terms</p></Link>*/}

                        </Col>
                        <Col className="col-2">
                            <p style={title}>FAQ</p>
                            <Link to="/contacto"><p style={text}>Have doubts?</p></Link>
                            <Link to="/"><img src={logo} alt="logo" className="img" /></Link>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Footer;