
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'
import Local from '../../lugares.json'

// function failace(){
//     window.history.back();
// }
const InfoSilvaLanches = () => (
    <div class="col-lg-6">
 <button type="button" value="Voltar" onClick="window.history.go(-1)"> SETA DE VOLTAR</button>
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