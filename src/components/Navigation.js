import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navigation = (props) => {

    let [isAuth, setAuth] = useState(false)

    useEffect(() => {
        setAuth(props.isAuth)
    }, [isAuth])

    const renderNavigation = () => {
        if (localStorage.getItem('token')) {
            return (
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/tambah-item">Add Item</Link></Nav.Link>
                    <Nav.Link><Link to="/add-user">Add User</Link></Nav.Link>
                    <Nav.Link><Link to="/checkout">Checkout</Link></Nav.Link>
                </Nav>
            )
        } else {
            return (
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                </Nav>
            )
        }
    }

    return (
        <Navbar bg="light" expand="lg" style={{ marginBottom: "2%" }}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {renderNavigation()}
            </Navbar.Collapse>
            <Form inline>
                <Button variant="outline-danger"><Link to="/login">Login</Link></Button>
            </Form>
        </Navbar>
    )
}

const MapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(MapStateToProps, {})(Navigation)