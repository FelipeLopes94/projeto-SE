import React from 'react';
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom';


const links = [
    { route: "/", label: "Home" },
    { route: "/informacoes", label: "Informacoes" },
    { route: "/cadastro", label: "Cadastro" },
];
class Cards extends React.Component {

    renderLink = () => {
        return links.map(link =>
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
            </Link>
        )
    }
    state = {}
    render() {
        return (
            <Card className="bar">
                <ul>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            {this.renderLink()}
                        </Card.Text>
                    </Card.Body>
                </ul>

            </Card>

        );
    }
}

export default Cards;