import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const SingleCourse = (props) => {
     const {name, details, img, rating, duration, price} = props.course;
     return (
          <Col>
               <Card className="h-100">
                    <Card.Img variant="top" src={img} fluid/>
                    <Card.Body>
                         <p className="text-warning"><FaStar/> {rating}</p>
                         <h6>{name}</h6>
                         <p>{details}</p>
                    </Card.Body>
                    <Card.Footer className="bg-white py-3 d-flex justify-content-between">
                         <div>
                              <h6 className="text-dark">{duration} hrs.</h6>
                         </div>
                         <div>
                              <h6 className="text-danger fw-bold">BDT {price}</h6>
                         </div>
                    </Card.Footer>
               </Card>
          </Col>
     );
};

export default SingleCourse;