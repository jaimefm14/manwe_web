import React from 'react';
import './form.scss';
import ReactGA from 'react-ga';

import { Form, Button, Col, Container, Image, Row } from 'react-bootstrap'

import fondo from "../../asserts/images/cover.png";
import Flecha from "../../asserts/images/Flecha@2x.png";

import Footer from '../footer/Footer';



const trackingId = "UA-30843009-3";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

class contacto extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <img src={Flecha} alt="Flecha" class="Flecha" Link to="/Home" />
          </Col>
          <Col md={{ span: 1, offset: 1 }}>{` `}</Col>
          <Form.Group controlId="formGrid-Contacta" >
            <Form.Label class="title2">Contacta</Form.Label>
          </Form.Group>
        </Row>

        <Container>

          <Form>
            <Form.Group as={Col} controlId="formGrid-Nombre">
              <Form.Label class="title1">Nombre</Form.Label>
              <Form.Control type="Nombre" placeholder="Nombre" />
            </Form.Group>

            <Row>
              <Form.Group controlId="formGrid-mail">
                <Form.Label class="title1">Email</Form.Label>
                <Form.Control placeholder="Email" />
              </Form.Group>
              <Col md={{ span: 1, offset: 1 }}>{` `}</Col>
              <Form.Group controlId="formGrid-telefono" >
                <Form.Label class="title1">Teléfono</Form.Label>
                <Form.Control placeholder="Teléfono" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formGrid-mensaje">
              <Form.Label class="title1">Mensaje</Form.Label>
              <Form.Control as="textarea" rows="4" placeholder="Tu mensaje" />
            </Form.Group>

            <button class="button1">
              Enviar
            </button>

          </Form>

          <div class="alert alert-success alert-dismissible fade show" role="alert">
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

export default contacto;