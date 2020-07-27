import React,{useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../redux'

const Login = (props) => {

    const [dataUser,setDataUser] = useState({
        username:"",
        password:""
    })

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.login(dataUser)
    }   

    const handleOnChange = (event) =>{
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Container>
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

const mapStateToProps = state =>{
    console.log(state)
    return{
        token:state.token
    }
}

export default connect(mapStateToProps,{login})(Login)