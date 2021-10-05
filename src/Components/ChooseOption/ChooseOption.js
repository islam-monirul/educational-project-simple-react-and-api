import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const ChooseOption = (props) => {
     const {title, description, img} = props.option;

     return (
          <Col>
               <Card className="h-100 pt-5 shadow-sm">
                    <Image src={img} width="100px" className="mx-auto" fluid/>
                    <Card.Body>
                         <h6 className="fw-bold text-center">{title}</h6>
                         <p className="text-center">{description}</p>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default ChooseOption;