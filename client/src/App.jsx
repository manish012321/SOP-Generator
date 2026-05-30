import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
const App = () => {
  return (
    <>

      <ToastContainer position='top-right' />

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App