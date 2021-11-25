import {Route, Navigate} from 'react-router-dom'


export const PrivateRoute = props =>{
    const user = null;

    return user ? <Route {...props} /> : <Navigate to="/index"/>
}