import React from 'react'
import {useNavigate} from 'react-router-dom'

function ResetPasswordSuccess() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Success!</h1>
            <p>Password reset sussful!</p>
            <button onClick ={() => navigate('/login')}>Login here</button>
            
        </div>
    )
}

export default ResetPasswordSuccess
