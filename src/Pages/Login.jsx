import React from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login() {
  return (
    <>
<Header/>
    {/* <div style={{height:"100vh",width:"100%"}} className='d-flex justify-content-center align-items-center bg-secondary  mb-5'> */}
    <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url('https://www.aristonspecialties.com/wp-content/uploads/2024/01/12.jpg')`, // Set your background image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          paddingLeft:"200px"
        }}
      >
<div className='d-flex mt-3 bg-secondary p-5 shadow'>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{width:"600px"}} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <div className='mt-3'>
      <Button variant="success">Submit</Button>{' '}
      <Button className='ms-2' variant="danger">Danger</Button>{' '}
      

      </div>
     
    </Form>

</div>

    </div>
    </>
  )
}

export default Login