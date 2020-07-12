import React from 'react'
import { Navbar,Nav ,Button, Row, Col, CardColumns} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ItemCard from './ItemCard'

const ItemLists = (props) => {
    
    return (
        <CardColumns>
           {props.data.map((data)=>{
            return(
            <ItemCard data={data}></ItemCard>
            )
        })}
        </CardColumns>
    )
}
export default ItemLists