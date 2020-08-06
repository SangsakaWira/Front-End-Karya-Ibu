import React, { useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../redux'

const Login = (props) => {

    const [dataUser, setDataUser] = useState({
        username: "",
        password: "",
        error: "",
        msg: ""
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(dataUser)
        setShow(true)
    }

    const handleOnChange = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.msg}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Form onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleOnChange} name="username" type="text" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleOnChange} name="password" type="password" placeholder="Enter Password" />
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

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        token: state.auth.token,
        error: state.auth.error,
        msg: state.auth.msg
    }
}

export default connect(mapStateToProps, { login })(Login)