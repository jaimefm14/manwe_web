import React from 'react';
import TagManager from 'react-gtm-module';

import { Container, Row } from 'react-bootstrap';

import './politicas.scss';

import {MenuPoliticas} from '../nav/menu';
import Footer from '../footer/Footer';

const tagManagerArgs = {
    gtmId: 'GTM-5LMQPWS'
}

TagManager.initialize(tagManagerArgs)

class PPrivacidad extends React.Component {
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
                            <h1>Política De Privacidad</h1>
                        </Row>
                    </Container>
                    <Row className="text">
                        <p className="title">1. ¿Qué son las cookies?</p>
                        <p>Hola</p>
                    </Row>
                    <Footer></Footer>
                </Container>
            </>
        )
    }
}

export default PPrivacidad;