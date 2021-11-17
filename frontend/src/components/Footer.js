import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return (
           
           <Row className="text-center p-2 container-fluid" 
           style={{margin:'10px auto', position:'absolute', bottom:'0px'}}
           >
               <Col lg={12}>Agrily &copy; {new Date().getFullYear()}</Col>
           </Row>
        
    )
}

export default Footer
