import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Card'
import Nav from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className="titulo">Lugares</h1>
      <p className="subtitulo">X Lugares cadastrados</p>
      <div class="col-md-5">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>

    </div>
  );
}

export default App;
