import {Route, Navigate} from 'react-router-dom'
import {useUser} from './useUser'


export const PrivateRoute = props =>{
    const user = useUser();

    return user ? <Route {...props} /> : <Navigate to="/index"/>
}