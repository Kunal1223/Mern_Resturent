import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <NavLink to="/" className="mb-1 ms-5 me-5 mb-md-0 text-muted text-decoration-none lh-1">Home
      </NavLink>
      <span className="text-muted">© 2021 Kunal</span>
    </div>
  </footer>
    </>
  )
}

export default Footer
