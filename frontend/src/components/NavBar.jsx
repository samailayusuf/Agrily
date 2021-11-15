import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

function NavBar(){

    

return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home" style={{fontWeight:'bold', color:'#bc6c25'}}>Agrily</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">About Us</Nav.Link>
        <Nav.Link href="#pricing">Contact Us</Nav.Link>
        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>*/}
      </Nav>
      <Nav >
        <Nav.Link href="#deets" style={{marginTop:'5px'}}>Login</Nav.Link>
        <Nav.Link eventKey={2} href="#memes"> 
            <Button style={{backgroundColor:'#bc6c25', border:'none', padding:'5px 10px'}}> Sign Up</Button>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>


)

}

export default NavBar