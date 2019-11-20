
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'
import Local from '../../lugares.json'
import { Link } from 'react-router-dom'

const InfoSilvaLanches = () => (
    <div>
        <div className="col-lg-6 center-content">
            <Nav></Nav>
            <Link to="/"><img className="seta-voltar" alt="seta voltar" src="https://img.icons8.com/plasticine/100/000000/chevron-left.png" /></Link>

            <h1 className="titulo">{Local[0].name}</h1>
            <p className="numero-pratos">{Local[0].menuItems.length} Pratos</p>
            {Local[0].menuItems.map((local, index) => {
                return (
                    <Card className="card-info">
                        <Card.Body>
                            <Card.Title>{local.name}</Card.Title>
                            <Card.Title className="preco-prato">R${local.price}</Card.Title>
                            <Card.Text>
                                {local.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
        <div className="col-sm-6">
            <Link to="{/cadastrosilvalanches}"><p className="cross-cadastro">+</p></Link>
        </div>

    </div>
);

export default InfoSilvaLanches;