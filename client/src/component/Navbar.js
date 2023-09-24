import React, { useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import Modal from '../screens/Model';
import Ocart from '../screens/Ocart';
import { useCart } from './ContextReducer';
// import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const data = useCart();
  const [cartView , setcartView] = useState(false);
  const navigate = useNavigate();
  const handleEvent = () =>{
    localStorage.removeItem("authToken");
    navigate('/login');
  }
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <NavLink className="navbar-brand ps-3 fs-5 fw-bold text-danger ms-5" to="/">K Resturent</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav ps-5 me-auto " >
            <li className="nav-item  ">
              <NavLink className="nav-link active fs-5 text-primary fw-semibold" to="/">Home</NavLink>
            </li>
            {(localStorage.getItem("authToken")) ?
              <li className="nav-item  ">
                <NavLink className="nav-link active fs-5" to="/">My order</NavLink>
              </li> : ''
            }
          </ul>

          {(!localStorage.getItem("authToken")) ?
            <div className="d-flex">
              <NavLink className="btn bg-primary text-white mx-1 me-3" to="/login">Login</NavLink>
              <NavLink className="btn bg-warning text-white mx-1 me-5" to="/signup">Signup</NavLink>
            </div> :
            <>
            <div className='btn bg-white text-success mx-2' onClick={()=>setcartView(true)}>My Cart{" "}
            <Badge pill bg='danger'>{data.length}</Badge>
            </div>
            {cartView ? <Modal onClose={() => setcartView(false)}><Ocart/></Modal>:null}
            <div className='btn bg-danger text-white mx-2' onClick={handleEvent}> logout</div>
            </>
            }
          </div>
      </nav>
    </>
  )
}

export default Navbar
