import React from 'react';
import './App.css';
import Card from './components/Card'
import Nav from './components/Navbar'
import { Link } from 'react-router-dom'
import Local from '../src/lugares.json'

// Local.map((x,index)=>{
//   x[index].menuItem.map()
// })

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className="titulo">Lugares</h1>
      <p className="subtitulo">X Lugares cadastrados</p>
      <div class="col-lg-6">
        <div className="cross"><Link to="/cadastroSilvaLanches">⊕</Link> </div>
        <Card></Card>

      </div>

    </div>
  );
}

export default App;
