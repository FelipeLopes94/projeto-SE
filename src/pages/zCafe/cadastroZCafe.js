
import React from 'react';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Nav from '../../components/Navbar'

const CadastroZCafe = () => (

    <div className="col-lg-6 center-content">
        <Nav></Nav>
        <Link to="/"><img className="seta-voltar" alt="seta voltar" src="https://img.icons8.com/plasticine/100/000000/chevron-left.png" /></Link>

        <h1 className="titulo"> Z CAFE</h1>
        <Form >
            <Form.Group controlId="exampleForm.ControlInput1">
                <p>Nome do Prato</p>
                <Form.Control type="textarea" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <p>Valor</p>
                <Form.Control type="textarea" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <p>Descrição do prato</p>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
        </Form>
    </div>
);

export default CadastroZCafe;