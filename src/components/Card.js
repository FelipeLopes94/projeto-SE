import React from 'react';
import Card from 'react-bootstrap/Card'
import Local from '../../src/lugares.json'
import { Link } from 'react-router-dom'


class Cards extends React.Component {
    state = {}
    render() {
        let urlInfo = ""
        let urlCadastro = ""
        return (
            <div>
                {Local.map((local, index) => {

                    if (index === 0) {
                        urlInfo = "/infosilvalanches";
                        urlCadastro = "/cadastrosilvalanches"
                    } else if (index === 1) {
                        urlInfo = "/infozcafe";
                        urlCadastro = "/cadastrozcafe"
                    } else if (index === 2) {
                        urlInfo = "/infocanalcafe";
                        urlCadastro = "/cadastrocanalcafe"
                    } else if (index === 3) {
                        urlInfo = "/infopalatus"
                        urlCadastro = "/cadastropalatus"
                    }
                    return (
                        <Link to={urlInfo}>
                            <Card className="card-local" key={index}>
                                <Card.Body>
                                    <Card.Title className="card-nome-local">{local.name}</Card.Title>
                                    <Card.Text className="card-pratos-local">
                                        {Local[index].menuItems.length} Pratos
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Link to={urlCadastro}><p className="cross">+</p></Link>
                        </Link>
                    )
                })}

            </div>
        )
    }
}

export default Cards;