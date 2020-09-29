import React from 'react';
import './Home.css';
import ReactGA from 'react-ga';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../footer/Footer';

import logo from "./Logo_Manwë.png"
import Headerlogo from "./Logo_Manwe_simple.png"
import sky from "./esquiador.png";
import rpi from "./raspberry.png";
import dron from "./dron.png";
import mobile from "./mobile.png";
import youtube from "./youtube.png";
import esp from "./spain.png";

import contacto from "../form/contacto"


var intro = {
    background: `#F0F0F0`,
    paddingLeft: `5vw`,
    paddingTop: `5vw`,
    lineHeight: `1`,
    fontFamily: `Poppins`,
    fontSize: `bold`
}

var text = {
    background: `#FFFFFF`,
    paddingLeft: `5vw`,
    paddingTop: `5vw`,
    lineHeight: `1`,
    fontFamily: `Poppins`,
    fontSize: `bold`
}

var blue = {
    background: `#36A9E1`
}

var white = {
    background: `#FFFFFF`,
    width: `100%`,
    height: `10vw`

}

const trackingId = "UA-30843009-3";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

class Home extends React.Component {
    render() {
        return (
            <>
                <Container fluid>


                    <Container id="main">
                    <Row>
                        <Col className="align-self-end">
                            <p class="language">ESP</p>
                            <img src={esp} alt="Español" class="language"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-start">
                            <Link to="/sobreNosotros"><p>Sobre nosotros</p></Link>
                        </Col>
                        <Col>
                            <Row className="justify-content-center">
                                <img id="header" src={Headerlogo} alt="Manwë" />
                            </Row>
                            <Row className="justify-content-center">
                                <img id="logo" src={logo} alt="Logo" class="img"/>
                            </Row>
                        </Col>
                        <Col className="justify-content-end">
                            <Link to="/contacto"><p style={{textAlign:`end`}}>Contacto</p></Link>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    </Container>



                    <Row style={intro}>
                        <Col>
                            <p class="title">Manwë</p>
                            <p class="subtitle">tu dron de rescate</p>
                            <hr class="line" />
                            <p class="summary">Manwë Súlimo, personaje del legendarium creado por J. R. R. Tolkien, es el amo del aire y los vientos.<br />
                                Nuestro sistema de rescate a bordo de un dron, te encontrará sea cual sea tu paradero.</p>
                        </Col>
                        <Col>
                            <img src={sky} alt="esquiador" class="img" />
                        </Col>
                    </Row>
                    <Row style={text}>
                        <Col>
                            <img id="rpi" src={rpi} alt="Raspberry Pi" class="img" />
                        </Col>
                        <div class="vl"></div>
                        <Col>
                            <p class="summary2" style={{ paddingLeft: `8vw` }}>
                                Manwë Súlimo, personaje del legendarium creado por J. R. R. Tolkien, es el amo del aire y los vientos.<br />
                                Nuestro sistema de rescate a bordo de un dron, te encontrará sea cual sea tu paradero.</p>
                        </Col>
                    </Row>
                    <Row style={text}>
                        <Col>
                            <p class="summary2">Manwë Súlimo, personaje del legendarium creado por J. R. R. Tolkien, es el amo del aire y los vientos.<br />
                                Nuestro sistema de rescate a bordo de un dron, te encontrará sea cual sea tu paradero.</p>
                        </Col>
                        <Col>
                            <img id="dron" src={dron} alt="dron" class="img" />
                        </Col>
                    </Row>
                    <Row style={blue}>
                        <Col>
                            <Row style={{ width: `150%` }}>
                                <Col id="image-blue">
                                    <img id="mobile" src={mobile} alt="Mobile" class="img" />
                                </Col>
                                <Col style={{ paddingTop: `5vw`, paddingRight: `5vw` }}>
                                    <p class="summary-blue">Indica al dron el área a rastrear y él hará el resto.</p>
                                    <p class="summary-blue">Una sencilla interfaz proporciona rapidez y eficacia a la hora de un rescate.</p>
                                </Col>
                            </Row>
                            <Row>
                                <img id="youtube" src={youtube} alt="Usando movil" class="img" />
                            </Row>
                        </Col>
                        <Col>
                            <p class="title-blue">Dirige el dron con tu app móvil</p>
                        </Col>
                    </Row>
                    <Row>
                        <div style={white}></div>
                    </Row>
                    <Footer></Footer>
                </Container>
            </>
        )
    }
}

export default Home;