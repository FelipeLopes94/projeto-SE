import React from 'react';
import './App.css';
import Cards from './components/Card'
import Nav from './components/Navbar'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className="titulo">Lugares</h1>
      <p className="subtitulo">X Lugares cadastrados</p>
      <div class="col-lg-6">
        <div className="cross"><a>⊕</a> </div>
        <Cards></Cards>
        <div className="cross"><Link to="/cadastro">⊕</Link> </div>
        <Cards></Cards>
        <div className="cross"><a>⊕</a></div>
        <Cards></Cards>
        <div className="cross"><a>⊕</a></div>
        <Cards></Cards>
        <div className="cross"><a>⊕</a></div>
        <Cards></Cards>
      </div>

    </div>
  );
}

export default App;
