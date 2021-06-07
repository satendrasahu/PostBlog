import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Login
**/

const Forgot = () => {
    return (
        <>
            <Container className="mt-5" >
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card style={{ marginTop: '25px' }}>
                            <Card.Header className="text-center text-white" style={{ zIndex: 1, backgroundColor: '#FF6600', fontSize: "30px" }}>Reset Your Password</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address / User name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>


                                    <Button variant="outline-primary" size="lg" block type="submit">
                                        Send Reset Email
                                </Button>
                                </Form>
                            </Card.Body>

                        </Card>

                    </Col>
                </Row>
            </Container>

        </>
    )

}

const Login = (props) => {
    return (
        <>
            <Container className="mt-5" >
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card style={{ marginTop: '25px' }}>
                            <Card.Header className="text-center text-white" style={{ zIndex: 1, backgroundColor: '#6200EE', fontSize: "30px" }}>Login</Card.Header>
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
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Save Reference" />
                                    </Form.Group>
                                    <Button variant="outline-primary" size="lg" block type="submit">
                                        Login
                                </Button>
                                </Form>
                            </Card.Body>
                            <Card.Text className="mb-3">

                                <NavLink to="/forgot"> <b>Forgot Password ?</b></NavLink>
                                <NavLink to="/register" style={{ float: "right " }}> <b>Register</b></NavLink>
                            </Card.Text>
                        </Card>

                    </Col>
                </Row>
            </Container>



        </>
    )

}

export default Login
export { Forgot }
