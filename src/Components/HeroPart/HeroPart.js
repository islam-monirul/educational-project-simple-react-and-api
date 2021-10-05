import React from 'react';
import hero from '../../images/rsz_hero.jpg';
import hero2 from '../../images/hero3.jpg';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import './HeroPart.css';

const HeroPart = () => {
     // learn more button forwarding function
     const goToGithub = () => {
          window.open('https://github.com/islam-monirul', '_blank');
     }

     return (
         <section style={{padding: "75px 0"}}>
               <Carousel variant="dark">
                    <Carousel.Item>
                         <Container>
                              <Row className="d-flex align-items-center">
                                   <Col md={7} className="d-flex justify-content-center">
                                        <Image src={hero} fluid/>
                                   </Col>
                                   <Col md={5}>
                                        <div>
                                        <h1 className="fw-bold">Find The</h1>
                                        <h2>Perfect <span className="text-primary">Programming</span></h2>
                                        <h1 className="fw-bold">Tutorials <span className="fw-normal">Here....</span></h1>
                                        <p>Programming will be easier then before</p>
                                        <Button variant="primary" onClick={ () => goToGithub()}>Learn More</Button>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                         <Container>
                              <Row className="d-flex align-items-center">
                                   <Col md={7} className="d-flex justify-content-center">
                                        <Image src={hero2} fluid/>
                                   </Col>
                                   <Col md={5}>
                                        <h1 className="fw-bold">Find The</h1>
                                        <h2>Perfect <span className="text-primary">Programming</span></h2>
                                        <h1 className="fw-bold">Tutorials <span className="fw-normal">Here....</span></h1>
                                        <p>Programming will be easier then before</p>
                                        <Button variant="primary" onClick={ () => goToGithub()}>Learn More</Button>
                                   </Col>
                              </Row>
                         </Container>
                    </Carousel.Item>
               </Carousel>
         </section>
          
     );
};

export default HeroPart;