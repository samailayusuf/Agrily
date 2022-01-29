import React from 'react'
import {useState} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Form, Row, Col, Button, Container, Alert} from 'react-bootstrap'
import farmer2 from '../images/farmer.jpg'
import {Link, useNavigate} from 'react-router-dom'
import {useToken} from '../auth/useToken'
import axios from 'axios'
import {useUser} from '../auth/useUser'


function AddProduct() {

    

    const [token, setToken] = useToken()
    const user = useUser()
    //const navigate = useNavigate()

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const [errorMessage, setErrorMessage] = useState("")

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState ('')
    const [ownerEmail, setOwnerEmail] = useState(user.email) //default is active user
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('99.99')
    const [isSold, setIsSold] = useState(false) //default is false
    const [soldDate, setSoldDate] = useState(null) //to be assigned later
    const [soldTo, setSoldTo] = useState('') //to be assigned later


    const types = ['image/png', 'image/jpeg'];

    const fileChangeHandler = (e) =>{
        e.preventDefault()
        console.log(e.target.files[0])
        
        let selected = e.target.files[0];

        setImage(selected);

        
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/product',{
            name,
            quantity,
            image,
            ownerEmail,
            description,
            price,
            isSold,
            soldDate,
            soldTo
        }, config)
        .then((response) =>{
            const data = response.data
        } )
        .catch(err=> {
            console.log({Error: err})
            setErrorMessage("Sign up failed, user exists!")

        })
    
    }

    return (
        <div>
            <NavBar/>
            <div style={{backgroundImage:`url(${farmer2})`, height:'40vh', marginBottom:'1rem', backgroundSize:'100%'}}></div>
            <h3 className="text-center">Add Product</h3>
            <Container>
            <Row>  <Col md={4}></Col>
            <Col md={4}> 
            <form encType="multipart/form-data">
               
                { errorMessage && (<Alert  variant="warning"> {errorMessage} </Alert>) }


                <Form.Label id="name" label="name" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="text" 
                        name="name" 
                        placeholder="Product Name" 
                        style={{width:'100%'}}
                        value={name}
                        onChange={e=>setName(e.target.value)}/>
                </Form.Label> <br/>

                <Form.Label id="quantity" label="quantity" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="number" 
                        name="quantity" 
                        placeholder="Enter product quantity" 
                        style={{width:'100%'}}
                        value={quantity}
                        onChange={e=>setQuantity(e.target.value)}/>
                </Form.Label> <br/>

                <Form.Label id="Password" label="Password" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="file" 
                        name="image" 
                        placeholder="Password" 
                        style={{width:'100%'}}
                        value={image}
                        onChange={fileChangeHandler}/>
                </Form.Label> <br/>

                <Form.Label id="Password" label="Password" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="text" 
                        name="description" 
                        placeholder="description" 
                        style={{width:'100%'}}
                        value={description}
                        onChange={e=>setDescription(e.target.value)}/>
                </Form.Label> <br/>

                <Form.Label id="Password" label="Password" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="number" 
                        name="price" 
                        placeholder="price" 
                        style={{width:'100%'}}
                        value={price}
                        onChange={e=>setPrice(e.target.value)}/>
                </Form.Label> <br/>

                <Button 
                    type="submit" 
                    className="mb-2" 
                    style={{width:'100%'}}
                    onClick={handleSubmit}
                    >
                    Sign Up
                </Button> <br/>

                

                
                
                    
            </form>
            

            </Col>
            <Col md={4}></Col>
            
            </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default AddProduct
