import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import logo1 from '../Assets/Img/ImgsLogos/logoL_b-artemx_gc4B494A.png'
import {Link} from 'react-router-dom'


const menuData = [
    {
        name:"Home",
        path: '/'
    },
    {
        name:"¿Quiénes somos?",
        path:'/quienessomos'
    },
    {
        name:"¿Qué es Bolsa del Arte?",
        path:'/bolsaarte'
    },
    {
      name:"Regístrate",
      path:'/formulario'
  },
   // {
     //   name:"REGÍSTRATE",
      //  path:'/registro'
   // },
    {
        name:"FAQ's",
        path:'/faqs'
    },
    {
        name:"Contacto",
        path:'/contacto'
    },
    
   
]
const TopNav = () => {
  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand"><Image src={logo1} fluid /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                {
                    menuData.map((item)=>(
                        <Link className="links" to={item.path} key={item.name}>{item.name}  
                        </Link>
                    ))
                }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;