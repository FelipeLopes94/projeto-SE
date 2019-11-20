
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'
import Local from '../../lugares.json'
import { Link } from 'react-router-dom'

// function failace(){
//     window.history.back();
// }
const InfoSilvaLanches = () => (
    <div class="col-lg-6">
    <Link to="cadastroSilvaLanches"><button type="button"> SETA DE VOLTAR</button></Link>   
        <Nav></Nav>
        <h1 className="titulo">SILVA LANCHES</h1>
            {Local[0].menuItems.map((local, index)=>{
                console.log('LOG', Local.menuItems)
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

export default InfoSilvaLanches;