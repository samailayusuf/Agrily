import {Route, Routes, useNavigate} from 'react-router-dom'
import {useUser} from './useUser'


export const PrivateRoute = props =>{
    const user = useUser();

    console.log(user)
    
    const navigate = useNavigate()

    if(!user) return  navigate('/index')

    return <Routes><Route {...props} /></Routes> 
}