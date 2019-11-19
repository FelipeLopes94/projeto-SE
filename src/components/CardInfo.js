import React from 'react';
import Card from 'react-bootstrap/Card'

class CardInfo extends React.Component {
    state = {}
    render() {
        return (
            <Card className="card-info">
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                     </Card.Text>
                </Card.Body>
            </Card>

        );
    }
}

export default CardInfo;