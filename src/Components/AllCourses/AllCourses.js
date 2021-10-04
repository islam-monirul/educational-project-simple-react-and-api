import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from './../SingleCourse/SingleCourse';

const AllCourses = () => {
     const [courses, setCourses] = useState([]);
     useEffect( () => {
          fetch('./allCourses.json')
               .then(res => res.json())
                    .then(data => setCourses(data));
     },[]);
     
     return (
          <Row xs={1} md={4} className="g-4 pt-4">
               {
                    courses.map( course => <SingleCourse key={course.id} course={course}></SingleCourse>)
               }
          </Row>
     );
};

export default AllCourses;