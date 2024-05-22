
// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// function PaymentForm({ totalPrice }) {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);
    
//     // Check if the card number is complete
//     if (!cardElement || cardElement._empty || !cardElement._complete) {
//       alert('Your card number is incomplete.');
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error('Stripe Error:', error);
//     } else {
//       console.log(paymentMethod);
//       alert('Your order is placed!!');
//       // Send paymentMethod.id to your server to complete the payment
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <h4 className='ms-4 mt-2' style={{color:'yellow'}}>Total Price: ${totalPrice}</h4>
//       <button className='btn btn-success ms-4 mt-3' type="submit" disabled={!stripe}>
//         Pay
//       </button>
//       {/* Display total price */}
//     </form>
//   );
// }

// export default PaymentForm;
// ////////////////////////////////////////////
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Button from 'react-bootstrap/Button';
// import { useCart, useDispatchCart } from '../components/ContextReducer';

// function PaymentForm({ totalPrice, handleCheckout }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [address, setAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: ''
//   });
//   let data = useCart();
//   let dispatch = useDispatchCart();
 
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);
    
//     // Check if the card number is complete
//     if (!cardElement || cardElement._empty || !cardElement._complete) {
//       toast.error('Your card number is incomplete.');
//       return;
//     }

//     // Check if any address field is empty
//     for (const key in address) {
//       if (address[key] === '') {
//         toast.error('Please fill all address fields.');
//         return;
//       }
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error('Stripe Error:', error);
//     } else {
//       console.log(paymentMethod);
//       alert('Your order is placed!!');
//       // handleCheckout();
//       handleOrderPlaced();
//       // Send paymentMethod.id and address to your server to complete the payment
//     }
//   };

//   const handleChange = (event) => {
//     setAddress({
//       ...address,
//       [event.target.name]: event.target.value
//     });
//   };
//   // Function to calculate total amount including delivery charge
//   const calculateTotalAmount = () => {
//     const deliveryCharge = totalPrice < 200 ? 10 : 0; // Define delivery charge logic
//     return totalPrice + deliveryCharge;
//   };

//   ////
//   // const handleCheckout = async () => {
//   //   let userEmail = localStorage.getItem("userEmail");
//   //   let response = await fetch("http://localhost:5001/api/orderData", {
//   //       method: "POST",
//   //       headers: {
//   //           'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify({
//   //         order_data: data,
//   //           email: userEmail,
//   //           order_date: new Date().toDateString() // Corrected key name
//   //       })
//   //   });

//   //   console.log("Order Response:", response);
//   //   if (response && response.status === 200) {
//   //       dispatch({ type: "DROP" });
       
//   //   }
//   // };
//   return (
//     <form className='' onSubmit={handleSubmit}>
//       <h4 className='ms-4 mt-2' style={{color:'yellow'}}>Total Price: ${totalPrice}</h4>
//       <div className="mb-3 w-75 ms-4">
//         <label style={{color:'white'}} htmlFor="street" className="form-label">Street</label>
//         <input type="text" className="form-control" id="street" name="street" value={address.street} onChange={handleChange} />
//       </div>
//       <div className="mb-3 w-75 ms-4">
//         <label style={{color:'white'}} htmlFor="city" className="form-label">City</label>
//         <input type="text" className="form-control" id="city" name="city" value={address.city} onChange={handleChange} />
//       </div>
//       <div className="mb-3 w-75 ms-4">
//         <label style={{color:'white'}} htmlFor="state" className="form-label">State</label>
//         <input type="text" className="form-control" id="state" name="state" value={address.state} onChange={handleChange} />
//       </div>
//       <div className="mb-3 w-75 ms-4">
//         <label style={{color:'white'}} htmlFor="zipcode" className="form-label">Zip Code</label>
//         <input type="text" className="form-control" id="zipcode" name="zipcode" value={address.zipcode} onChange={handleChange} />
//       </div>
//       <div className="mb-3 w-75 ms-4">
//         <label style={{color:'white'}} htmlFor="country" className="form-label">Country</label>
//         <input type="text" className="form-control " id="country" name="country" value={address.country} onChange={handleChange} />
//       </div>
//       <CardElement style={{color:'white'}} className='ms-4' />
//       {/* <h4 className='ms-4 mt-2' style={{ color: 'yellow' }}>Total Price: ${calculateTotalAmount()}</h4> */}
//    <div className='d-flex justify-content-arround ms-4 mt-3'>
//       <h5  style={{color:'yellow'}} >  Total Price: ${calculateTotalAmount()}</h5>
//           {totalPrice < 200 && <span style={{ fontSize: '14px', marginLeft: '10px', color: 'red' }}> (Includes $10 delivery charge for purchase below $200)</span>}
//    </div>
//       <button className='btn btn-success ms-4 mt-3' type="submit" disabled={!stripe}>
//         Pay Now
//       </button>
//       <Button variant="success" onClick={handleCheckout}>CheckOut</Button>{' '}
//       <p style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>Continue shopping with us</p>
//     </form>
//   );
// }

// export default PaymentForm;









///////////////////////////////////////////////correct code 
import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import { useCart, useDispatchCart } from '../components/ContextReducer';


//////////////////////////continue


function PaymentForm({ totalPrice, handleCheckout }) {
  
  const stripe = useStripe();
  const elements = useElements();
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  ///////////////////

  ////////////////////////
  let data = useCart();
  
  
  const dispatch = useDispatchCart(); // Access dispatch function to update cart

 
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    
    // Check if the card number is complete
    if (!cardElement || cardElement._empty || !cardElement._complete) {
      toast.error('Your card number is incomplete.');
      return;
    }

    // Check if any address field is empty
    for (const key in address) {
      if (address[key] === '') {
        toast.error('Please fill all address fields.');
        return;
      }
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Stripe Error:', error);
    } else {
      console.log(paymentMethod);
      toast.success('Payment successful!');
      setPaymentSuccess(true); 
      // handleCheckout();
      // Send paymentMethod.id and address to your server to complete the payment
    }
  };
//////////////////////////continue------------------



  const handleChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value
    });
  };


  // Function to calculate total amount including delivery charge
  const calculateTotalAmount = () => {
    const deliveryCharge = totalPrice < 200 ? 10 : 0; // Define delivery charge logic
    return totalPrice + deliveryCharge;
  };

 ///''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    dispatch({ type: 'LOAD_FROM_STORAGE', cart: JSON.parse(storedCart) });
  }
};

useEffect(() => {
  loadCartFromLocalStorage();
}, []);


  return (
    <form className='' onSubmit={handleSubmit}>
      <h4 className='ms-4 mt-2' style={{color:'yellow'}}>Total Price: ${totalPrice}</h4>
      <div className="mb-3 w-75 ms-4">
        <label style={{color:'white'}} htmlFor="street" className="form-label">Street</label>
        <input type="text" className="form-control" id="street" name="street" value={address.street} onChange={handleChange} />
      </div>
      <div className="mb-3 w-75 ms-4">
        <label style={{color:'white'}} htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" name="city" value={address.city} onChange={handleChange} />
      </div>
      <div className="mb-3 w-75 ms-4">
        <label style={{color:'white'}} htmlFor="state" className="form-label">State</label>
        <input type="text" className="form-control" id="state" name="state" value={address.state} onChange={handleChange} />
      </div>
      <div className="mb-3 w-75 ms-4">
        <label style={{color:'white'}} htmlFor="zipcode" className="form-label">Zip Code</label>
        <input type="text" className="form-control" id="zipcode" name="zipcode" value={address.zipcode} onChange={handleChange} />
      </div>
      <div className="mb-3 w-75 ms-4">
        <label style={{color:'white'}} htmlFor="country" className="form-label">Country</label>
        <input type="text" className="form-control " id="country" name="country" value={address.country} onChange={handleChange} />
      </div>
      {/* <CardElement style={{color:'white'}} className='ms-4' /> */}

      <CardElement
        className='ms-4 bg-light w-75 mb-3 p-2 rounded'
        
      />
      <div className='d-flex justify-content-arround ms-4 mt-3'>
        <h5 style={{color:'yellow'}}>Total Price: ${calculateTotalAmount()}</h5>
        {totalPrice < 200 && <span style={{ fontSize: '14px', marginLeft: '10px', color: 'red' }}> (Includes $10 delivery charge for purchase below $200)</span>}
      </div>
      {!paymentSuccess && ( // Conditionally render Pay Now button if payment is not successful
        <button style={{backgroundColor:'orangered'}} className='btn btn-success ms-4 mt-3' type="submit" disabled={!stripe}>
          Pay Now
        </button>
      )}
      {/* <button  className='btn btn-success ms-4 mt-3' type="submit" disabled={!stripe}>
        Pay Now
      </button> */}
      {/* <Button variant="success" onClick={handleCheckout}>CheckOut</Button>{' '} */}
      {paymentSuccess && ( // Conditionally render Checkout button if payment is successful
        <Button variant="success ms-4" onClick={handleCheckout}>CheckOut</Button>
      )}
      {/* <p style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>Continue shopping with us</p> */}
      <a href="/" style={{ color: 'orangered', textAlign: 'center', display: 'block', marginTop: '10px', textDecoration: 'none' }} className='fs-4'>Shop From FlavorsRush<i class="fa-solid fa-cart-shopping"></i></a>
  

    </form>
  );
}

export default PaymentForm;

//-------------------------------------------------------

