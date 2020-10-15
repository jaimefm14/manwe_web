import React from 'react';
import './form.scss';
import ReactGA from 'react-ga';
import { Link } from "react-router-dom";

import { Form, Col, Container, Row } from 'react-bootstrap'

import arrowL from '../../asserts/images/arrow_l.png';

import Footer from '../footer/Footer';

var top = {
  paddingLeft: `5vw`,
  paddingTop: `5vw`,
  fontFamily: `Poppins`,
  fontSize: `bold`
}

const trackingId = "UA-30843009-3";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function sendMail() {
  var div = document.getElementById("popUp");
  div.removeAttribute("style");
}

class form extends React.Component {
  componentDidMount() {
    document.title = "Manwë"
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add('form')
  }
  render() {
    return (
      <>

        <Container>

          <Row style={top}>
            <Col>
              <Link to="/"><img src={arrowL} alt="Flecha" class="Flecha" /></Link>
            </Col>
            <Col md={{ span: 9, offset: 1 }}>{` `}</Col>
            <Col><p class="titletop">Contacto</p></Col>
          </Row>

        </Container>

        <Container>

          <Form>
            <Form.Group as={Col} controlId="formGrid-Nombre">
              <Form.Label class="titlecontacta">Nombre</Form.Label>
              <Form.Control type="Nombre" placeholder="Nombre" />
            </Form.Group>

            <Row>
              <Form.Group controlId="formGrid-mail">
                <Form.Label class="titlecontacta">Email</Form.Label>
                <Form.Control placeholder="Email" />
              </Form.Group>
              <Col md={{ span: 1, offset: 1 }}>{` `}</Col>
              <Form.Group controlId="formGrid-telefono" >
                <Form.Label class="titlecontacta">Teléfono</Form.Label>
                <Form.Control placeholder="Teléfono" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formGrid-mensaje">
              <Form.Label class="titlecontacta">Mensaje</Form.Label>
              <Form.Control as="textarea" rows="4" placeholder="Tu mensaje" />
            </Form.Group>

            <button class="button1" onClick={sendMail}>
              Enviar
            </button>

          </Form>

          <div id="popUp" class="alert alert-success alert-dismissible fade show" role="alert" style={{ display: 'none' }}>
            <strong>¡Mensaje enviado!</strong> Pronto nos pondremos en contacto contigo.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" fontFamily="Poppins">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        </Container>

        <Footer></Footer>

      </>
    )
  }
}

export default form;