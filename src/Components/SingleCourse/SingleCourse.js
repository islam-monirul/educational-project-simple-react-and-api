import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const SingleCourse = (props) => {
     // destructuring
     const {id, name, details, img, rating, duration, price} = props.course;
     return (
          <Col>
               <Card className="h-100">
                    <Card.Img variant="top" src={img} fluid/>
                    <Card.Body>
                         <p className="text-warning"><FaStar/> {rating}</p>
                         <h6>{name} {id}</h6>
                         <p>{details}</p>
                         <h6 className="text-dark">Duration : {duration} hrs.</h6>
                    </Card.Body>
                    <Card.Footer className="bg-white py-3 d-flex justify-content-between align-items-center">
                         <div>
                              <h6 className="text-danger fw-bold">BDT {price}</h6>
                         </div>
                         <div>
                              <Button variant="dark">Enroll</Button>
                         </div>
                    </Card.Footer>
               </Card>
          </Col>
     );
};

export default SingleCourse;