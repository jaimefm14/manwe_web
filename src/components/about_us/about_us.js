import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';
import './about_us.scss';
import Footer from '../footer/Footer';

import station from '../../asserts/images/station.jpg';
import esquiador from '../../asserts/images/esquiador.jpg';
import { MenuAboutUs } from '../nav/menu';

const trackingId = "UA-30843009-3";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

class aboutUs extends React.Component {
    componentDidMount() {
        document.title = "Manwë - Sobre Nosotros"
        document.body.classList.remove(...document.body.classList);
        document.body.classList.add('aboutUs')
    }
    render() {
        return (
            <Container fluid="true">
                <Container fluid="true" className="background-grey">
                    <Row>
                        <MenuAboutUs></MenuAboutUs>
                    </Row>
                    <Row style={{padding: `2vw 7vw 2vw 7vw`}}>
                        <Col><img width="80%" src={station} alt="estacion" /></Col>
                        <Col>
                            <p>
                                Manwë nace de la pasión por la montaña y la tecnología para así, afianzar la seguridad de los esquiadores y montañeros frente a los aludes de nieve.
                                Nuestro proyecto consiste en el desarrollo de un dron de rescate, así como el software asociado a la busqueda de alpinistas sepultados por los aludes.<br/>
                                Nuestro principal proposito es ofrecer un emisor de señal para particulares de costo muy bajo para ser encontrados por nuestro drone de rescate, el cuál, 
                                poseerían estaciones de esquí, grupos de rescate y particulares, reduciendo en gran medida el tiempo de búsqueda con respecto a las tecnología existentes,
                                aumentando así las probabilidades de supervivencia.
                            </p>
                            <br/>
                            <p>
                                El sistema de rescate consiste en un dron que, a través de una app móvil, se le asigna un área en un mapa para ser escaneada. Seguidamente, el dron comienza un 
                                barrido del área marcada de manera autónoma. El sistema de detección integrado en el dron crea gradualmente una matriz asignando a cada celda la intensidad de 
                                proximidad detectada respecto a la vícitma, creando así un mapa de calor que es mostrado en la app, indicando al rescastador dónde se localiza la víctima.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Row className="ourTeam">
                    <Col>
                        <img width="90%" src={esquiador} alt="Juan Luis Hernández" />
                        <h3>Juan Luis Hernández</h3>
                        <p>
                            CTO. Director de tecnología.
                        </p>
                        <p>
                            Ingeníero Informatico por la Universidad Politécnica de Valencia. Aporta conocimientos computacionales y de 
                            programación, que nos serán muy útiles a la hora del desarrollo de la parte software del sistema de detección, 
                            así como de los sistemas de vuelo autónomo de dron. Pudiendo aportar, además, valores de trabajo en equipo, 
                            estructuración del trabajo y “clean code”. <br/>
                            Actualmente continua formandose en el Master de Data Analytics impartido por 
                            la Escuela de Empresarios de Valencia, por lo que podrá seguir mejorando el sistema haciéndolo más robusto incorporando 
                            métodos de minería de datos y machine learning para así conseguir una mayor precisión a la hora de la búsqueda, 
                            así como mayor rapidez.
                        </p>
                    </Col>
                    <Col>
                        <img width="90%" src={esquiador} alt="Marcos Redondo" />
                        <h3>Marcos Redondo</h3>
                        <p>
                            CEO. Director general.
                        </p>
                        <p>
                            Estudiante de ingeniería aeroespacial en la Universidad Politécnica de Valencia. 
                            Cuenta con experiencia en CAD y fabricación con materiales compuestos e impresión 3D enfocados a material de 
                            alpinismo y ciclismo/triatlón. Además, es encargado de la fabricación del fuselaje en fibra de carbono del UAV 
                            del equipo Hermes UPV.<br/>
                            Con sus conocimientos aportará un gran valor a la parte de fabricación del prototipo, además de organizar y 
                            guiar el proyecto por el mejor camino encargándose del diseño general y mecánico del sistema.<br/>
                            Así mismo, aporta pensamiento crítico, adaptabilidad y cooperación son como "soft skills".
                        </p>
                    </Col>
                    <Col>
                        <img width="90%" src={esquiador} alt="Jaime Fernández" />
                        <h3>Jaime Fernández</h3>
                        <p>
                            CIO. Director de información.
                        </p>
                        <p>
                            Graduado en ingeniería electrónica industrial y automática por la universidad de Castilla-La Mancha. 
                            Cuenta con dos años de experiencia en desarrollo de software embebido además de un año de experiencia en 
                            desarrollo de aplicaciones web.<br/>
                            Gracias a los conocimientos adquiridos en el ámbito laboral puedo trabajar en el desarrollo de software de 
                            bajo nivel, así como en el diseño de la electrónica necesaria para dotar al sistema de los sensores y 
                            actuadores que requiera.<br/>
                            Por otro lado, también aporta conocimientos en el desarrollo de las aplicaciones web y 
                            para smartphone necesarias para la visualización de datos.
                        </p>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        )
    }
}

export default aboutUs;