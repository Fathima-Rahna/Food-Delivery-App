

// import { useState } from 'react';
// import { Badge } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from './ContextReducer';
// import Cart from '../Pages/Cart';

// // import Modal from '../Modal';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Modal from '../Pages/Modal';
// ////////





// function Header() {
//   const [cartView,setCartView]=useState(false)
//   let data = useCart();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail");
//     toast.warning('you are logged out!!')
//     localStorage.removeItem("authToken");
//     setTimeout(()=>{
//       navigate('/')
//     },2000);
//   };

//   /////////////////////
  

//   return (

//     <Navbar collapseOnSelect expand="lg" className='bg-primary fixed-top' >
//       <Container>
//         <Navbar.Brand>
//           <div className='d-flex'>
//             <Link to={'/'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }}>
//               {/* <i style={{ color: 'orange' }} className="fa-solid fa-caravan "></i> */}
//               <img className='rounded' src="https://logodix.com/logo/1677611.jpg" alt="FlavorsRush" style={{ height: '30px',width:"50px", marginRight: '5px' }} />
//               <span style={{ textDecoration: 'none' }} className='fw-bolder'>Flavors</span>Rush
//             </Link>
//             <ul className='navbar-nav'>
//               <li className='nav-item'>
//                 <Link to={'/'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} className='active ms-2'>Home</Link>
//               </li>
//               {
//                 localStorage.getItem("authToken") &&
//                 <li className='nav-item'>
//                   <Link to={'/orders'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} className='active ms-4'>My Orders</Link>
//                 </li>
//               }
//             </ul>
//           </div>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mx-auto">
//           </Nav>
//           <Nav>
//             {!localStorage.getItem("authToken") ?
//               <div style={{ fontSize: '24px' }} className='d-flex justify-content-between align-items-center me-5'>
//                 <Link className=' mx-1' to={'/login'} style={{ color: 'white', textDecoration: 'none' }}>
//                   Login
//                 </Link>
//                 <Link className='mx-1' to={'/signup'} style={{ color: 'white', textDecoration: 'none' }}>
//                   Signup
//                 </Link>
//               </div>
//               :
//               <div>
//                 <div className='btn bg-white text-sucess ' onClick={()=>{setCartView(true)}}>
//                   My Cart{" "}
//                   {/* <Badge pill bg='danger'>{data.length}</Badge> */}
//                   <Badge pill bg='danger'>{data.length}</Badge>
//                 </div>
//                 {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
//                 <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
//                   Logout
//                 </div>
//               </div>
//             }
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//       <ToastContainer position='top-center' theme='colored' autoClose={3000} />
//     </Navbar>
//   )
// }

// export default Header;






/////nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './ContextReducer';
import Cart from '../Pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Pages/Modal';
import './Header.css'; // Import the CSS file

function Header() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    toast.warning('You are logged out!!');
    localStorage.removeItem("authToken");
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand>
          <div className="d-flex align-items-center">
            <Link style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} to={'/'} className="navbar-brand">
              <img className="rounded" src="https://logodix.com/logo/1677611.jpg" alt="FlavorsRush" style={{ height: '30px', width: "50px", marginRight: '5px' }} />
              <span className="fw-bolder">Flavors</span>Rush
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to={'/'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} className="nav-link active">Home</Link>
            {localStorage.getItem("authToken") &&
              <Link to={'/orders'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} className="nav-link active">My Orders</Link>
            }
          </Nav>
          <Nav>
            {!localStorage.getItem("authToken") ?
              <div className="d-flex justify-content-between align-items-center">
                <Link style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} className="nav-link mx-1" to={'/login'}>Login</Link>
                <Link style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }} className="nav-link mx-1" to={'/signup'}>Signup</Link>
              </div>
              :
              <div className="d-flex align-items-center">
                <div className="btn bg-white text-success me-2" onClick={() => { setCartView(true) }}>
                  My Cart <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                <div className="btn bg-white text-danger" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </Navbar>
  );
}

export default Header;
