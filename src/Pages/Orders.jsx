// import React from 'react'
// import Header from '../components/Header'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function Orders() {
//   return (
//    <>
//   <Header/>
//   <div className='container-fluid d-flex flex-column align-items-between p-5 '>
//       <Container fluid  className='' style={{marginTop:"50px",padding:"50px"} }>
//         <h1 style={{color:"orange"}}>Starters</h1>
//         <hr className='bold' style={{color:"orange"}} />
//         <Row className='d-flex'>
//           <Col>
//             <Card style={{ width: '18rem' }} className='mt-3'>
//               <Card.Img style={{ height: '200px' }} variant="top" src="https://th.bing.com/th/id/OIP.9nRBs-jaoM9m-7M76N6n5AHaFj?w=251&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: '18rem' }} className='mt-3'>
//               <Card.Img style={{ height: '200px' }} variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/italian-starters-1598019460.jpg?crop=0.311xw:0.622xh;0.0114xw,0.169xh&resize=640:*" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: '18rem' }} className='mt-3'>
//               <Card.Img variant="top" src="https://s3.amazonaws.com/images.ecwid.com/images/33810146/1583620580.jpg" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </Col>
         
//         </Row>
//       </Container>

// </div>
//    </>
//   )
// }

// export default Orders



import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Orders() {
  return (
    <>
      <Header />
      <div className='container-fluid d-flex flex-column align-items-between p-5 '>
        <Container fluid style={{ padding: "50px" }}>
          <h1 style={{ color: "orange" }}>Fri May14 2024</h1>
          <hr className='bold' style={{ color: "orange" }} />

          <Row>
            <Col>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }} className='mt-3'>
                    <Card.Img style={{ height: '200px' }} variant="top" src="https://th.bing.com/th/id/OIP.9nRBs-jaoM9m-7M76N6n5AHaFj?w=251&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    <Card.Body>
                      <Card.Title>Veg Pizza</Card.Title>
                      <Card.Text>
                        <div className='d-flex justify-conent-between'>
                         <h6>4 regular</h6>
                         <h6 className='ms-4'>FriMar14</h6>
                        </div>
                     
                      <div className='d-flex justify-conent-between'>
                         <h4>2024</h4>
                         <h4 className='ms-4'>$50/-</h4>
                        </div>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }} className='mt-3'>
                    <Card.Img style={{ height: '200px' }} variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/italian-starters-1598019460.jpg?crop=0.311xw:0.622xh;0.0114xw,0.169xh&resize=640:*" />
                    <Card.Body>
                    <Card.Title>Veg Pizza</Card.Title>
                      <Card.Text>
                        <div className='d-flex justify-conent-between'>
                         <h6>4 regular</h6>
                         <h6 className='ms-4'>FriMar14</h6>
                        </div>
                     
                      <div className='d-flex justify-conent-between'>
                         <h4>2024</h4>
                         <h4 className='ms-4'>$50/-</h4>
                        </div>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }} className='mt-3'>
                    <Card.Img variant="top" src="https://s3.amazonaws.com/images.ecwid.com/images/33810146/1583620580.jpg" />
                    <Card.Body>
                    <Card.Title>Veg Pizza</Card.Title>
                      <Card.Text>
                        <div className='d-flex justify-conent-between'>
                         <h6>4 regular</h6>
                         <h6 className='ms-4'>FriMar14</h6>
                        </div>
                     
                      <div className='d-flex justify-conent-between'>
                         <h4>2024</h4>
                         <h4 className='ms-4'>$50/-</h4>
                        </div>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Orders;
