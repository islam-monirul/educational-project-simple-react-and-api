import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
     return (
          <section style={{minHeight: "70vh"}} className="d-flex align-items-center">
               <Container>
                    <Row>
                         <Col className="d-flex flex-column justify-content-center align-items-center">
                              <h1 className="fw-bold">Error 404 !!</h1>
                              <p>Page Not Found !!</p>

                              <div>
                                   <Link style={{textDecoration: "none", backgroundColor: "#287cfa", color: "#fff", padding: "7px 20px", borderRadius: "10px"}} to="/home">Back to Home</Link>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </section>
     );
};

export default NotFound;