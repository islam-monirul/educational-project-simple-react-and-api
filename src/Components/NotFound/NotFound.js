import React from 'react';
import { Container, Row } from 'react-bootstrap';

const NotFound = () => {
     return (
          <section style={{minHeight: "60vh"}}>
               <Container>
                    <Row className="pt-5">
                         <h1 className="fw-bold text-center">Error 404 !!</h1>
                         <p className="text-center">Page Not Found !!</p>
                    </Row>
               </Container>
          </section>
     );
};

export default NotFound;