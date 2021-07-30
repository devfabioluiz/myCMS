import React, { Component, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Form className="col-md-4 center" onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={username}
                    onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" value={password}
                    onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button className="col-md-12 text-white" variant="info" type="submit">
                Entrar
            </Button>
        </Form>
    )
}