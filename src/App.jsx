import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './comp/home'
import Navbar from './comp/nav'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
