import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return (
           
           <Row className="text-center container p-5" style={{margin:'1px auto'}}>
               <Col>Agrily &copy; {new Date().getFullYear()}</Col>
           </Row>
        
    )
}

export default Footer
