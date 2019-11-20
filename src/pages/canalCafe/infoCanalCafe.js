
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'


const InfoCanalCafe = () => (
    <div class="col-lg-6">
        <h1 className="titulo"> CANAL CAFE</h1>

        <Nav></Nav>
            <Card className="card-info">
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                     </Card.Text>
                </Card.Body>
            </Card>
    </div>
);

export default InfoCanalCafe;