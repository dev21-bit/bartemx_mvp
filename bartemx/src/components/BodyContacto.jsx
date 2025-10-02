import React from 'react'
import Container from 'react-bootstrap/Container';

const BodyContacto = () => {
  return (
    <Container className='containerbodyqba'>
        <div className='contcontenido justify-content-md-center'>
          <h2 className='titulo1qs'>Un puente entre el arte tradicional y la tecnología global. <br /><strong className='qstext'>Contacto</strong> </h2>

            <div className='containercontacto'>
                <p><strong>WhatsApp</strong> <br /> +52 492 243 7155</p>
                <p><strong>Email</strong> <br /> contacto@bolsaartemx.com</p>
                <p className='dirr'><strong>Dirección</strong> <br /> Privada Hacienda de la concepción #111-A <br />
                    Fracc. Santa Rita. CP 98610 <br />Guadalupe, Zacatecas, México</p>
            </div>
        </div>
    </Container>
  );
};

export default BodyContacto;