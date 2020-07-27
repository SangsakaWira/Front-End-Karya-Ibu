import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Login = (props) => {
    return (
        <Container>
            <Form>
                <h1>Login Page</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br></br>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </Container>
    )
}

export default Login