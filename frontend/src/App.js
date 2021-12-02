import { Fragment } from 'react'
import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { PrivateRoute } from './auth/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <>
      <Routes>       
        <Route exact path="/" element={<Index/>} />  
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="*" element={<NotFound/>} />
        
        <Route exact path='/home' element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Home/>}/>
        </Route>
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
