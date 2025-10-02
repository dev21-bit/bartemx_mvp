import React from 'react';
import TopNav from './components/TopNav';
import BodyQS from './components/BodyQS'
import BodyHome from './components/BodyHome'
import BodyQBA from './components/BodyQBA';
import BodyFAQs from './components/BodyFAQs';
import BodyContacto from './components/BodyContacto';
import BodyForm from './components/BodyForm';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <TopNav/>
        <Routes>
          <Route path="/" element={<BodyHome/>}/>
          <Route path="/quienessomos" element={<BodyQS/>}/>
          <Route path="/bolsaarte" element={<BodyQBA/>}/>
          <Route path="/faqs" element={<BodyFAQs/>}/>
          <Route path="/contacto" element={<BodyContacto/>}/>
          <Route path="/formulario" element={<BodyForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
