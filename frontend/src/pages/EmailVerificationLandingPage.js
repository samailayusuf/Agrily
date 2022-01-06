import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useToken} from '../auth/useToken'
import EmailVerificationSuccess from './EmailVerificationSuccess'
import EmailVerificationFail from './EmailVerificationFail'

function EmailVerificationLandingPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)
    const verificationString = useParams()
    const [,setToken] = useToken()

    useEffect(()=>{
        const loadVerification = async () =>{
            
                axios.put('http://localhost:5000/verify', {verificationString})
                .then(response =>{
                    const {token} = response.data
                    setToken(token)
                    setIsSuccess(true)
                    setIsLoading(false)
                    console.log(response)
                })           
                .catch(error=>{
                setIsSuccess(false)
                setIsLoading(false)
                console.log(error)
                })
            

        }

        loadVerification()

    },[])

    if(isLoading) return <p>Loading...</p>
    if(!isSuccess) return <EmailVerificationFail/>
    return <EmailVerificationSuccess/>
}

export default EmailVerificationLandingPage
