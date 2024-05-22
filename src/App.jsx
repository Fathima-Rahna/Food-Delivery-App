
// import {  Route, Routes } from 'react-router-dom'
// import Home from './Pages/Home'

// // import Cart from './Pages/Cart'
// import Login from './Pages/Login'
// import Signup from './Pages/Signup'

// import Logout from './Pages/Logout'
// import { CartProvider } from './components/ContextReducer'
// import MyOrders from './Pages/MyOrder'


// import PaymentForm from './Pages/PaymentForm'

// function App() {
 

//   return (
//     <>

//        <CartProvider>
//       <Routes>
//       <Route path='/' element={< Home />} />
//       {/* <Route path='/cart' element={<Cart/>} /> */}
//       <Route path='/login' element={<Login/>} />
//       <Route path='/signup' element={<Signup />}/>
//       <Route path='/orders' element={<MyOrders/>}/>
//       <Route path='/payment' element={<PaymentForm/>} />
//       <Route path='/logout' element={<Logout/>}/>
      
//       </Routes>
//       </CartProvider>
//     </>
//   )
// }

// export default App
// ===========================






import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Logout from './Pages/Logout';
import MyOrders from './Pages/MyOrder';
import PaymentForm from './Pages/PaymentForm';
import { CartProvider } from './components/ContextReducer';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe promise with your Stripe public key
const stripePromise = loadStripe('pk_test_51PGaGXSDnZaPIrbLlg7pyXGCiJhOHQtoYInhwl06vkaNjTSYxikolQV5dOwVJow2nKzOhfoyZ1siZX8NR1iRaI8600xIahsPqL');

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/orders' element={<MyOrders />} />
        {/* Wrap PaymentForm with Elements provider */}
        <Route path='/payment' element={<Elements stripe={stripePromise}><PaymentForm /></Elements>} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import Signup from './Pages/Signup';
// import Logout from './Pages/Logout';
// import MyOrders from './Pages/MyOrder';
// import PaymentForm from './Pages/PaymentForm';
// import { CartProvider } from './components/ContextReducer';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51PGaGXSDnZaPIrbLlg7pyXGCiJhOHQtoYInhwl06vkaNjTSYxikolQV5dOwVJow2nKzOhfoyZ1siZX8NR1iRaI8600xIahsPqL');

// function App() {
//   const [cart, setCart] = useState([]);

//   const updateCart = (newCart) => {
//     setCart(newCart);
//   };

//   return (
//     <CartProvider>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/orders' element={<MyOrders />} />
//         {/* Pass the updateCart function to the PaymentForm component */}
//         <Route path='/payment' element={<Elements stripe={stripePromise}><PaymentForm updateCart={updateCart} /></Elements>} />
//         <Route path='/logout' element={<Logout />} />
//       </Routes>
//     </CartProvider>
//   );
// }

// export default App;
