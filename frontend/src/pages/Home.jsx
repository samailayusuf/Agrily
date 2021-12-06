import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const user = localStorage.getItem('token')
    const navigate = useNavigate()
    

    //localStorage.removeItem('token')
    console.log('token cleared')
    console.log(localStorage.getItem('token'))
    return (
        <div>
            <h1>This is very much the real deal!</h1>
        </div>
    )
}

export default Home
