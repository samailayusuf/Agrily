import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Col, Row, Container} from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import farmer2 from '../images/farmer.jpg'

function ResetPasswordFail() {
    const navigate = useNavigate()
    return (
        
        <div>


                <div>
                    <NavBar/>
                    <div style={{backgroundImage:`url(${farmer2})`, height:'40vh', marginBottom:'1rem', backgroundSize:'100%'}}></div>
                    
                    
                    <Container>
                    <Row>  <Col md={4}></Col>
                    <Col md={4} style={{textAlign:'center'}}> 
                    
                    <h1>Uh Oh!</h1>
                    <p>Something is not right... Password reset failed!</p>
                    <button onClick ={() => navigate('/login')}>Login here</button>
                    

                    </Col>
                    <Col md={4}></Col>
                    
                    </Row>

                    </Container>

                    
                    <Footer/>
                </div>





        </div>
    )
}

export default ResetPasswordFail
