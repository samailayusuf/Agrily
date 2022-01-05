import React from 'react'
import {useNavigate} from 'react-router-dom'

function EmailVerificationSuccess() {
    return (
        <div>
            <h1>Success!</h1>
            <p>Thank you for signing up</p>
            <button onClick ={() => useNavigate('/home')}>Go Home</button>
            
        </div>
    )
}

export default EmailVerificationSuccess
