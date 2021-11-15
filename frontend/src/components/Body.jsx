import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Body() {
    return (
        <Container>
            <h3 className="mt-5 text-center">What We Do</h3>
            <Row className="mt-5" style={{color:'#bc6c25'}}>
                <Col className="text-center" variant="#bc6c25">
                    <h4>We're Farmers' best choice</h4>
                </Col>
                <Col>2 of 3</Col>
                
            </Row>
        </Container>
    )
}

export default Body
