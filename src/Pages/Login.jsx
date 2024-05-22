





import React, { useState } from 'react';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';



function Login() {
  
  // const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://food-cart-mern-server-5.onrender.com/api/loginuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth toke to local storage and redirect
      toast.success('welcome to world of food!!')
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem('authToken', json.authToken)
      setTimeout(()=>{
        navigate("/")
      },2000);
      

    }
    else {
      toast.warning("Enter valid format")
    }
  
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
 const handleNewUserClick = () => {
     navigate("/signup"); 
    };
  
  
  return (
    <>
      <Header />
      <div className='login-container'>
        <div className='login-content' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
          <Form onSubmit={handleSubmit}  autoComplete="off" >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name='email' value={credentials.email} onChange={onChange}  autoComplete="off" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange}  autoComplete="new-password"  />
            </Form.Group>
            <div className='mt-3'>
              <Button type='submit' variant="success">Submit</Button>{' '}
              <Button onClick={handleNewUserClick} className='ms-2' variant="danger">I'm a new user</Button>{' '}
            </div>
          </Form>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  );
}

export default Login;





















