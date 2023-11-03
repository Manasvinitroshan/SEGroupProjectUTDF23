import React, { useState } from 'react';
import { Container, Form, Button, Image, Card, Col, Row } from 'react-bootstrap';
import { Navbar } from "../components/Navbar";

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username, 'Password:', password);
    }

    return (
        <div className="bg-dark vh-100 d-flex flex-column">
            <Navbar />
            <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Header>
                            <Image src="/logo.png" alt="Class Meet" style={{ width: '200px', height: '200px', margin: '0 auto' }} />
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button type="submit" variant="primary">LOG IN</Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <a href="#">Forgot Username or Password?</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Container>
        </div>
    );
}
