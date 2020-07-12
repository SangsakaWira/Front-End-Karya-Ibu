import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {fetchAllItems} from '../redux'
import {connect} from 'react-redux'

const Home = (props) =>{

    useEffect(()=>{
        props.fetchAllItems()
    },[])

    return(
        <Container>
            <h1>Home</h1>
        </Container>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return{
        items:state.items
    }
}

export default connect(mapStateToProps,{fetchAllItems})(Home)