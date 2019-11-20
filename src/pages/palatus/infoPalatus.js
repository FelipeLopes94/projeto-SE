
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Local from '../../lugares.json'


const InfoCanalPalatus = () => (
    <div>
        <div className="col-lg-6 center-content">
            <Nav></Nav>
            <Link to="/"><img className="seta-voltar" alt="seta voltar" src="https://img.icons8.com/plasticine/100/000000/chevron-left.png" /></Link>

            <h1 className="titulo">{Local[3].name}</h1>
            <p className="numero-pratos">{Local[3].menuItems.length} Pratos</p>
            {Local[3].menuItems.map((local, index) => {
                return (
                    <div>
                        <Card className="card-info">
                            <Card.Body>
                                <Card.Title>{local.name}</Card.Title>
                                <Card.Title className="preco-prato">R${local.price}</Card.Title>
                                <Card.Text>
                                    {local.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        <div className="col-sm-6">
            <Link to="{/cadastropalatus}"><p className="cross-cadastro">+</p></Link>
        </div>

    </div>

);

export default InfoCanalPalatus;