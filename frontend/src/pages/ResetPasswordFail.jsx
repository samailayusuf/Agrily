import React from 'react'
import {useNavigate} from 'react-router-dom'



function ResetPasswordFail() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Uh Oh!</h1>
            <p>
                Something went wrong while reseting password...
            </p>
            <button onClick={()=>navigate('/signup')}>Back to Sign up</button>
            
        </div>
    )
}

export default ResetPasswordFail;