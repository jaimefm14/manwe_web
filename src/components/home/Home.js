import React from 'react';
import './Home.scss';
import ReactGA from 'react-ga';
import { Link } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../footer/Footer';

import logo from "../../asserts/images/Logo_Manwë.png"
import Headerlogo from "../../asserts/images/Logo_Manwe_simple.png"
import sky from "../../asserts/images/esquiador.png";
import rpi from "../../asserts/images/raspberry.png";
import dron from "../../asserts/images/dron.png";
import mobile from "../../asserts/images/mobile.png";
import youtube from "../../asserts/images/youtube.png";
import esp from "../../asserts/images/spain.png";


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
    componentDidMount() {
        document.title = "Manwë"
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add('home')
    }
    render() {
        return (
            <>
                <Container fluid="true">
                    <Container id="main">
                        <Row>
                            <Col className="align-self-end">
                                <p class="language">ESP</p>
                                <img src={esp} alt="Español" class="language" />
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
                                    <img id="logo" src={logo} alt="Logo" class="img" />
                                </Row>
                            </Col>
                            <Col className="justify-content-end">
                                <Link to="/contacto"><p style={{ textAlign: `end` }}>Contacto</p></Link>
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
                            <p class="summary">Esquiar o practicar alpinismo en cualquier parte con la seguridad de ser encontrado es ahora posible,
                            </p>
                            <p class="summary">ya seas enterrado por un alud o estés perdido entre la niebla o tormentas.
                            </p>
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
                            La tarjeta de emisión Manwë te mantendrá visible para el dron.
                            Con su reducido tamaño podrás llevarla siempre encima.</p>
                        </Col>
                    </Row>
                    <Row style={text}>
                        <Col>
                            <p class="summary2">El sistema de detección embarcado en un dron agiliza la búsqueda reduciendo el tiempo y la exposición de los rescatadores.</p>
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
                            <p class="title-blue">Manwë App</p>
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