import React from 'react';
import TagManager from 'react-gtm-module';

import { Col, Container, Row } from 'react-bootstrap';

import './politicas.scss';

import { MenuPoliticas } from '../nav/menu';
import Footer from '../footer/Footer';

const tagManagerArgs = {
    gtmId: 'GTM-5LMQPWS'
}

TagManager.initialize(tagManagerArgs)

class PCookies extends React.Component {
    componentDidMount() {
        document.title = "Manwë"
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add('privacidad')
    }
    render() {
        return (
            <>
                <Container id="main" fluid="true">
                    <Container className="header" fluid="true">
                        <Row>
                            <MenuPoliticas></MenuPoliticas>
                        </Row>
                        <Row>
                            <h1>Cookies Policy</h1>
                        </Row>
                    </Container>
                    <Row className="cont_text" style={{paddingTop:`5rem`}}>
                        <Col className="title">
                            <p>Last Update: <span className="text">23 th February 2021</span></p>
                            <p>Effective Date: <span className="text">23 th February 2021</span></p>
                            <p className="text">According to 22.2 article of Law 34/2002 of 11 July, by Information
                            and Electronic Commerce Services and Societies of Spain, this page have as finality report you clear and
                            accurate about cookies that use Manwë's web.
                            </p>
                        </Col>
                    </Row>
                    <Row className="cont_text">
                        <Col className="title">
                            <p>1. What are cookies?</p>
                            <p className="text">A cookie is a small text file that websites that you visit send to navegayor
                            and they allow to website to remember about your visit, like your prefer language and other options,
                            in order to facilitate your next visit and do the web website usable. Cookies plays a very important
                            role and they contribute to have a best user experience in navigation.</p>

                            <p className="text">Cookies used to allow communication between user computer and network to only provide
                            service requested by the user, are exempt to obey the 22.2 article of LSSI-CE.</p>
                        </Col>
                    </Row>
                    <Row className="cont_text">
                        <Col className="title">
                            <p>2. Types of cookies</p>
                            <p className="text">Depend on the entity that manage the domain where the cookies are send and how
                            the data that the cookies obtain, we can differentiate two types, own cookies and third part cookies.</p>

                            <p className="text">There are a second classification depended on the time that the cookie was stored in
                            the client's navigator, they can be session cookies or persistant cookies.</p>

                            <p className="text">Finally, there are an other classification with five types of cookies depend on the
                            cookies's data purpose: technical cookies, customized cookies, analysis cookies, advertising cookies and
                            behavioral advertising cookies.</p>
                        </Col>
                    </Row>
                    <Row className="cont_text">
                        <Col className="title">
                            <p>3. Cookies use in this web</p>
                            <p className="text">Next, we are going to identify what cookies are use in this website, and their
                            typology and function.</p>

                            <p className="text">
                                <li><span className="bold">Analysis Cookie: </span>
                                    this website use Google's service, Google Analytics, for analyze the web, it allows measure and
                                    analyze the navigation. In your browser you can observe cookies from this service. This cookie is own, 
                                    on session and for analysis. Throw this web analytics we obtain information related with the number of users
                                    that access to the page, the number of visits, frecuency and repeat of visits, duration, browser used,
                                    network company, language, type of device and city from you are accessing. This information allows us 
                                    to improve the service. To warrant your anonymity, Google convert your information into anonymous giving up 
                                    your IP before store it, with this Google Analytics is not use to locate or to obtain recognizable personal information  
                                    of website visitors. Google only can send information obtain by Google Analytics to third part when it is lawfully compulsory
                                    for do it. According with the features conditions of Google Analytics service, Google can not associate your
                                    IP with other data stored by Google.
                                </li>
                                <li><span className="bold">Technical Cookie: </span>
                                in addition, the website downloads a cookie called "CookieConsent", own, technical and on session. It
                                manage the consent of the user for the use of cookies in this website, it have the objetive to remember 
                                the users that have accept cookies and the users that not to display or not information about cookies in
                                the bottom of the page.
                                </li>
                            </p>
                        </Col>
                    </Row>
                    <Row className="cont_text">
                        <Col className="title">
                            <p>4. How to disable cookies</p>
                            <p className="text">You can allow, block and delete installed cookies from your computer by the navigator
                            configuration.</p>

                            <p className="text">Next, you can access to frecuency navigator's configuration and accept, install or disable
                            cookies:
                                <li><a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">Firefox</a></li>
                                <li><a href="https://support.google.com/chrome/answer/95647?hl=en">Google Chrome</a></li>
                                <li><a href="https://support.apple.com/en-us/HT201265">Safari</a></li>
                            </p>
                        </Col>
                    </Row>
                    <Row className="cont_text" style={{paddingBottom:`5rem`}}>
                        <Col className="title">
                            <p>5. Consent Principle</p>
                            <p className="text">By marking the square of accepting the "Cookies Policy", arranged in a pop-up on the website, 
                            we assume that you are lending your consent principle.</p>

                            <p className="text">If you have any doubts about cookies policy you can contact as by <a href="mailto:hola@manwe.tech">mail</a>.
                            </p>

                            <p className="text">We can store cookies in your device if their are strictly necessary for the correct working of the 
                            page, according to  arranged in the law. For the other types of cookies, we need your consent.</p>
                        </Col>
                    </Row>
                    <Footer></Footer>
                </Container>
            </>
        )
    }
}

export default PCookies;