import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
     return (
          <div>
               <section style={{padding: "50px 0 25px 0", backgroundColor: "#f0f9ff"}}>
                    <Container>
                         <Row>
                              <p className="text-primary text-center">Coding Universe</p>
                              <h1 className="text-center">Contact Us</h1>
                         </Row>
                    </Container>
               </section>

               <section style={{padding: "50px 0"}}>
                    <Container>
                         <Row xs={1} md={3} className="g-4">
                              <Col>
                                   <Card className="py-5 h-100">
                                   <Card.Body>
                                        <Card.Title className="fw-bold text-center">Mail us</Card.Title>
                                        <Card.Text className="text-center">
                                             devmonir.uiu.cse@gmail.com
                                        </Card.Text>
                                   </Card.Body>
                                   </Card>
                              </Col>
                              <Col>
                                   <Card className="py-5 h-100">
                                   <Card.Body>
                                        <Card.Title className="fw-bold text-center">Address</Card.Title>
                                        <Card.Text className="text-center">
                                             Head Office : 53/9 BUET R/A, Polashi, Dhaka
                                        </Card.Text>
                                   </Card.Body>
                                   </Card>
                              </Col>
                              <Col>
                                   <Card className="py-5 h-100">
                                   <Card.Body>
                                        <Card.Title className="fw-bold text-center">Phone</Card.Title>
                                        <Card.Text className="text-center">
                                             +880 152 133 4471
                                        </Card.Text>
                                   </Card.Body>
                                   </Card>
                              </Col>
                         </Row>

                    </Container>
               </section>

               <section style={{padding: "50px 0"}}>
                    <Container>
                         <Row>
                              <Col md={3}></Col>
                              <Col md={6}>
                                   <h3 className="fw-bold text-center text-primary">Send a Message</h3>
                                   <p className="text-center">
                                        Your email address will not be published
                                   </p>

                                   <Form className="p-4 border">
                                        <Row className="mb-3">
                                             <Form.Group as={Col} controlId="formGridName">
                                                  <Form.Label>Name</Form.Label>
                                                  <Form.Control type="text" placeholder="Enter Name" />
                                             </Form.Group>

                                             <Form.Group as={Col} controlId="formGridEmail">
                                                  <Form.Label>Email</Form.Label>
                                                  <Form.Control type="email" placeholder="Enter Email" />
                                             </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="formGridPhone">
                                             <Form.Label>Phone</Form.Label>
                                             <Form.Control type="tel" placeholder="Phone Number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridText">
                                             <Form.Label>Your Message</Form.Label>
                                             <Form.Control
                                                  as="textarea"
                                                  placeholder="Leave a comment here"
                                                  style={{ height: '100px' }}
                                             />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                        Send Message
                                        </Button>
                                   </Form>
                              </Col>
                              <Col md={3}></Col>
                         </Row>
                    </Container>
               </section>
          </div>
     );
};

export default Contact;