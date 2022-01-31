import React, {useEffect, useState} from 'react'
import TopBar from '../components/TopBar'
import {useUser} from '../auth/useUser'
import {useToken} from '../auth/useToken'
//import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import { Alert, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'
import axios from 'axios'
//import productData from '../data/products'


function Home() {
    const navigate = useNavigate();
    const [moment, setMoment] = useState('');
    const [products, setProducts] = useState([]);

    const user = useUser()
    const [token ,setToken] = useToken()
    const {firstName, lastName, id, email, isVerified} = user

    const logout = () => {
        localStorage.removeItem('token')
        console.log(localStorage.getItem('token'))
        navigate('/index')
      }

    

    //const user = localStorage.getItem('token')
    
    
    useEffect(()=>{
        if (user === null) navigate('/index')
        checkTime()
        //console.log(user)
        const fetchData = async() =>{
            try{
                const response = await axios.get(`http://localhost:5000/api/products/${email}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
                });

                const data = await response.data
    
                if(data){
                    setProducts(data)
                    console.log(products)
                }
            }catch(error){
                console.log(error)
            }
            
        }

        fetchData()

    }, [user])


    const checkTime = () =>{
        var today = new Date()
        var curHr = today.getHours()

        if (curHr < 12) {
        setMoment('morning')
        } else if (curHr < 18) {
        setMoment('afternoon')
        } else {
        setMoment('evening')
        }
    }

    //localStorage.removeItem('token')
    //console.log('token cleared')

    console.log(localStorage.getItem('token'))
    return (
        <>
            <TopBar logout={logout}/>

            {isVerified ? 
            (   <>
                <h3 className='welcome text-center'>Good {moment}, {firstName}</h3>
                </>
            )
            :
            (<Alert className='welcome' variant='danger'>please verify your email {firstName}</Alert>) 
            }

            <Row style={{border:'1px solid black'}}>
                <Col className="text-center">
                    <h5>Your listed products</h5>
                </Col>
                <Col className="text-center">
                    <h5>Your listed products</h5>
                </Col>
                <Col className="text-center">
                    <h5>Your listed products</h5>
                </Col>
            </Row>


            <Footer/>
            
        </>
    )
}

export default Home
