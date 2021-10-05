import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';

const Services = () => {
     return (
          <div>
               <section style={{padding: "50px 0 50px 0", backgroundColor: "#f0f9ff"}}>
                    <Container>
                         <Row>
                              <p className="text-primary text-center">Coding Universe</p>
                              <h1 className="text-center">Our Services</h1>
                         </Row>

                         <AllCourses makeSlice={false}></AllCourses>
                    </Container>
               </section>
          </div>
     );
};

export default Services;