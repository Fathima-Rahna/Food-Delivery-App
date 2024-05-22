import React from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';
import { Form } from 'react-bootstrap';
// import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';

import Cards from '../components/Cards'
import Footer from '../components/Footer';



function Home() {
    // const [foodCat, setFoodCat] = useState([]);
    // const [foodItem, setFoodItem] = useState([]);

    // // const loadData = async () => {
    // //     try {
    // //         const response = await fetch("http://localhost:5001/api/foodData", {
    // //             method: "POST",
    // //             headers: {
    // //                 'Content-Type': 'application/json'
    // //             }
    // //         });
    // //         response = await response.json();
    // //         setFoodItem(response[0]);
    // //         setFoodCat(response[1]);
    // //     } catch (error) {
    // //         console.error('Error fetching or setting data:', error);
    // //     }
    // // }
    // const loadData = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5001/api/foodData", {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         const responseData = await response.json(); // Rename response to responseData
    //         setFoodItem(responseData[0]);
    //         setFoodCat(responseData[1]);
    //     } catch (error) {
    //         console.error('Error fetching or setting data:', error);
    //     }
    // }
    

    // useEffect(() => {
    //     loadData()
    // }, [])


   
    // const [foodCat, setFoodCat] = useState([]);
    // const [foodItem, setFoodItem] = useState([]);
    // const [error, setError] = useState(null); // State for handling errors

    // const loadData = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5001/api/foodData", {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         if (!response.ok) { // Check if response is successful
    //             throw new Error('Failed to fetch data');
    //         }
    //         const responseData = await response.json();
    //         console.log(responseData); // Log response data to console for debugging
    //         setFoodItem(responseData[0]);
    //         setFoodCat(responseData[1]);
    //     } catch (error) {
    //         console.error('Error fetching or setting data:', error);
    //         setError(error.message); // Set error state with error message
    //     }
    // }

    const [search,setSearch]= useState('');
    const [foodItems, setFoodItems] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            // const response = await fetch("http://localhost:5001/api/foodData", {
                const response = await fetch("https://food-cart-mern-server-5.onrender.com/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            console.log(responseData); // Log response data for debugging
            setFoodItems(responseData.foodItems);
            setFoodCategory(responseData.foodCategory);
        } catch (error) {
            console.error('Error fetching or setting data:', error);
            setError(error.message);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    




    // const [foodCategory, setFoodCategory] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:5001/api/foodData", {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    //             const data = await response.json();
    //             setFoodItems(data.foodItems);
    //             setFoodCategory(data.foodCategory);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    return (
        <>

            <Header />

           



            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.creativemarket.com/0.1.0/ps/4833749/1820/1213/m1/fpnw/wm1/wbqwlmk8mlit5kyyjpb0oeujbpxl7cdhdsl5x2gpo2chgdpuw1ulo22kdnnhhl76-.jpg?1532958573&s=79f2b8451dbf2e4e01281e7c7cc641e5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
                        <div className="mx-auto" style={{ maxWidth: '500px' }}>
                            <Form className='d-flex justify-content-center '>
                                <Form.Control style={{ width: '100%', height: '50px' }} type="text" placeholder="Search Products!!!" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                                {/* <button className='btn btn-outline-success text-white bg-success ms-2 ' type='submit'>Search..</button> */}
                            </Form>
                        </div>
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpapercave.com/wp/wp7524939.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
                        <div className="mx-auto" style={{ maxWidth: '500px' }}>
                            <Form>
                                <Form.Control style={{ width: '100%', height: '50px' }} type="text" placeholder="Search Products!!!" />
                            </Form>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/85/28/ff/8528ff626ab682222092a855472d7df3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
                        <div className="mx-auto" style={{ maxWidth: '500px' }}>
                            <Form>
                                <Form.Control style={{ width: '100%', height: '50px' }} type="text" placeholder="Search Products!!!" />
                            </Form>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <div className='container'>
                {error ? (
                    <div>Error: {error}</div>
                ) : foodCat && foodCat.length > 0 ? (
                    foodCat.map((data) => {
                        return (
                            <div key={data._id} className='row mb-3'>
                                <div className='fs-3 m-3'>{data.CategoryName}</div>
                                <hr />
                                {foodItem && foodItem.length > 0 && (
                                    foodItem
                                        .filter((item) => item.CategoryName === data.CategoryName)
                                        .map((filterItems) => {
                                            return (
                                                <div key={filterItems._id}>
                                                    <Cards />
                                                </div>
                                            );
                                        })
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div>No categories found</div>
                )}
            </div> */}
                 <div className='container-fluid p-5'>
                {error ? (
                    <div>Error: {error}</div>
                ) : foodCategory && foodCategory.length > 0 ? (
                    foodCategory.map((category) => {
                        return (
                            <div key={category._id} className='row mb-3'>
                                <div style={{ color: "orange",fontSize:'40px' }} className='bold m-3'>{category.CategoryName}</div>
                                <hr />
                                {foodItems && foodItems.length > 0 && (
                                    foodItems
                                        .filter((item) => (item.CategoryName === category.CategoryName)&& (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                                        .map((item) => {
                                            return (
                                                <div key={item._id} className='col-12 col-md-6 col-lg-3'>
                                                   <Cards foodItem={item}
                                                   options={item.options[0]}
                                                  
                                                   >

                                                   </Cards>
                                                </div>
                                            );
                                        })
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div>No categories found</div>
                )}
            </div>



             

            {/* //////////////////////////////////////////////card////////////////////////////////////////////// */}
<div style={{marginTop:'100px'}} className="container">
      <div className="row ">
        <div className="col-lg-6">
            <img height={'600px'} width={'600px'} src='https://img.freepik.com/free-photo/fresh-parsley-vegetables_23-2147694205.jpg?w=1800&t=st=1679061870~exp=1679062470~hmac=8da78e3bdc2002c9c56ada850231f5c18f1db219b9c8856ef8ee8f911ec4a957'  />
        </div>
        <div className="col-lg-6 d-flex align-items-center">
         <h3>Social media is the perfect platform for restaurants, bakeries & home-chefs to connect with foodies across the globe. With finger-licking recipes from chefs to mouth-watering images of perfectly plated dishes, social media seems to be the perfect platform to share all things yummy! No wonder why customer spending increases by over 40% while eating out of places whose social handles they've connected with before.

And restaurants and food businesses are cashing in on this. Here's our curated list of social content ideas to add a unique flavor to your brand recipe. Feel free to cycle through these ideas to have your customers keep coming back for more!

Let's dive in.</h3>
        </div>
      </div>
    </div>



    <div style={{ marginTop: '100px' }} className="container">
  <div className="row d-flex flex-column align-items-center">
    <div className="col-lg-12 justify-content-center "> 
      <h1 className='fw-bold'>Insta-Worthy Content Ideas Based Around Your Menu</h1>
      <h3>1. Chef's special</h3>
      <h4>The specials on your menu can be a great source of content for your users. You can create specials around festivals, a local event, time of the year, or just everyday specials. Make sure to keep your customers keep coming back for more! The time-bound nature of these items can create FOMO and encourage more visits.</h4>
    </div>
    <div className="col-lg-12 d-flex justify-content-center"> 
      <img style={{ maxWidth: '800px' }} src="https://blog.getmason.io/content/images/2021/01/image-19.png" />
    </div>
    <div className="col-lg-12 mt-5">
     <h3 className='fw-bold'>2. True to you</h3>
     <h4>Does your restaurant offer vegan-friendly options? Or maybe you’re a baker that provides lactose-free products on your menu. Your restaurant may offer that something special which attracts a certain set of foodies. Don't forget to call this out - menus like vegan, gluten-free, organic ingredients and fresh catch are great ideas to grab those customer niches looking to try something new.</h4>
    </div>
    <div className="col-lg-12 d-flex justify-content-center">
     <img  style={{ maxWidth: '800px',height:'500px'}} src='https://blog.getmason.io/content/images/2021/01/image-20.png'  />
    </div>


    <div className="col-lg-12 mt-3">
     <h3 className='fw-bold'>3. New launches</h3>
     <h4>Whenever you launch new items on your menu, make sure to hype it up enough to get customers excited about it! New launches are some of the best performing social media campaigns for restaurants. It can consist of a series of pre-launch announcements, launch item pictures & special offers.</h4>
    </div>
    <div className="col-lg-12 d-flex justify-content-center">
     <img  style={{ maxWidth: '800px',height:'500px'}} src='https://blog.getmason.io/content/images/2021/01/image-37.png'  />
    </div>


    <div className="col-lg-12 mt-3">
     <h3 className='fw-bold'>4.Spill those nutritious beans</h3>
     <h4>Is there anyone not watching their carbs right now? Almost every person is on their path to a healthy lifestyle and nutritious food is the first step to it. If you prioritize healthy food options in your restaurant, it's imperative you talk about this. Since customers love transparency, you should not hesitate from sharing nutritional information about the dishes on your menu and their benefits against the other options.</h4>
    </div>
    <div className="col-lg-12 d-flex justify-content-center">
     <img  style={{ maxWidth: '800px',height:'500px'}} src='https://blog.getmason.io/content/images/2021/01/image-29.png'  />
    </div>

    <div className="col-lg-12 mt-3">
     <h3 className='fw-bold'>5.Special Promos</h3>
     <h4>Festivals and special events are a great time to engage with your users! Show off your restaurant spirit by sharing special offers for your social media followers. Share discounts on your menu items best suited for the festive mood.</h4>
    </div>
    <div className="col-lg-12 d-flex justify-content-center">
     <img  style={{ maxWidth: '900px',height:'500px'}} src='https://blog.getmason.io/content/images/2021/01/image-31.png'  />
    </div>
  </div>
</div>
<div style={{marginTop:'100px'}} className="container mb-5">
  <h1 className='fw-bold'> Share those special moments<i className="fa-solid fa-face-smile text-primary p-2"></i><i className="fa-solid fa-face-smile-beam text-primary p-2"></i></h1>
  <div className="Row d-flex flex-row justify-content-between shadow mt-5">
    <div className="col-lg-4 d-flex">
      <img src='https://blog.getmason.io/content/images/2021/01/image-32.png'  />
    </div>
    <div className="col-lg-4 ">
      <img src='https://blog.getmason.io/content/images/2021/01/image-33.png'  />
    </div>
    <div className="col-lg-4">
      <img height={'400px'} width={'400px'} src="https://th.bing.com/th/id/OIP.-v_4GOhGfdln3tO3rdc8hQHaE0?w=900&h=586&rs=1&pid=ImgDetMain"  />
    </div>
  </div>

</div>



<Footer/>

        </>
    )
}

export default Home







// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Carousel from 'react-bootstrap/Carousel';
// import { Form } from 'react-bootstrap';
// import './Home.css';
// import Cards from '../components/Cards';
// import Footer from '../components/Footer';

// function Home() {
//     const [search, setSearch] = useState('');
//     const [foodItems, setFoodItems] = useState([]);
//     const [foodCategory, setFoodCategory] = useState([]);
//     const [error, setError] = useState(null);

//     const loadData = async () => {
//         try {
//             const response = await fetch("http://localhost:5001/api/foodData", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const responseData = await response.json();
//             console.log(responseData); // Log response data for debugging
//             setFoodItems(responseData.foodItems);
//             setFoodCategory(responseData.foodCategory);
//         } catch (error) {
//             console.error('Error fetching or setting data:', error);
//             setError(error.message);
//         }
//     }

//     useEffect(() => {
//         loadData();
//     }, []);

//     return (
//         <>
//             <Header />
//             <Carousel data-bs-theme="dark">
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://images.creativemarket.com/0.1.0/ps/4833749/1820/1213/m1/fpnw/wm1/wbqwlmk8mlit5kyyjpb0oeujbpxl7cdhdsl5x2gpo2chgdpuw1ulo22kdnnhhl76-.jpg?1532958573&s=79f2b8451dbf2e4e01281e7c7cc641e5"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
//                         <div className="mx-auto" style={{ maxWidth: '500px' }}>
//                             <Form className='d-flex justify-content-center'>
//                                 <Form.Control
//                                     style={{ width: '100%', height: '50px' }}
//                                     type="text"
//                                     placeholder="Search Products!!!"
//                                     value={search}
//                                     onChange={(e) => { setSearch(e.target.value) }}
//                                 />
//                             </Form>
//                         </div>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://wallpapercave.com/wp/wp7524939.jpg"
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                         <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
//                         <div className="mx-auto" style={{ maxWidth: '500px' }}>
//                             <Form>
//                                 <Form.Control
//                                     style={{ width: '100%', height: '50px' }}
//                                     type="text"
//                                     placeholder="Search Products!!!"
//                                 />
//                             </Form>
//                         </div>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://i.pinimg.com/originals/85/28/ff/8528ff626ab682222092a855472d7df3.jpg"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
//                         <div className="mx-auto" style={{ maxWidth: '500px' }}>
//                             <Form>
//                                 <Form.Control
//                                     style={{ width: '100%', height: '50px' }}
//                                     type="text"
//                                     placeholder="Search Products!!!"
//                                 />
//                             </Form>
//                         </div>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>

//             <div className='container-fluid p-5'>
//                 {error ? (
//                     <div>Error: {error}</div>
//                 ) : foodCategory && foodCategory.length > 0 ? (
//                     foodCategory.map((category) => {
//                         return (
//                             <div key={category._id} className='row mb-3'>
//                                 <div style={{ color: "orange", fontSize: '40px' }} className='bold m-3'>{category.CategoryName}</div>
//                                 <hr />
//                                 {foodItems && foodItems.length > 0 && (
//                                     foodItems
//                                         .filter((item) => (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
//                                         .map((item) => {
//                                             return (
//                                                 <div key={item._id} className='col-12 col-md-6 col-lg-3 mb-3'>
//                                                     <Cards foodItem={item} options={item.options[0]} />
//                                                 </div>
//                                             );
//                                         })
//                                 )}
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <div>No categories found</div>
//                 )}
//             </div>

//             <div style={{ marginTop: '100px' }} className="container">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <img height={'600px'} width={'100%'} src='https://img.freepik.com/free-photo/fresh-parsley-vegetables_23-2147694205.jpg?w=1800&t=st=1679061870~exp=1679062470~hmac=8da78e3bdc2002c9c56ada850231f5c18f1db219b9c8856ef8ee8f911ec4a957' />
//                     </div>
//                     <div className="col-lg-6 d-flex align-items-center">
//                         <h3>Social media is the perfect platform for restaurants, bakeries & home-chefs to connect with foodies across the globe...</h3>
//                     </div>
//                 </div>
//             </div>

//             <div style={{ marginTop: '100px' }} className="container">
//                 <div className="row d-flex flex-column align-items-center">
//                     <div className="col-lg-12 justify-content-center">
//                         <h1 className='fw-bold'>Insta-Worthy Content Ideas Based Around Your Menu</h1>
//                         <h3>1. Chef's special</h3>
//                         <h4>The specials on your menu can be a great source of content for your users...</h4>
//                     </div>
//                     <div className="col-lg-12 d-flex justify-content-center">
//                         <img style={{ maxWidth: '800px' }} src="https://blog.getmason.io/content/images/2021/01/image-19.png" />
//                     </div>
//                     <div className="col-lg-12 mt-5">
//                         <h3 className='fw-bold'>2. True to you</h3>
//                         <h4>Does your restaurant offer vegan-friendly options? Or maybe you’re a baker that provides lactose-free products...</h4>
//                     </div>
//                     <div className="col-lg-12 d-flex justify-content-center">
//                         <img style={{ maxWidth: '800px', height: '500px' }} src='https://blog.getmason.io/content/images/2021/01/image-20.png' />
//                     </div>
//                     <div className="col-lg-12 mt-3">
//                         <h3 className='fw-bold'>3. New launches</h3>
//                         <h4>Whenever you launch new items on your menu, make sure to hype it up enough to get customers excited about it...</h4>
//                     </div>
//                     <div className="col-lg-12 d-flex justify-content-center">
//                         <img style={{ maxWidth: '800px', height: '500px' }} src='https://blog.getmason.io/content/images/2021/01/image-37.png' />
//                     </div>
//                     <div className="col-lg-12 mt-3">
//                         <h3 className='fw-bold'>4. Spill those nutritious beans</h3>
//                         <h4>Is there anyone not watching their carbs right now? Almost every person is on their path to a healthy lifestyle...</h4>
//                     </div>
//                     <div className="col-lg-12 d-flex justify-content-center">
//                         <img style={{ maxWidth: '800px', height: '500px' }} src='https://blog.getmason.io/content/images/2021/01/image-29.png' />
//                     </div>
//                     <div className="col-lg-12 mt-3">
//                         <h3 className='fw-bold'>5. Special Promos</h3>
//                         <h4>Festivals and special events are a great time to engage with your users...</h4>
//                     </div>
//                     <div className="col-lg-12 d-flex justify-content-center">
//                         <img style={{ maxWidth: '800px', height: '500px' }} src='https://blog.getmason.io/content/images/2021/01/image-36.png' />
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </>
//     )
// }

// export default Home;
