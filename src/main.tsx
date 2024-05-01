import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Home from './Home'
import Info from './Info'
import Teachers from './Teachers'
import Contact from './Contact'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='App'>

      <Navbar />
      <Home />
      <Info />

      <Teachers />
      {/* <Signup /> */}
      <Contact />

    </div>
  </React.StrictMode>,
)
