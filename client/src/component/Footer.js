import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div>
          <hr className='hr'/>
          <NavLink to="/" className='home'>Home</NavLink>
          <span className="text-muted">© 2021 Kunal</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
