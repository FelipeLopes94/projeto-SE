
import React from 'react';
import Form from 'react-bootstrap/Form'

const Cadastro = () => (

    <div class="col-lg-6 form">
        <button type="button" value="Voltar" onClick="history.go(-1)"> SETA DE VOLTAR</button>

        <h1 className="titulo">Lugar</h1>
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

export default Cadastro;