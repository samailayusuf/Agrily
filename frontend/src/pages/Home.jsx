import React, {useEffect} from 'react'
import TopBar from '../components/TopBar'
import {useUser} from '../auth/useUser'
import {useToken} from '../auth/useToken'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Home() {
    const navigate = useNavigate()

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
    }, [user])

    //localStorage.removeItem('token')
    //console.log('token cleared')

    console.log(localStorage.getItem('token'))
    return (
        <>
            <TopBar logout={logout}/>

            {isVerified ? 
            (   <>
                <h1>Welcome, {firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <h1>Email: {email}</h1>
                <h2>ID: {id}</h2>
                </>
            )
            :
            (<h1>please verify your email {firstName}</h1>) 
            
            }
            
        </>
    )
}

export default Home
