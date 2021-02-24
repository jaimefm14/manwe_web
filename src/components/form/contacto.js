import React from 'react';
import './form.scss';
import TagManager from 'react-gtm-module';
import { Form, Col, Container, Row } from 'react-bootstrap'

import Footer from '../footer/Footer';

import emailjs from 'emailjs-com';
import { MenuHome } from '../nav/menu';

const tagManagerArgs = {
  gtmId: 'GTM-5LMQPWS'
}

TagManager.initialize(tagManagerArgs)


var contact = {
  paddingTop: `5vw`,
  paddingBottom: `5vw`,
  float: `center`,
  margin: `0 auto`
}

class form extends React.Component {

  sendMail(e) {
    e.preventDefault();

    var name = document.getElementById("formGrid-Nombre");
    var mail = document.getElementById("formGrid-mail");
    var tel = document.getElementById("formGrid-telefono");
    var message = document.getElementById("formGrid-mensaje");
    if (isEmpty(name.value) || isEmpty(mail.value) || isEmpty(message.value) || isEmpty(tel)) {
      let div = document.getElementById("popUp-err");
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

      let div = document.getElementById("popUp-ok");
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
        <MenuHome></MenuHome>
        <Row style={ {paddingTop:'5vw'} }>
          <Form style={contact}>
            <Form.Group controlId="formGrid-Nombre">
              <Form.Label className="">Name</Form.Label>
              <Form.Control type="Nombre" placeholder="Name" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGrid-mail">
                <Form.Label className="">Email</Form.Label>
                <Form.Control placeholder="Email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGrid-telefono" >
                <Form.Label className="">Phone</Form.Label>
                <Form.Control placeholder="Phone number" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGrid-mensaje">
              <Form.Label className="">Message</Form.Label>
              <Form.Control as="textarea" rows="4" placeholder="Your message" />
            </Form.Group>
            <button className="button1" onClick={this.sendMail.bind(this)}>
              Send
              </button>
          </Form>
        </Row>
        <div id="popUp-ok" className="alert alert-success alert-dismissible fade show" role="alert" style={{ display: 'none' }}>
          <strong>Message sent!</strong> We will get in touch with you soon.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" fontFamily="Poppins">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div id="popUp-err" className="alert alert-danger alert-dismissible fade show" role="alert" style={{ display: 'none' }}>
          <strong>Upps!</strong> Some fild is not completed.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" fontFamily="Poppins">
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
  return (typeof value == 'undefined' || value == null || value === "");
}