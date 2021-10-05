import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';
import HeroPart from '../HeroPart/HeroPart';
import WhyChooseUs from '../whyChooseUs/WhyChooseUs';
import './Home.css';

const Home = () => {
     return (
          <div>
               <HeroPart></HeroPart>
               {/* services section */}
               <section style={{padding: "100px 0", backgroundColor: "#f0f9ff"}}>
                    <Container>
                         <Row>
                              <h1 className="text-center">Our Services</h1>
                              <p className="text-primary text-center">Best Possible Programming Courses</p>
                         </Row>

                         <AllCourses makeSlice={true}></AllCourses>   
                    </Container>
               </section>
               
               {/* why choose us section */}
               <section style={{padding: "80px 0"}}>
                    <Container>
                         <Row>
                              <p className="text-primary text-center">Coding Universe</p> 
                              <h1 className="text-center">Why Choose us?</h1>  
                         </Row>
                         <WhyChooseUs></WhyChooseUs>
                    </Container>
               </section>
          </div>
     );
};

export default Home;