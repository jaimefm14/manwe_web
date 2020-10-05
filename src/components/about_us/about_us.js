import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about_us.css';
import Footer from '../footer/Footer';

import station from '../../asserts/images/station.jpg';
import esquiador from '../../asserts/images/esquiador.jpg'

class aboutUs extends React.Component {
    componentDidMount() {
        document.title = "Manwë - Sobre Nosotros"
    }
    render() {
        return (
            <Container fluid="true">
                <div class="background-grey">
                    <Row>
                        <h1>
                            Sobre Nosotros
                        </h1>
                    </Row>
                    <Row>
                        <Col><img width="90%" src={station} alt="estacion" /></Col>
                        <Col>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Perspiciatis id aspernatur voluptatibus molestiae omnis at officiis
                                asperiores inventore rerum? Maxime excepturi ipsa, cumque officia ipsum,
                                expedita quod alias incidunt atque eius aliquid voluptates tempore
                                id eum libero, autem necessitatibus ab?
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <h2>Nuestro Equipo</h2>
                </Row>
                <Row>
                    <Col>
                        <h3>Marcos Redondo</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis id aspernatur voluptatibus molestiae omnis at officiis
                            asperiores inventore rerum? Maxime excepturi ipsa, cumque officia ipsum,
                            expedita quod alias incidunt atque eius aliquid voluptates tempore
                            id eum libero, autem necessitatibus ab?
                        </p>
                    </Col>
                    <Col><img width="90%" src={esquiador} alt="estacion" /></Col>
                </Row>
                <Row>
                    <Col><img width="90%" src={esquiador} alt="estacion" /></Col>
                    <Col>
                        <h3>Juan Luis Hernández</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis id aspernatur voluptatibus molestiae omnis at officiis
                            asperiores inventore rerum? Maxime excepturi ipsa, cumque officia ipsum,
                            expedita quod alias incidunt atque eius aliquid voluptates tempore
                            id eum libero, autem necessitatibus ab?
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Jaime Fernández</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis id aspernatur voluptatibus molestiae omnis at officiis
                            asperiores inventore rerum? Maxime excepturi ipsa, cumque officia ipsum,
                            expedita quod alias incidunt atque eius aliquid voluptates tempore
                            id eum libero, autem necessitatibus ab?
                        </p>
                    </Col>
                    <Col><img width="90%" src={esquiador} alt="estacion" /></Col>
                </Row>
                <Footer></Footer>
            </Container>
        )
    }
}

export default aboutUs;