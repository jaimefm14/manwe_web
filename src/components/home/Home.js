//Import React Modules
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TagManager from 'react-gtm-module';
import CookieBot from 'react-cookiebot/lib/CookieBot';

//Import style
import './Home.scss';

//Import components
import Footer from '../footer/Footer';
import { MenuHome } from '../nav/menu';

//Import asserts
import video from "../../asserts/images/Home1080.mp4"
import logo from "../../asserts/images/Logo_Manwë.png"
import sky from "../../asserts/images/esquiador.png";
import tarjeta from "../../asserts/images/tarjeta.png";
import rpi from "../../asserts/images/raspberry.png";
import mobile from "../../asserts/images/mobile.png";
import youtube from "../../asserts/images/youtube.png";

/*Define constants*/
//Cookiebot id
const domainGroupId = '74b3d974-3d75-400d-9c33-aec6c042a072';
//Tag manager id
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
                <CookieBot domainGroupId={domainGroupId} language="EN"/>
                <Container id="main" fluid="true">
                    <Container fluid="true" style={{background: `#F0F0F0`}}>

                        <Row>
                            <video id="video" className='videoTag' autoPlay loop muted>
                                <source src={video} type='video/mp4' />
                            </video>
                        </Row>

                        <MenuHome></MenuHome>

                        <Row style={{paddingTop:'2rem'}}>
                            <Col>
                                <Row className="justify-content-center">
                                    <img id="logo" src={logo} alt="Logo" className="img" />
                                </Row>
                            </Col>
                        </Row>

                    </Container>

                    <Row className="intro">
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
                    <Row className="left-text">
                        <Col>
                            <img id="tarjeta" src={tarjeta} alt="Tarjeta Manwe" className="img" style={{marginLeft:'0'}} />
                        </Col>
                        <div className="vl"></div>
                        <Col>
                            <p className="summary2" style={{ paddingLeft: '3rem' }}>
                                Manwë's transmitter card will keep you visible to our detection device.
                                With its small size you will be able to carry it always with you.</p>
                        </Col>
                    </Row>
                    <Row className="text">
                        <Col>
                            <p className="summary2">Detection system speed up rescue time and reduce exposing to risk by rescuers.
                            <br />
                            It can be carried by hand, on rescue dogs and drones.</p>
                        </Col>
                        <Col>
                            <img id="rpi" src={rpi} alt="Raspberry" className="img" />
                        </Col>
                    </Row>
                    <Row className="blue">
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