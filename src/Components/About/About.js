import React from 'react';
import aboutImg from '../../images/about-2.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
     return (
          <div>
               <section style={{padding: "50px 0 25px 0", backgroundColor: "#f0f9ff"}}>
                    <Container>
                         <Row>
                              <p className="text-primary text-center">Who we are</p>
                              <h1 className="text-center">About Us</h1>
                         </Row>
                    </Container>
               </section>

               <section style={{padding: "50px 0"}}>
                    <Container>
                         <Row className="d-flex align-items-center">
                              <Col md={6}>
                                   <Image src={aboutImg} fluid/>
                              </Col>
                              <Col md={6}>
                                   <p>
                                        Coding Universe is an imaginary programming learning website. This is built with React.js as an assignment of Complete Web Development with Jhankar Mahbub by Monirul Islam. 

                                        <br /> <br />
                                        In this learning platform, We can get different types of programming course services such as PHP, JavaScript, React.js, Vue.js etc. You can get the best possible programming courses here. Don't waste your time thinking. Start learning today and become a PRO. 
                                   </p>
                                   <br /> <br />

                                   <h3 className="fw-bold text-primary">Our Vision</h3>

                                   <p> 
                                        We share our knowledge with you so that you can learn and also share somewith others. In this way the world will get filled with people withactual programming knowledge. We believe the programmers can playextremely vital role in developing the world.

                                   <br /> <br />
                                        So ..... What are you waiting for..!!! Come and join us today.

                                   </p>
                                   
                              </Col>
                         </Row>
                    </Container>
               </section>
          </div>
     );
};

export default About;