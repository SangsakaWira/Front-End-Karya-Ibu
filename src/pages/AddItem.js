import React, {useState} from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {createSingleItem} from '../redux'

const AddItem = (props) =>{

    const [dataUser, setDataUser] = useState({
        title: "",
        harga: "",
        stock: "",
        image:""
    })

    const handleChange = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:4500/item/item/",{
            ...dataUser
        }).then(doc=>{
            props.history.push("/")
        })
    }

    return(
        <Container>
            <h1 style={{ marginTop: "2%" }}>Add Item</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nama Barang</Form.Label>
                    <Form.Control onChange={handleChange} name="title" type="text" placeholder="Masukkan Nama Barang" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control onChange={handleChange} name="harga" type="text" placeholder="Masukkan Harga Barang" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Stok Awal</Form.Label>
                    <Form.Control onChange={handleChange} name="stock" type="text" placeholder="Masukkan Stok Barang" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
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

export default connect(mapStateToProps,{createSingleItem})(AddItem)