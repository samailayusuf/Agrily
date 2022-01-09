import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import farmer2 from '../images/farmer.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//import {Link} from 'react-router-dom'

function Login() {
    const [email, setEmail] =  useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const useNavigate = useNavigate()

        const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Hello")
    }
    return (
        <div>
            <NavBar/>
            <div style={{backgroundImage:`url(${farmer2})`, height:'40vh', marginBottom:'3rem', backgroundSize:'100%'}}></div>
            
            <h3 className="text-center">Recover Account </h3>
            
            <Container>
            <Row>  <Col md={4}></Col>
            <Col md={4}> 
                <form>
                    {success ? 
                        <div> 
                            <h2>Success</h2> 
                            <p>Check your email for a reset link</p>
                        </div>
                    }   
                        <Form.Label controlId="email" label="email" style={{width:'100%'}} mt-5>
                            <Form.Control size="sm" type="email" placeholder="Email" style={{width:'100%'}}/>
                        </Form.Label> <br/>

                        <Button type="submit" className="mb-2" style={{width:'100%'}}
                        onClick={handleSubmit}>
                            Submit
                        </Button>
            
                </form>
                

            </Col>
            <Col md={4}></Col>
            
            </Row>

            </Container>

            
            <Footer/>
        </div>
    )
}

export default Login
