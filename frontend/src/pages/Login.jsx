import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Form, Row, Col, Button, Container, /*Alert*/ } from 'react-bootstrap'
import farmer2 from '../images/farmer.jpg'
import {Link} from 'react-router-dom'

function Login() {

    //const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const onLogin = async(e) =>{
        e.preventDefault()
        console.log({email, password})
    }

    const forgotPasswordHandler = () =>{
        navigate("/forgot-password")
    }

    return (
        <div>
            <NavBar/>
            <div style={{backgroundImage:`url(${farmer2})`, height:'40vh', marginBottom:'1rem', backgroundSize:'100%'}}></div>
            <h3 className="text-center">Login </h3>
            
            <Container>
            <Row>  <Col md={4}></Col>
            <Col md={4}> 
            <form>

                {/* {errorMessage && (<Alert  variant="warning">
                    {errorMessage}
                </Alert>)     
                } */}

                <Form.Label controlId="email" label="email" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="email" 
                        placeholder="Email" 
                        style={{width:'100%'}}
                        value={email}
                        onChange={e=> setEmail(e.target.value)}/>
                </Form.Label> <br/>

                <Form.Label controlId="floatingPassword" label="Password" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="password" 
                        placeholder="Password" 
                        style={{width:'100%'}}
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                </Form.Label> <br/>

                <Button 
                    type="submit" 
                    className="mb-2" 
                    style={{width:'100%'}}
                    onClick={onLogin}
                    disabled={!email || !password}>
                    Submit
                </Button>

                <br/>

                <Button 
                    variant="outline-dark"
                    type="button" 
                    className="mb-2" 
                    style={{width:'100%'}}
                    onClick={forgotPasswordHandler}>
                    Forgot Password?
                </Button>

                <p style={{fontSize:'12px'}}>Not registered? <Link to="/register">Sign up here</Link></p>

                
                    
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
