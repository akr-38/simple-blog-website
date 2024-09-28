import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  if(loading){
    return <Loading/>
  }else{
    return (
        <div className='min-h-screen flex flex-col bg-slate-100'>
          <div className='w-full block'>
            <Header />
            <main className='flex-1'>
            <Outlet />
            </main>
            <Footer />
          </div>
        </div>
    )
  }
  
}

export default App
