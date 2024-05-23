import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
  const [credentials, setcredential] = useState({ name: "", email: "", password: "", location: "" })

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://food-cart-mern-server-7.onrender.com/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.location
        })
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //save the auth toke to local storage and redirect
        // toast.success("successfully Completed!!Please login")
        toast.success("Successfully Completed!! Please login", {
          style: {
            backgroundColor: "orange",
            color: "white",
          },
        });

        localStorage.setItem('token', json.authToken)
        setTimeout(() => {
          navigate("/login")
        }, 2000);


      }
      else {
        toast.warning("Enter Valid Credentials")
      }
      // navigate("/login")
      // if (!json.success) {
      //   toast.warning("Enter valid Credentials")
      // }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the form. Please try again later.");
    }
  }


  const onChange = (e) => {
    setcredential({ ...credentials, [e.target.name]: e.target.value })
  }



  return (
    <>
      <Header />
      <div className='signup-container'>
        <div className='d-flex shadow p-5 rounded ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
          <Form.Group onSubmit={handleSubmit} className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name</Form.Label>
            <Form.Control className='mb-3' type='text' placeholder='' name='name' value={credentials.name} onChange={onChange} />
            <Form.Label>Email Address</Form.Label>
            <Form.Control className='mb-3' type='email' placeholder='' name='email' value={credentials.email} onChange={onChange} />
            <Form.Label>Address</Form.Label>
            <Form.Control className='mb-3' type='text' placeholder='' name='location' value={credentials.location} onChange={onChange} />
            {/* <div className='mb-3'>
              <Button onClick={handleClick} variant='success'>Click for current Location</Button>{' '}
            </div> */}
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' value={credentials.password} onChange={onChange} className='mb-5' type='text' placeholder='' />
            <div className='mt-3'>
              <Button onClick={handleSubmit} type='submit' variant='success'>Submit</Button>{' '}
              {/* <Link to={"/login"} className='ms-2' variant='danger'>
                Already a user
              </Link> */}
              <Button to={"/login"} className='ms-2' variant='danger'>
                Already a user
              </Button>
            </div>
          </Form.Group>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  );
}

export default Signup;
