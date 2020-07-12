import React from 'react'
import { Card, Button } from 'react-bootstrap'

import {Link} from 'react-router-dom'

const CardItem = (props) => {
  return (
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          Jumlah: {props.data.stock}
      </Card.Text>
        <Button style={{marginRight:"0.5%",marginTop:"0.1%"}} variant="primary"><Link style={{color:"#FFF"}} to="/">Edit Item</Link></Button>
        <Button style={{marginRight:"0.1%",marginTop:"0.1%"}} variant="success"><Link  style={{color:"#FFF"}} to="/">Add to Cart</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem