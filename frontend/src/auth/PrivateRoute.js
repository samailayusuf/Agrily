import {Route, useNavigate, Outlet} from 'react-router-dom'
import {useUser} from './useUser'


export const PrivateRoute = props =>{
    const user = useUser();

    //console.log(user)
    
    const navigate = useNavigate()

    return user ? <Outlet /> : navigate('/')
}