
import React from 'react';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Nav from '../../components/Navbar'
import Local from '../../lugares.json'

const CadastroPalatus = () => (

    <div className="col-lg-6 center-content">
        <Nav></Nav>
        <Link to="/"><img className="seta-voltar" alt="seta voltar" src="https://img.icons8.com/plasticine/100/000000/chevron-left.png" /></Link>

        <h1 className="titulo">{Local[3].name}</h1>
        <Form >
            <Form.Group controlId="exampleForm.ControlInput1">
                <p>Nome do Prato</p>
                <Form.Control type="textarea" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="form-valor">
                <p>Valor</p>
                <Form.Control type="textarea" placeholder="valor" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <p>Descrição do prato</p>
                <Form.Control as="textarea" rows="3" />
                <p className="alerta-descricao">* A descrição deve ter até 200 caracteres</p>
            </Form.Group>
        </Form>
        <button type="button" class="btn btn-warning btn-salvar">Salvar</button>

    </div>

);

export default CadastroPalatus;