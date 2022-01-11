import React from 'react'
import {useParams} from 'react-router-dom'

function ResetPassword() {

    const {resetPasswordCode} = useParams()
    console.log(resetPasswordCode)
    return (
        <div>
            <h2>reset password page {resetPasswordCode}</h2>
        </div>
    )
}

export default ResetPassword
