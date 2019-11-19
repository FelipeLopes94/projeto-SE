
import React from 'react';
import Cards from '../components/Card'
import Nav from '../components/Navbar'


const Informacoes = () => (
    <div class="col-lg-6">
        <Nav></Nav>
        <h1 className="titulo">Nome do Local</h1>

        <div className="cross"> </div>
        <Cards></Cards>
        <div className="cross"> </div>
        <Cards></Cards>
        <div className="cross"> </div>
        <Cards></Cards>
        <div className="cross"> </div>
        <Cards></Cards>
        <div className="cross"> </div>
        <Cards></Cards>
    </div>
);

export default Informacoes;