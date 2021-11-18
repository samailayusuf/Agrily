import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import farmer2 from '../images/farmer.jpg'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div>
            <NavBar/>
            <div style={{backgroundImage:`url(${farmer2})`, height:'40vh', marginBottom:'1rem', backgroundSize:'100%'}}></div>
            <h3 className="text-center">Sign Up </h3>
            <Container>
            <Row>  <Col md={4}></Col>
            <Col md={4}> 
            <form>

                <Form.Label controlId="Fname" label="Fname" style={{width:'100%'}}>
                    <Form.Control size="sm" type="text" name="firstName" placeholder="First Name" style={{width:'100%'}}/>
                </Form.Label> <br/>

                <Form.Label controlId="Lname" label="Lname" style={{width:'100%'}}>
                    <Form.Control size="sm" type="text" name="lastName" placeholder="Last Name" style={{width:'100%'}}/>
                </Form.Label> <br/>

                <Form.Label controlId="email" label="email" style={{width:'100%'}}>
                    <Form.Control size="sm" type="email" name="email" placeholder="Email" style={{width:'100%'}}/>
                </Form.Label> <br/>

                <Form.Label controlId="Password" label="Password" style={{width:'100%'}}>
                    <Form.Control size="sm" type="password" name="password" placeholder="Password" style={{width:'100%'}}/>
                </Form.Label> <br/>

                <Form.Label controlId="Password" label="Password" style={{width:'100%'}}>
                    <Form.Control size="sm" type="password" name="confirmPassword" placeholder="Comfirm Password" style={{width:'100%'}}/>
                </Form.Label> <br/>

                <Button type="submit" className="mb-2" style={{width:'100%'}}>
                    Submit
                </Button> <br/>

                <p>Registered Already? <Link to="/login">Login here</Link></p>

                
                
                    
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
