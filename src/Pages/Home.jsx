import React from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';
import { Form } from 'react-bootstrap';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';




function Home() {
    return (
        <>

            <Header />

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img style={{ height: '90vh', width: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                        className="d-block w-100"
                        src="https://images.creativemarket.com/0.1.0/ps/4833749/1820/1213/m1/fpnw/wm1/wbqwlmk8mlit5kyyjpb0oeujbpxl7cdhdsl5x2gpo2chgdpuw1ulo22kdnnhhl76-.jpg?1532958573&s=79f2b8451dbf2e4e01281e7c7cc641e5"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
                        <div className="mx-auto" style={{ width: '500px' }}>
                            <Form>
                                <Form.Control style={{ width: '100%', height: '50px' }} type="text" placeholder="Search Products!!!" />
                            </Form>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '90vh', width: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                        className="d-block w-100"
                        src="https://wallpapercave.com/wp/wp7524939.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
                        <div className="mx-auto" style={{ width: '500px' }}>
                            <Form>
                                <Form.Control style={{ width: '100%', height: '50px' }} type="text" placeholder="Search Products!!!" />
                            </Form>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '90vh', width: '100%' }}
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/85/28/ff/8528ff626ab682222092a855472d7df3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'orange', fontSize: '60px' }}>Food in your Hand</h5>
                        <div className="mx-auto" style={{ width: '500px' }}>
                            <Form>
                                <Form.Control style={{ width: '100%', height: '50px' }} type="text" placeholder="Search Products!!!" />
                            </Form>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            {/* //////////////////////////////////////////////card////////////////////////////////////////////// */}

            <div className='container-fluid d-flex flex-column align-items-between p-5 '>
                <Container fluid style={{ marginTop: "50px", padding: "50px" }}>
                    <h1 style={{ color: "orange" }}>Starters</h1>
                    <hr className='bold' style={{ color: "orange" }} />
                    <Row className=''>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img style={{ height: '200px' }} variant="top" src="https://th.bing.com/th/id/OIP.9nRBs-jaoM9m-7M76N6n5AHaFj?w=251&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img style={{ height: '200px' }} variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/italian-starters-1598019460.jpg?crop=0.311xw:0.622xh;0.0114xw,0.169xh&resize=640:*" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.zjikB5pBYUyYn3A8sLQjDgHaE4?rs=1&pid=ImgDetMain" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.zjikB5pBYUyYn3A8sLQjDgHaE4?rs=1&pid=ImgDetMain" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                    </Row>
                </Container>









                <Container fluid style={{ marginTop: "50px", padding: "50px" }}>
                    <h1 style={{ color: "orange" }}>Vegeterian</h1>
                    <hr className='bold' style={{ color: "orange" }} />
                    <Row className=''>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img style={{ height: '200px' }} variant="top" src="https://th.bing.com/th/id/OIP.9nRBs-jaoM9m-7M76N6n5AHaFj?w=251&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img style={{ height: '200px' }} variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/italian-starters-1598019460.jpg?crop=0.311xw:0.622xh;0.0114xw,0.169xh&resize=640:*" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img variant="top" src="https://s3.amazonaws.com/images.ecwid.com/images/33810146/1583620580.jpg" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.zjikB5pBYUyYn3A8sLQjDgHaE4?rs=1&pid=ImgDetMain" />
                                <Card.Body>
                                    <Card.Title>Veg PIzza</Card.Title>
                                    <hr style={{ color: "orange" }} />
                                    <div className='d-flex justify-content-between'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                1
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                regular
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">medium</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">large</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <h5>$10/-</h5>
                                    </div>
                                    <hr style={{ color: "orange" }} />
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>








        </>
    )
}

export default Home