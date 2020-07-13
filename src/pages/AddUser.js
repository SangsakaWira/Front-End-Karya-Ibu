import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'

const AddUser = () =>{

    const renderInput = ()=>{
        return(
            <div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nama Barang</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Masukkan Nama Barang" />
                </Form.Group>
            </div>
        )
    }

    return(
        <Container>
            <Form>
                <Field name="username" placeholder="Username" component={renderInput}></Field>
                <Field name="password" placeholder="password" component={renderInput}></Field>
            </Form>
        </Container>
    )
}

export default reduxForm({
    form:'createUser'
})(AddUser)
