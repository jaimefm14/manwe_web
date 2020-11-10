import React from 'react';
import './form.scss';
import ReactGA from 'react-ga';
import { Link } from "react-router-dom";

import { Form, Col, Container, Row } from 'react-bootstrap'

import arrowL from '../../asserts/images/arrow_l.png';

import Footer from '../footer/Footer';

import emailjs from 'emailjs-com';

const trackingId = "UA-30843009-3";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);


class form extends React.Component {

  sendMail(e) {
    e.preventDefault();

    var name = document.getElementById("formGrid-Nombre");
    var mail = document.getElementById("formGrid-mail");
    var tel = document.getElementById("formGrid-telefono");
    var message = document.getElementById("formGrid-mensaje");
    if (isEmpty(name.value) || isEmpty(mail.value) || isEmpty(message.value) || isEmpty(tel)) {
      var div = document.getElementById("popUp-err");
      div.removeAttribute("style");
    }
    else {
      // Definimos el email
      emailjs.send("service_9fos9bc", "template_q931m3q", {
        nombre: name.value,
        telefono: tel.value,
        mail: mail.value,
        message: message.value,
      }, "user_6eCP7q20r4UHogzxMZmv0");

      var div = document.getElementById("popUp-ok");
      div.removeAttribute("style");
    }
  }



  componentDidMount() {
    document.title = "Manwë"
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add('form');

  }
  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col md={2}>
            <Link to="/"><img src={arrowL} alt="Flecha" class="Flecha" /></Link>
          </Col>
          <Col md={{ span: 1, offset: 9 }}><p class="titletop">Contacto</p></Col>
        </Row>
        <Row>
          <Form>
            <Form.Group controlId="formGrid-Nombre">
              <Form.Label className="">Nombre</Form.Label>
              <Form.Control type="Nombre" placeholder="Nombre" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGrid-mail">
                <Form.Label class="">Email</Form.Label>
                <Form.Control placeholder="Email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGrid-telefono" >
                <Form.Label class="">Teléfono</Form.Label>
                <Form.Control placeholder="Teléfono" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGrid-mensaje">
              <Form.Label class="">Mensaje</Form.Label>
              <Form.Control as="textarea" rows="4" placeholder="Tu mensaje" />
            </Form.Group>
            <button class="button1" onClick={this.sendMail.bind(this)}>
              Enviar
              </button>
          </Form>
        </Row>
        <div id="popUp-ok" class="alert alert-success alert-dismissible fade show" role="alert" style={{ display: 'none' }}>
          <strong>¡Mensaje enviado!</strong> Pronto nos pondremos en contacto contigo.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" fontFamily="Poppins">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div id="popUp-err" class="alert alert-danger alert-dismissible fade show" role="alert" style={{ display: 'none' }}>
          <strong>¡Upps!</strong> Algún campo no está correcto.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" fontFamily="Poppins">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Footer></Footer>
      </Container>
    )
  }
}

export default form;

function isEmpty(value) {
  return (typeof value == 'undefined' || value == null || value == "");
}