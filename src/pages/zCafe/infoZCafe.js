
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Local from '../../lugares.json'


const InfoZCafe = () => (
    <div class="col-lg-6">
        <Link to="cadastroSilvaLanches"><button type="button"> SETA DE VOLTAR</button></Link>
        <Nav></Nav>
        <h1 className="titulo">{Local[1].name}</h1>
        {Local[1].menuItems.map((local, index) => {
            console.log('LOG', Local[0].menuItems.length)
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

export default InfoZCafe;