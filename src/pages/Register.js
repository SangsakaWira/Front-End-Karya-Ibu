import React, { useState } from 'react'
import { Container, Form, Button,Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../redux'

const Register = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataUser, setDataUser] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        checkbox: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.register(dataUser)
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
                <h1>Register Page</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleOnChange} name="username" type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleOnChange} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleOnChange} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={handleOnChange} name="confirm_password" type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check onChange={handleOnChange} name="checkbox" type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            <br></br>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </Container>
    )
}

const MapStateToProps = state => {
    return {
        username: state.auth.username,
        token: state.auth.token,
        error: state.auth.error,
        msg: state.auth.msg
    }
}

export default connect(MapStateToProps, { register })(Register)