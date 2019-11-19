
import React from 'react';
import CardInfo from '../components/CardInfo'
import Nav from '../components/Navbar'


const Informacoes = () => (
    <div class="col-lg-6">
        <Nav></Nav>
        <h1 className="titulo">Nome do Local</h1>

        <div className="cross"> </div>
        <CardInfo></CardInfo>
        <div className="cross"> </div>
        <CardInfo></CardInfo>
        <div className="cross"> </div>
        <CardInfo></CardInfo>
        <div className="cross"> </div>
        <CardInfo></CardInfo>
        <div className="cross"> </div>
        <CardInfo></CardInfo>
    </div>
);

export default Informacoes;