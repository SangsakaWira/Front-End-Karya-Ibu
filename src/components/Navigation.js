import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg" style={{ marginBottom: "2%" }}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/tambah-item">Add Item</Link></Nav.Link>
                    <Nav.Link><Link to="/add-user">Add User</Link></Nav.Link>
                    <Nav.Link><Link to="/checkout">Checkout</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
                <Button variant="outline-danger"><Link to="/login">Login</Link></Button>
            </Form>
        </Navbar>
    )
}
export default Navigation