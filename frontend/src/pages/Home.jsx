import React, {useEffect} from 'react'
import TopBar from '../components/TopBar'
import {useUser} from '../auth/useUser'
//import {useToken} from '../auth/useToken'
//import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import { Alert } from 'react-bootstrap'
import Footer from '../components/Footer'
//import productData from '../data/products'


function Home() {
    const navigate = useNavigate()

    const user = useUser()
    //const [token ,setToken] = useToken()
    const {firstName, lastName, id, email, isVerified} = user

    const logout = () => {
        localStorage.removeItem('token')
        console.log(localStorage.getItem('token'))
        navigate('/index')
      }

    //const user = localStorage.getItem('token')
    
    
    useEffect(()=>{
        if (user === null) navigate('/index')
        console.log(user)
    }, [user])

    //localStorage.removeItem('token')
    //console.log('token cleared')

    console.log(localStorage.getItem('token'))
    return (
        <>
            <TopBar logout={logout}/>

            {isVerified ? 
            (   <>
                <h3 className='welcome'>Welcome, {firstName}</h3>
                </>
            )
            :
            (<Alert className='welcome' variant='danger'>please verify your email {firstName}</Alert>) 
            
            }


            <Footer/>
            
        </>
    )
}

export default Home
