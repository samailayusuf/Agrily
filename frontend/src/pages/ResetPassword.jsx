import React from 'react'
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import ResetPasswordSuccess from './ResetPasswordSuccess'
import ResetPasswordFail from './ResetPasswordFail'

function ResetPassword() {
    const [passwordValue, setPasswordValue] = useState('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const [isFail, setIsFail] = useState(false)
    const {resetPasswordCode} = useParams()

    const onResetClicked = async(e)=>{
        e.preventDefault()
    }

    console.log(resetPasswordCode)
    if(isFail) return (<ResetPasswordFail/>)

    if(isSuccess) return (<ResetPasswordSuccess/>)


    return (
        <div>
            <h2>Reset password</h2>
            <p>Please enter a new password</p>

            <input 
                type="password"
                placeholder="Enter password"
                onChange={(e)=>setPasswordValue(e.target.value)}
                value={passwordValue}
                />

            <input 
                type="password"
                placeholder="Confirm password"
                onChange={(e)=>setConfirmPasswordValue(e.target.value)}
                value={confirmPasswordValue}
                />

            <button
                disabled={!passwordValue || !confirmPasswordValue || (passwordValue !==confirmPasswordValue)}
                onClick={onResetClicked}
                >Reset password</button>
        </div>
    )
}

export default ResetPassword
