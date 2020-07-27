import React, { useEffect,useState } from 'react'
import { Container, Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import { fetchAllItems,fetchItemsAlike } from '../redux'
import { connect } from 'react-redux'
import ItemLists from '../components/ItemLists'

const Home = (props) => {

    const [dataItem,setDataItem] = useState({
        title:""
    })

    const [isLoading,setLoading] = useState(false)

    useEffect(() => {
        props.fetchAllItems()
    }, [])

    const onChange = (event) =>{
        setDataItem({
            ...dataItem,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) =>{
        console.log(dataItem)
        if(dataItem.title !== ""){
            props.fetchItemsAlike(dataItem)
        }else{
            props.fetchAllItems()
        }
        event.preventDefault()
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={onChange}
                        name="title"
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary">Search</Button>
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

export default connect(mapStateToProps, { fetchAllItems,fetchItemsAlike })(Home)