



















//////////////////////////////////////////correct code/////////////
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';
import PaymentForm from './PaymentForm';
import './Cart.css';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const stripePromise = loadStripe('pk_test_51PGaGXSDnZaPIrbLlg7pyXGCiJhOHQtoYInhwl06vkaNjTSYxikolQV5dOwVJow2nKzOhfoyZ1siZX8NR1iRaI8600xIahsPqL');

function Cart() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const data = useCart();
  const dispatch = useDispatchCart();

  ////
  // Inside your handleAddToCart function in the component where you add items to the cart


  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
        <div className='d-flex justify-content-center align-items-center'>
          <img style={{ height: "400px" }} src='https://statementclothing.net/images/cart.gif' alt="Empty Cart" />
        </div>
      </div>
    );
  }

  const handlerCheckout = () => {
    setShowPaymentForm(true);
  };

  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("https://food-cart-mern-server-6.onrender.com/api/orderData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    console.log("Order Response:", response);
    if (response && response.status === 200) {
      dispatch({ type: "DROP" });
      // alert('Order placed successfully!');
      toast.success('Order placed successfully!');
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <>
      <div className='cart-container'>
        <div className='cart-content p-5 shadow'>
          <h1>Cart Summary</h1>
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-2">
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
                  {data.map((food, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{food.name}</td>
                      <td>{food.quantity}</td>
                      <td>{food.size}</td>
                      <td>{food.price}</td>
                      <td>
                        <button className='btn' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                          <i className='fa-solid fa-trash text-danger'></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='mt-3'>
            <h2 style={{ color: "orange" }}>Total Price: ${totalPrice}/-</h2>
          </div>
          <Button style={{ backgroundColor: "orangered" }} variant="success" onClick={handlerCheckout}>Buy Now</Button>{' '}
        </div>
      </div>
      {showPaymentForm && (
        <Modal onClose={() => setShowPaymentForm(false)}>
          <h2 className='ms-4'>Payment</h2>
          <Elements stripe={stripePromise}>
            <PaymentForm totalPrice={totalPrice} handleCheckout={handleCheckout} />
          </Elements>
        </Modal>
      )}
    </>
  );
}

export default Cart;





///////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Modal from './Modal';
// import PaymentForm from './PaymentForm';
// import './Cart.css';
// import { useCart, useDispatchCart } from '../components/ContextReducer';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51PGaGXSDnZaPIrbLlg7pyXGCiJhOHQtoYInhwl06vkaNjTSYxikolQV5dOwVJow2nKzOhfoyZ1siZX8NR1iRaI8600xIahsPqL');

// function Cart() {
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const dispatch = useDispatchCart();
//   const history = useHistory();

//   useEffect(() => {
//     const cartData = localStorage.getItem('cartData');
//     if (cartData) {
//       setCartItems(JSON.parse(cartData));
//     }
//   }, []);

//   const saveCartToLocalStorage = (cartData) => {
//     localStorage.setItem('cartData', JSON.stringify(cartData));
//   };

//   const handleRemoveItem = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     setCartItems(updatedCart);
//     saveCartToLocalStorage(updatedCart);
//   };

//   const handleCheckout = async () => {
//     let userEmail = localStorage.getItem("userEmail");
//     let response = await fetch("http://localhost:5001/api/orderData", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         order_data: cartItems,
//         email: userEmail,
//         order_date: new Date().toDateString()
//       })
//     });

//     console.log("Order Response:", response);
//     if (response && response.status === 200) {
//       dispatch({ type: "DROP" });
//       alert('Order placed successfully!');
//     }
//   };

//   const handleContinueShopping = () => {
//     history.push('/');
//   };

//   let totalPrice = cartItems.reduce((total, food) => total + food.price, 0);

//   return (
//     <>
//       <div className='cart-container'>
//         <div className='cart-content p-5 shadow'>
//           <h1>Cart Summary</h1>
//           <div className="row">
//             <div className="col-lg-12 col-md-6 col-sm-2">
//               <table className='table'>
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Name</th>
//                     <th>Quantity</th>
//                     <th>Option</th>
//                     <th>Price</th>
//                     <th>...</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map((food, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{food.name}</td>
//                       <td>{food.quantity}</td>
//                       <td>{food.size}</td>
//                       <td>{food.price}</td>
//                       <td>
//                         <button className='btn' onClick={() => handleRemoveItem(index)}>
//                           <i className='fa-solid fa-trash text-danger'></i>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className='mt-3'>
//             <h2 style={{ color: "orange" }}>Total Price: ${totalPrice}/-</h2>
//           </div>
//           <Button variant="success" onClick={() => setShowPaymentForm(true)}>Payment</Button>{' '}
//         </div>
//       </div>
//       <p style={{ color: 'white', textAlign: 'center', marginTop: '10px', cursor: 'pointer' }} onClick={handleContinueShopping}>Continue shopping with us</p>
//       {showPaymentForm && (
//         <Modal onClose={() => setShowPaymentForm(false)}>
//           <h2 className='ms-4'>Payment</h2>
//           <Elements stripe={stripePromise}>
//             <PaymentForm totalPrice={totalPrice} handleCheckout={handleCheckout} />
//           </Elements>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default Cart;
