import React from 'react';
import './Home.scss';

import TagManager from 'react-gtm-module';

import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../footer/Footer';

import video from "../../asserts/images/Home1080.mp4"
import logo from "../../asserts/images/Logo_Manwë.png"
import Headerlogo from "../../asserts/images/Logo_Manwe_simple.png"
import sky from "../../asserts/images/esquiador.png";
import rpi from "../../asserts/images/raspberry.png";
import dron from "../../asserts/images/dron.png";
import mobile from "../../asserts/images/mobile.png";
import youtube from "../../asserts/images/youtube.png";
import { MenuHome } from '../nav/menu';

var intro = {
    background: `#F0F0F0`,
    paddingLeft: `5vw`,
    paddingTop: `5vw`,
    paddingBottom: `5vw`,
    lineHeight: `1`,
    fontFamily: `Poppins`,
    fontSize: `bold`
}

var text = {
    background: `#FFFFFF`,
    paddingLeft: `5vw`,
    paddingTop: `5vw`,
    paddingBottom: `5vw`,
    lineHeight: `1`,
    fontFamily: `Poppins`,
    fontSize: `bold`
}

var blue = {
    background: `#36A9E1`,
    paddingLeft: `5vw`,
    paddingRight: `10vw`,
}

const tagManagerArgs = {
    gtmId: 'GTM-5LMQPWS'
}

TagManager.initialize(tagManagerArgs)

class Home extends React.Component {
    componentDidMount() {
        document.title = "Manwë"
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add('home')
    }
    render() {
        return (
            <>

                <Container id="main" fluid="true">
                    <Container fluid="true" style={{background: `#F0F0F0`}}>

                        <Row>
                            <video id="video" className='videoTag' autoPlay loop muted>
                                <source src={video} type='video/mp4' />
                            </video>
                        </Row>

                        <Row>
                            <MenuHome></MenuHome>
                        </Row>

                        <Row>
                            <Col>
                                <Row className="justify-content-center">
                                    <img id="header" src={Headerlogo} alt="Manwë" />
                                </Row>
                                <Row className="justify-content-center">
                                    <img id="logo" src={logo} alt="Logo" className="img" />
                                </Row>
                            </Col>
                        </Row>

                    </Container>



                    <Row style={intro}>
                        <Col>
                            <p className="title">Manwë</p>
                            <p className="subtitle">your rescue system</p>
                            <hr className="line" />
                            <p className="summary">Skiing or mountaineering everywhere with safety of being found is now possible,
                                buried by an avalanche or lost in fog or storms.
                            </p>
                        </Col>
                        <Col>
                            <img src={sky} alt="esquiador" className="img" />
                        </Col>
                    </Row>
                    <Row style={text}>
                        <Col>
                            <img id="rpi" src={rpi} alt="Raspberry Pi" className="img" />
                        </Col>
                        <div className="vl"></div>
                        <Col>
                            <p className="summary2" style={{ paddingLeft: `8vw` }}>
                                Manwë's transmitter card will keep you visible to our detection device.
                                With its small size you will be able to carry it always with you.</p>
                        </Col>
                    </Row>
                    <Row style={text}>
                        <Col>
                            <p className="summary2">Detection system speed up rescue time and reduce exposing to risk by rescuers.
                            <br />
                            It can be carried by hand, on rescue dogs and drones.</p>
                        </Col>
                        <Col>
                            <img id="dron" src={dron} alt="dron" className="img" />
                        </Col>
                    </Row>
                    <Row style={blue}>
                        <Col>
                            <img id="youtube" src={youtube} alt="Usando movil" className="img" />
                        </Col>
                        <Col>
                            <img id="mobile" src={mobile} alt="Mobile" className="img" />
                            <p className="title-blue">Manwë App</p>
                            <p className="summary-blue">A topographical app where a heat map of scanned areas is created.<br /><br />
                                If multiple devices are used, they can be synchronized.</p>
                        </Col>
                    </Row>
                    <Footer></Footer>
                </Container>
            </>
        )
    }
}

export default Home;