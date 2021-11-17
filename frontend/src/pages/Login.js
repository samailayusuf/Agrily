import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { FloatingLabel, Form, Container, Row, Col, Button } from 'react-bootstrap'
import farmer2 from '../images/farmer.jpg'

function Login() {
    return (
        <div>
            <NavBar/>
            <div style={{backgroundImage:`url(${farmer2})`, height:'40vh', marginBottom:'1rem', backgroundSize:'100%'}}></div>
            <h3 className="text-center">Login </h3>
            <Row>  <Col md={4}></Col>
            <Col md={4}>
            <form>

                <Form.Label controlId="email" label="email" style={{width:'100%'}}>
                    <Form.Control size="sm" type="email" placeholder="Email" style={{width:'100%'}}/>
                </Form.Label> <br/>

                <Form.Label controlId="floatingPassword" label="Password" style={{width:'100%'}}>
                    <Form.Control size="sm" type="password" placeholder="Password" style={{width:'100%'}}/>
                </Form.Label> <br/>

                <Button type="submit" className="mb-2" style={{width:'100%'}}>
                    Submit
                </Button>

                

            </form>
            </Col>
            <Col md={4}></Col>
            
            </Row>
            <Footer/>
        </div>
    )
}

export default Login
