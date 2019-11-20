import React from 'react';
import Card from 'react-bootstrap/Card'
import Local from '../../src/lugares.json'
import { Link } from 'react-router-dom'


class Cards extends React.Component {
    state = {}
    render() {
        let urlInfo = ""

        return (
            <div>
                {Local.map((local, index) => {

                    if (index === 0) {
                        urlInfo = "/infosilvalanches";
                    } else if (index === 1) {
                        urlInfo = "/infozcafe";
                    } else if (index === 2) {
                        urlInfo = "/infocanalcafe";
                    } else if (index === 3) {
                        urlInfo = "/infopalatus"
                    }
                    return (
                        <Link to={urlInfo}>
                            <Card className="bar" key={index}>
                                <Card.Body>
                                    <Card.Title>{local.name}</Card.Title>
                                    <Card.Text>
                                        {Local[index].menuItems.length} Pratos
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default Cards;