import React from 'react'
import {Routes, Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'

export default function index() {
  return (
    <>
    <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
    <Route path='/ResetPassword' element={<ResetPassword/>}/>
    </Routes>
    </>
    
   
    
  )
}
