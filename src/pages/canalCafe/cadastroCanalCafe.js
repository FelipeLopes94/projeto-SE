
import React from 'react';
import Form from 'react-bootstrap/Form'

export function goBack() {
    window.history.go(-2);
  }
const CadastroCanalCafe = () => (

    <div class="col-lg-6 form">
        <button type="button" value="Voltar" onClick="goBack()"> SETA DE VOLTAR</button>

        <h1 className="titulo">Canal Cafe</h1>
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

export default CadastroCanalCafe;