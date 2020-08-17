import React from 'react'
import { useParams } from "react-router-dom";
import {connect} from "react-redux"
import { Container } from 'react-bootstrap'

const EditItem = (props) =>{
    const itemId = useParams().id;

    return(
        <Container>
            <h1>{itemId}</h1>
        </Container>
    )
}

const mapStateToProps = (state) =>{
    return {
        item:state.items
    }
}

export default connect(mapStateToProps,{})(EditItem)