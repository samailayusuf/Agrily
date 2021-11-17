import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
