import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';
import { Link } from "react-router-dom";
import './about_us.scss';
import Footer from '../footer/Footer';

import station from '../../asserts/images/station.jpg';
import esquiador from '../../asserts/images/esquiador.jpg';
import arrowR from '../../asserts/images/arrow_r.png';

const trackingId = "UA-30843009-3";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

class aboutUs extends React.Component {
    componentDidMount() {
        document.title = "Manwë - Sobre Nosotros"
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add('aboutUs')
    }
    render() {
        return (
            <Container fluid="true">
                <Container fluid="true" className="background-grey">
                    <Row>
                        <Col md={6}>
                            <p class="top-text">Sobre Nosotros</p>
                        </Col>
                        <Col md={{ span: 2, offset: 4 }}>
                            <Link to="/"><img src={arrowR} className="arrow-img" alt="Volver"/></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col><img width="80%" src={station} alt="estacion" /></Col>
                        <Col>
                            <p>
                                Manwë nace de la pasión por la montaña y la tecnología para así, afianzar más aún la seguridad de los esquiadores y montañeros frente a los aludes de nieve.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Row className="ourTeam">
                    <Col>
                        <img width="90%" src={esquiador} alt="Juan Luis Hernández" />
                        <h3>Juan Luis Hernández</h3>
                        <p>
                            CTO. Director de tecnología.
                        </p>
                    </Col>
                    <Col>
                        <img width="90%" src={esquiador} alt="Marcos Redondo" />
                        <h3>Marcos Redondo</h3>
                        <p>
                            CEO. Director general.
                        </p>
                    </Col>
                    <Col>
                        <img width="90%" src={esquiador} alt="Jaime Fernández" />
                        <h3>Jaime Fernández</h3>
                        <p>
                            CIO. Director de información.
                        </p>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        )
    }
}

export default aboutUs;