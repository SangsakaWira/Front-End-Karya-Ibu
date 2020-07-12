import React, { useEffect } from 'react'
import { Container, Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import { fetchAllItems } from '../redux'
import { connect } from 'react-redux'
import ItemLists from '../components/ItemLists'

const Home = (props) => {

    useEffect(() => {
        props.fetchAllItems()
        console.log(props.items)
    }, [])

    return (
        <Container>
            <Form>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            <ItemLists data={props.items}></ItemLists>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items.response
    }
}

export default connect(mapStateToProps, { fetchAllItems })(Home)