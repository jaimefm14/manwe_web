import React from 'react';
import './form.css';

import { Form, Button, Col, Container, Image, Row } from 'react-bootstrap'

import fondo from "../../asserts/images/cover.png";
import Flecha from "../../asserts/images/Flecha@2x.png";

import Footer from '../footer/Footer';

var flecha = {
  backgroundImage: `url(${Flecha})`,
  backgroundSize: `cover`,
  maxHeight: `50vw`,
  display: `grid`,
  opacity: "1"
}

var header = {
  height: `5vw`,
  marginTop: `5vw`,
}

var text = {
  background: `#F0F0F0`,
  paddingLeft: `5vw`,
  paddingTop: `5vw`,
  lineHeight: `1`,
  fontFamily: `Poppins`,
  fontSize: `regular`
}

var text2 = {
  paddingLeft: `5vw`,
  paddingTop: `5vw`,
  lineHeight: `1`,
  fontFamily: `Quicksand`,
  fontSize: `bold`
}

var text3 = {
  paddingLeft: `5vw`,
  paddingTop: `5vw`,
  lineHeight: `8`,
  fontFamily: `Poppins`,
  fontSize: `regular`
}

class contacto extends React.Component {
  componentDidMount() {
    document.title = "Manwë - Contacto"
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <img src={Flecha} alt="Flecha" class="Flecha" />
          </Col>

          <Form.Group controlId="formGrid-Contacta" >
            <Form.Label class="title1">Contacta</Form.Label>
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



      </>
    )
  }
}

export default contacto;