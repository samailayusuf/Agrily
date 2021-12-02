import React from 'react'

function Home() {
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
