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
                    <Row className="cont_text">
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
                            and it allows to website to remember about your visit, like your prefer language and other options,
                            in order to facilitate your next visit and do the web website usable.</p>
                        </Col>
                    </Row>
                    <Footer></Footer>
                </Container>
            </>
        )
    }
}

export default PCookies;