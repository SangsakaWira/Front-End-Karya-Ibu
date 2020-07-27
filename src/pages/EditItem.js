import React from 'react'
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap'

const EditItem = (props) =>{
    const itemId = useParams().id;

    return(
        <Container>
            <h1>{itemId}</h1>
        </Container>
    )
}

export default EditItem