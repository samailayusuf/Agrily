import React, {useEffect} from 'react'
import TopBar from '../components/TopBar'
//import {useNavigate} from 'react-router-dom'

function Home() {
    const user = localStorage.getItem('token')
    //const navigate = useNavigate()
    
    useEffect(()=>{
        if (user === null) window.location = "/index"
    }, [user])

    //localStorage.removeItem('token')
    //console.log('token cleared')

    console.log(localStorage.getItem('token'))
    return (
        <>
            <TopBar />
        </>
    )
}

export default Home
