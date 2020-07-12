import React, {useState} from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {createSingleItem} from '../redux'

const AddItem = (props) =>{

    const [dataUser, setDataUser] = useState({
        title: "",
        harga: "",
        stok: "",
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
                    <Form.Control onChange={handleChange} name="stok" type="text" placeholder="Masukkan Stok Barang" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default connect(null,{createSingleItem})(AddItem)