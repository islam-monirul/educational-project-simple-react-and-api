import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
     const [courses, setCourses] = useState([]);
     useEffect( () => {
          fetch('./courseData.json')
               .then(res => res.json())
                    .then(data => setCourses(data));
     },[]);
     
     return (
          <Row xs={1} md={4} className="g-4 pt-4">
               {
                    courses.map( course => <Course key={course.id} course={course}></Course>)
               }
          </Row>
     );
};

export default Courses;