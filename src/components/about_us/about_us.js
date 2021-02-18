import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TagManager from 'react-gtm-module';
import './about_us.scss';
import Footer from '../footer/Footer';

import station from '../../asserts/images/station.jpg';
import esquiador from '../../asserts/images/esquiador.jpg';
import fotoJaime from '../../asserts/images/jaime.jpg';
import { MenuHome } from '../nav/menu';

const tagManagerArgs = {
    gtmId: 'GTM-5LMQPWS'
}

TagManager.initialize(tagManagerArgs)

class aboutUs extends React.Component {
    componentDidMount() {
        document.title = "Manwë - Sobre Nosotros"
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add('aboutUs')
    }
    render() {
        return (
            <Container fluid="true">
                <MenuHome></MenuHome>
                <Container fluid="true" className="background-grey" style={ {paddingTop:'12vw'} }>
                    <Row style={{ padding: `2vw 7vw 2vw 7vw` }} >
                        <Col><img width="80%" src={station} alt="estacion" /></Col>
                        <Col>
                            <p>
                                Manwë was born from a passion for the mountains and technology in order to strengthen the safety of skiers and mountaineers against snow avalanches.
                                Our mission is to develop a detection system to find buried victims.
                                </p>
                            <br />
                            <p>
                                This system is linked to a mobile app with topographic maps, in which a heat map is created where the scan is carried out. If several detection systems are used, these can be synchronized to speed up the search and not sweep areas already scanned previously.
                                Manwë locates signals from our transmitter card which its size is like a credit card.
                            </p>
                            <br />
                            <p>
                                Our detection system is focused on rescue groups, ski resorts, security forces and individuals. The system can be carried by hand, on rescue dogs and drones to speed up the search.<br />
                            Likewise, this device would also serve for landslides or earthquakes.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Row className="ourTeam">
                    <Col>
                        <img width="90%" src={esquiador} alt="Juan Luis Hernández" />
                        <h3>Juan Luis Hernández</h3>
                        <p>
                            CTO. Chief Technology Officer.
                        </p>
                        <p>
                            Computer engineer from the Polytechnic University of València.
                        <br />
                        Currently he continues in the master of data analytics taught by the School of Entrepreneurs of Valencia.
                        </p>
                    </Col>
                    <Col>
                        <img width="90%" src={esquiador} alt="Marcos Redondo" />
                        <h3>Marcos Redondo</h3>
                        <p>
                            CEO. Chief Executive Officer.
                        </p>
                        <p>
                            Aerospace engineering student in Politechnic University of València.
                        </p>
                    </Col>
                    <Col>
                        <img width="90%" src={fotoJaime} alt="Jaime Fernández" />
                        <h3>Jaime Fernández</h3>
                        <p>
                            CIO. Chief Information Officer.
                        </p>
                        <p>
                            Industrial electronic and automatic engineer from the University of Castilla-La Mancha.
                            <br />
                            Increasing his knowledge with computer engineering master in University of Castilla-La Mancha.
                        </p>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        )
    }
}

export default aboutUs;