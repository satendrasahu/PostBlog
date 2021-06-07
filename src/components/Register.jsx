import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Register
**/

const Register = (props) => {
    return (
        <>
            <Container className="mt-5" >
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card style={{ marginTop: '25px' }}>
                            <Card.Header className="text-center text-white" style={{ zIndex: 1, backgroundColor: '#6200EE', fontSize: "30px" }}>Register</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                          </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Number</Form.Label>
                                        <Form.Control type="number" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="outline-primary" size="lg" block type="submit">
                                        Create Account
                                </Button>
                                </Form>
                            </Card.Body>
                            <Card.Text className="mb-1">
                                <NavLink to="/login" style={{ float: "right" }}> <b>Login</b></NavLink>
                            </Card.Text>
                        </Card>

                    </Col>
                </Row>
            </Container>



        </>
    )

}

export default Register