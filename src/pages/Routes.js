import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Frontend from './Frontend'
import auth from './auth'
import Dashboard from './Dasboard'



export default function Index() {
  return (
   <>
  
   <Routes>
      <Route path='/*' element={<Frontend/>}/>
       <Route path='/auth' element={<auth/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
   
   </>
  )
}
  
