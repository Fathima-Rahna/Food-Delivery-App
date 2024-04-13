import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header'

function Signup() {
  return (
    <>
    <Header/>
    {/* <div style={{height:"100vh",width:"100%"}} className='d-flex justify-content-center align-items-center bg-info'> */}
    <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url('https://images.creativemarket.com/0.1.0/ps/7353029/1820/1213/m1/fpnw/wm1/kiwikc0o9yejexpzwzylxsuy30gsti4hjy5uo9ctmct07xumbwzebvxnoipkfdqc-.jpg?1574572852&s=e825fe743ce9f7c0252aac0e13870e92')`, // Set your background image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    <div className='d-flex shadow p-5 bg-secondary'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  className='mb-3' style={{width:"600px"}} type="text" placeholder="" />
        <Form.Label>Email Address</Form.Label>
        <Form.Control className='mb-3'  style={{width:"600px"}} type="email" placeholder="" />
        <Form.Label> Address</Form.Label>
        <Form.Control className='mb-3'  style={{width:"600px"}} type="text" placeholder="" />

       <div className='mb-3'> <Button variant="success">Click for current Location</Button>{' '}</div>
        <Form.Label> Password</Form.Label>
        <Form.Control className='mb-5'  style={{width:"600px"}} type="text" placeholder="" />
        <div className='mt-3'>
      <Button variant="success">Submit</Button>{' '}
      <Button className='ms-2' variant="danger">Already a user</Button>{' '}
      

      </div>
      </Form.Group>
    </div>
    </div>
    </>
  )
}

export default Signup