import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import hero from '../../images/hero.jpg'
import './Home.css';

const Home = () => {
     const goToGithub = () => {
          window.open('https://github.com/islam-monirul', '_blank');
     }

     return (
          <div>
               <section className="heroPart">
                    <Container>
                         <Row className="d-flex align-items-center">
                              <Col md={6}>
                                   <Image src={hero} fluid />
                              </Col>
                              <Col md={6}>
                                   <h1 className="fw-bold">Find The</h1>
                                   <h2>Perfect <span className="text-primary">Programming</span></h2>
                                   <h1 className="fw-bold">Tutorials <span className="fw-normal">Here....</span></h1>
                                   <p>Programming will be easier then before</p>
                                   <Button variant="primary" onClick={ () => goToGithub()}>Learn More</Button>
                              </Col>
                         </Row>
                    </Container>
               </section>

               <section style={{padding: "50px 0", backgroundColor: "#f0f9ff"}}>
                    <Container>
                         <Row>
                              <h1 className="text-center">Our Services</h1>
                              <p className="text-primary text-center">Best Possible Programming Courses</p>
                         </Row>
                    </Container>
               </section>
          </div>
     );
};

export default Home;