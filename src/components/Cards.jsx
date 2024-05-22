// import React, { useEffect, useRef, useState } from 'react'
// import { useDispatchCart, useCart } from './ContextReducer';

// import { Row, Col, Card, Button } from 'react-bootstrap';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Cards(props) {
//     let dispatch = useDispatchCart();
//     let data = useCart()
//     const priceRef = useRef();
//     let options = props.options;
//     let priceOption = Object.keys(options);
//     // let foodItem = props.foodItems;
//     const [quantity, setQuantity] = useState(1)
//     const [size, setSize] = useState("")
//     const handleAddToCart = async () => {
//         ///////////////////////////
//         let userEmail = localStorage.getItem("userEmail");
//     console.log("User email:", userEmail); // Check if userEmail is retrieved correctly
//     if (!userEmail) {
//         // User is not logged in, show alert to prompt login
//         toast.error('Please login to add items to the cart.');
//         return;
//     }
//         ////////////////////////////
//         let food = []
//         for (const item of data) {
//             if (item.id === props.foodItem._id) {
//                 food = item;
//                 break;
//             }
//         }
//         if (food.length !== 0) {
//             if (food.size === size) {
//                 // await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, quantity: quantity })
//                 await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, quantity: quantity });
//         return;
//             }
//             else if (food.size !== size) {


//                 await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, quantity: quantity, size: size });
//                 return;
//                 // await console.log(data);
//             }
//             return;
//         }
//         await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, quantity: quantity, size: size })

      
//     }
//     let finalPrice = quantity * parseInt(options[size]);
//     useEffect(() => {
//         setSize(priceRef.current.value)
//     }, [])

    
  
//     return (
//         <>
//             <div className='container d-flex align-items-between'  >
                
                
//                 <Row xs={1} sm={2} md={3} lg={4}>
//                     <Col>
//                         <Card style={{ width: '18rem' }} className='mt-3 card-hover'>
//                             <Card.Img style={{ height: '250px' }} variant="top" src={props.foodItem.img} />
//                             <Card.Body>
//                                 <Card.Title>{props.foodItem.name}</Card.Title>
//                                 <hr style={{ color: "orange" }} />
//                                 <div className='d-flex justify-content-between'>
                                   
//                                     <select className='bg-success rounded' onChange={(e) => setQuantity(e.target.value)}>
//                                         {Array.from(Array(6), (e, i) => {
//                                             return (
//                                                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                             )
//                                         })}
//                                     </select>
                                   
//                                     <select className='bg-success rounded ' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                                         {priceOption.map((data) => {
//                                             return <option key={data} value={data}>{data}</option>
//                                         })}
//                                     </select>
//                                     <h5>${finalPrice}/-</h5>
//                                 </div>
                            
//                                 <hr style={{ color: "orange" }} />
//                                 {/* <Button onClick={handleAddToCart} variant="primary">Add to Cart</Button> */}
//                                 <Button onClick={handleAddToCart} variant="primary">Add to Cart</Button>
 
//                             </Card.Body>
//                         </Card>
//                     </Col>
                
//                 </Row>
              
//             </div>

//         </>
//     )
// }

// export default Cards;



///////////////////////////////////
import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cards(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOption = Object.keys(options);
    
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    
    const handleAddToCart = async () => {
        let userEmail = localStorage.getItem("userEmail");
        
        if (!userEmail) {
            // User is not logged in, show toast notification to prompt login
            toast.error('Please login to add items to the cart.');
            return;
        }
        

        let finalPrice = parseInt(options[size]) * quantity; // Calculate final price
    
    let food = data.find(item => item.id === props.foodItem._id && item.size === size);
    
    if (food) {
        // Item already exists in the cart
        // Update quantity and price by summing up the existing quantity and the new quantity
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, quantity: quantity });
    } else {
        // Add a new item to the cart
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, quantity: quantity, size: size });
    }
    }
    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    return (
        <div className='container d-flex align-items-between'>
            <Row xs={1} sm={2} md={3} lg={4}>
                <Col>
                    <Card style={{ width: '18rem' }} className='mt-3 card-hover'>
                        <Card.Img style={{ height: '250px' }} variant="top" src={props.foodItem.img} />
                        <Card.Body>
                            <Card.Title>{props.foodItem.name}</Card.Title>
                            <hr style={{ color: "orange" }} />
                            <div className='d-flex justify-content-between'>
                                <select className='bg-success rounded' onChange={(e) => setQuantity(parseInt(e.target.value))}>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })}
                                </select>
                                <select className='bg-success rounded ' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                    {priceOption.map((data) => {
                                        return <option key={data} value={data}>{data}</option>
                                    })}
                                </select>
                                <h5>${parseInt(options[size]) * quantity}/-</h5>
                            </div>
                            <hr style={{ color: "orange" }} />
                            <Button onClick={handleAddToCart} variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cards;

