import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function MyOrders() {
  const [orderData, setorderData] = useState([]);

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem('userEmail'));
    await fetch("https://food-cart-mern-server-5.onrender.com/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:localStorage.getItem('userEmail')
      })
    }).then(async (res) => {
      let response = await res.json();
      setorderData(response.orderData);
      console.log(response.orderData)
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  // return (
  //   <>
  //     <div>
  //       <Header />
  //     </div>
  //     <div className='container'>
  //       <div className='row'>
  //         {orderData.length !== 0 && orderData.map(data => (
  //           data.order_data && data.order_data.map((item, index) => (
  //             <div key={index}>
  //               {item[0].Order_date && (
  //                 <div className='m-auto mt-5'>
  //                   {data = item[0].Order_date}
  //                   <hr />
  //                 </div>
  //               )}
  //               {item.map((arrayData, i) => (
  //                 !arrayData.Order_date && (
  //                   <div key={i} className='col-12 col-md-6 col-lg-3'>
  //                     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
  //                       <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
  //                       <div className="card-body">
  //                         <h5 className="card-title">{arrayData.name}</h5>
  //                         <div className='container w-100 p-0' style={{ height: "38px" }}>
  //                           <span className='m-1'>{arrayData.qty}</span>
  //                           <span className='m-1'>{arrayData.size}</span>
  //                           <span className='m-1'>{data}</span>
  //                           <div className=' d-inline ms-2 h-100 w-20 fs-5' >
  //                             ₹{arrayData.price}/-
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 )
  //               ))}
  //             </div>
  //           ))
  //         ))}
  //       </div>
  //     </div>
  //   </>
  // );



  // return (
  //   <>
  //     <div>
  //       <Header />
  //     </div>
  //     <div className='container'>
  //       <div className='row'>
  //         {Array.isArray(orderData) && orderData.length !== 0 && orderData.map(data => (
  //           data.order_data && data.order_data.map((item, index) => (
  //             <div key={index}>
  //               {item[0].Order_date && (
  //                 <div className='m-auto mt-5'>
  //                   {data = item[0].Order_date}
  //                   <hr />
  //                 </div>
  //               )}
  //               {Array.isArray(item) && item.map((arrayData, i) => (
  //                 !arrayData.Order_date && (
  //                   <div key={i} className='col-12 col-md-6 col-lg-3'>
  //                     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
  //                       <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
  //                       <div className="card-body">
  //                         <h5 className="card-title">{arrayData.name}</h5>
  //                         <div className='container w-100 p-0' style={{ height: "38px" }}>
  //                           <span className='m-1'>{arrayData.quantity}</span>
  //                           <span className='m-1'>{arrayData.size}</span>
  //                           <span className='m-1'>{data}</span>
  //                           <div className=' d-inline ms-2 h-100 w-20 fs-5' >
  //                             ₹{arrayData.price}/-
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 )
  //               ))}
  //             </div>
  //           ))
  //         ))}
  //       </div>
  //     </div>
  //   </>
  // );
  

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='container'>
        <div className='row'>
          {orderData.length !== 0 && orderData.order_data.map((order, index) => (
            <div key={index}>
              
              {order[0].Order_date && (
                <div className='m-auto mt-5'style={{fontSize:"24px"}}>
                  {order[0].Order_date}
                  <hr />
                </div>
              )}
             
              {order.slice(1).map((item, i) => (
                <div key={i} className='col-12 col-md-6 col-lg-3'>
                  <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                    {/* <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                    <div className="card-body">
                      <h5 className="card-title"style={{ color: 'blue' }}>{item.name}</h5>
                      <div className='container w-100 p-0' style={{ height: "38px" }}>
                        <span className='m-1' style={{ color: 'green' }}>{item.quantity}</span>
                        <span className='m-1'style={{ color: 'red' }}>{item.size}</span>
                        <span className='m-1'style={{ color: 'purple' }}>{order[0].Order_date}</span>
                        <div className=' d-inline ms-4 h-100 w-20 fs-5'style={{ color: 'orange' }} >
                          ₹{item.price}/-
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}

export default MyOrders;
