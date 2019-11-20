
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Local from '../../lugares.json'


const InfoCanalPalatus = () => (
    <div class="col-lg-6">
        <Nav></Nav>
        <Link to="cadastroSilvaLanches"><button type="button"> SETA DE VOLTAR</button></Link>

        <h1 className="titulo">{Local[3].name}</h1>
        <p className="numero-pratos">{Local[3].menuItems.length} Pratos</p>
        {Local[3].menuItems.map((local, index) => {
            console.log('LOG', Local[3].menuItems.length)
            return (
                <div>
                    <Card className="card-info">
                        <Card.Body>
                            <Card.Title>{local.name}</Card.Title>
                            <Card.Text>
                                {local.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        })}
    </div>
);

export default InfoCanalPalatus;