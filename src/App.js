import React from 'react';
import './App.css';
import Cards from './components/Card'
import Nav from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Nav></Nav>
        <h1 className="titulo">Lugares</h1>
        <p className="subtitulo">X Lugares cadastrados</p>

        <div class="col-lg-6">
          <div className="cross">⊕ </div>
          <Cards></Cards>
          <div className="cross">⊕</div>
          <Cards></Cards>
          <div className="cross">⊕</div>
          <Cards></Cards>
          <div className="cross">⊕</div>
          <Cards></Cards>
          <div className="cross">⊕</div>
          <Cards></Cards>
        </div>

      </div>
    </Router>

  );
}

export default App;
