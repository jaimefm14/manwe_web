import React from 'react';
import ReactGA from 'react-ga';

import { Container, Row, Col } from 'react-bootstrap';

import './politicas.scss';

import {MenuPoliticas} from '../nav/menu';
import Footer from '../footer/Footer';

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