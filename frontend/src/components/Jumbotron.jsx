import React from "react";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import background from '../images/bg.jpg'




function Jumbotron() {
  return (
    <Container  
    style={{height:'70vh', backgroundImage:`url(${background})`, 
    backgroundSize:'100%', backgroundRepeat:'no-repeat',
    padding:'20px', textAlign:'center', borderRadius:'0px  1% 1%', 
    color:'#fff', textShadow:'2px 0px 10px rgba(0, 0, 0, 1)', margin:'auto'}}>

      <h2 className="text-center" style={{marginTop:'7rem'}}> We Help Farmers Get Their Produce <br/>
       To Their Target Buyers </h2>
      <p className="text-center mt-5" style={{fontSize:'22px'}}>Agrily is the most trusted marketplace for both farmers and buyers.</p>
      <Button style={{marginTop: '15px', backgroundColor:'#bc6c25', padding:'10px 20px', border:'1px solid #fefae0'}}> Get Started</Button>

    </Container>
  );
}

export default Jumbotron;
