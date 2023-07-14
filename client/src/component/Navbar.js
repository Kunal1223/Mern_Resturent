import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
// import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const handleEvent = () =>{
    localStorage.removeItem("authToken");
    navigate('/login');
  }
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <NavLink className="navbar-brand ps-3 fs-5 fst-italic" to="/">K Resturent</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav ps-5 me-auto " >
            <li className="nav-item  ">
              <NavLink className="nav-link active fs-5" to="/">Home</NavLink>
            </li>
            {(localStorage.getItem("authToken")) ?
              <li className="nav-item  ">
                <NavLink className="nav-link active fs-5" to="/">My order</NavLink>
              </li> : ''
            }
          </ul>

          {(!localStorage.getItem("authToken")) ?
            <div className="d-flex">
              <NavLink className="btn bg-white text-success mx-1" to="/login">Login</NavLink>
              <NavLink className="btn bg-white text-success mx-1" to="/signup">Signup</NavLink>
            </div> :
            <>
            <div className='btn bg-white text-success mx-2'>My Cart{" "}
            <Badge pill bg='danger'>2</Badge>
            </div>
            <div className='btn bg-danger text-white mx-2' onClick={handleEvent}> logout</div>
            </>
            }
          </div>
      </nav>
    </>
  )
}

export default Navbar
