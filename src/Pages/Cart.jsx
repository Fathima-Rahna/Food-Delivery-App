import React from 'react'
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';


function Cart() {
  return (
    <>
    <Header/>

<div  className=' p-5 ' style={{ marginTop: '0px',  padding: '50px',  backgroundSize: "cover",height:"100vh",
          backgroundPosition: "center",backgroundImage: `url('https://th.bing.com/th/id/R.d22ec05f6f36f6332f7f42aee6c6fe79?rik=9tQCcuaWG6BaGA&riu=http%3a%2f%2fthehouseofscales.com.au%2fwp-content%2fuploads%2f2018%2f05%2ftransparent-background.png&ehk=6jahbvAQvjDN2nUkaH9HgHOZcaqB5muHfsipHU0uMkI%3d&risl=1&pid=ImgRaw&r=0')`, }}>
  <div style={{width:'100%'}} className='p-5 shadow'>
    <h1>Cart Summary</h1>
    <div style={{width:'100%'}} className="row">
      <div className="col-lg-12">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Option</th>
              <th>Price</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Veg Pizza</td>
              <td>4</td>
              <td>
                4 regular
              </td>
              <td>$10.00</td>
              <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Biriyani</td>
              <td>4</td>
              <td>
                4 regular
              </td>
              <td>$20.00</td>
              <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </table>
      </div>
    </div>
    <div className='mt-3'>
    <h2 style={{color:"orange"}}>Total Price:$30/-</h2>

</div>
<Button variant="success">CheckOut</Button>{' '}
  </div>


</div>

    </>
  )
}

export default Cart