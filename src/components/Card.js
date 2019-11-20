import React from 'react';
import Card from 'react-bootstrap/Card'
import Local from '../../src/lugares.json'


class Cards extends React.Component {
    state = {}
    render() {
        return (
            <div>
                {Local.map((local, index)=>{
                    console.log(index)
                    return (
                        <Card className="bar" key={index}>
                            <Card.Body>
                                <Card.Title>{local.name}</Card.Title>
                                <Card.Text>
                                    {Local[index].menuItems.length} Pratos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default Cards;