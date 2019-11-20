
import React from 'react';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const CadastroSilvaLanches = () => (

    <div class="col-lg-6 form">
    <Link to="/"><a> &#170; </a></Link>   

        <h1 className="titulo">SILVA LANCHES</h1>
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

export default CadastroSilvaLanches;