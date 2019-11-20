
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Local from '../../lugares.json'


const InfoCanalCafe = () => (
    <div class="col-lg-6">
        <Nav></Nav>
        <Link to="cadastroSilvaLanches"><img className="seta-voltar" alt="seta voltar" src="https://img.icons8.com/plasticine/100/000000/chevron-left.png" /></Link>
        <h1 className="titulo">{Local[2].name}</h1>
        <p className="numero-pratos">{Local[2].menuItems.length} Pratos</p>
        {Local[2].menuItems.map((local, index) => {
            return (
                <Card className="card-info">
                    <Card.Body>
                        <Card.Title>{local.name}</Card.Title>
                        <Card.Text>
                            {local.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })}
    </div>
);

export default InfoCanalCafe;