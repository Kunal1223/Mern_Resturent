import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { NavLink , useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  const [cradentials, setcradentials] = useState({email:"", password:""});

  const handleSubmit = async (e) => {
    // console.log("i am in here");
    e.preventDefault();
    console.log(JSON.stringify({email:cradentials.email, password:cradentials.password}));

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({email: cradentials.email, password: cradentials.password })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Invalid Credentials");
    }

    if (json.success) {
      localStorage.setItem('authToken' , json.authToken);
      console.log(localStorage.getItem("authToken"));
      alert("Succesfully Login 😎");
      navigate('/');
    }
  }
  const onChange = (e) => {
    setcradentials({ ...cradentials, [e.target.name]: e.target.value })
  };
  return (
    <>
      <Navbar />
      <div className="container mt-5 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={cradentials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={cradentials.password} onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-success m-3">Submit</button>
          <NavLink to='/signup' className="btn btn-danger m-3">I'm a new user</NavLink>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
