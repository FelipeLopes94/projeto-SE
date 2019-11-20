
import React from 'react';
import Nav from '../../components/Navbar'
import Card from 'react-bootstrap/Card'


const InfoZCafe = () => (
    <div class="col-lg-6">
        <Nav/>
        <h1 className="titulo"> Z CAFE</h1>

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

export default InfoZCafe;