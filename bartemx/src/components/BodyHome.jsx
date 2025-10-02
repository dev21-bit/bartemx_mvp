import React from "react"
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import logo1 from '../Assets/Img/ImgsLogos/logoL_b-artemx_gc4B494A.png'
import logo2 from '../Assets/Img/ImgsLogos/solana.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BodyHome = () => {
  return (
    <Container fluid className="containerbodyhome" >
      <h1 className="titulo1home">El arte encuentra su valor real</h1>
      <div className="contlogohome">
        <Image className="logohome" src={logo1} fluid />
      </div>
      <h6 className="subtitulo1home">Lanzamiento Oficial <strong>| Septiembre 2025 | </strong>Los Ángeles, California</h6>
      <div className="footerhome">
        <Container className="justify-content-center">
            <Row>
                <Col className="textfooter">POWERED BY</Col>
                <Col className="logofooter"><Image className="logosol" src={logo2} fluid /></Col>
            </Row>
        </Container>
      </div>
    </Container>
  );
};

export default BodyHome;