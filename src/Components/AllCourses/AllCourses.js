import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from './../SingleCourse/SingleCourse';

const AllCourses = (props) => {
     // storing the true or false value sent from previous page
     const isTrue = props.makeSlice;

     // useState
     const [courses, setCourses] = useState([]);
     // fetching data
     useEffect( () => {
          fetch('./allCourses.json')
               .then(res => res.json())
                    .then(data => setCourses(data));
     },[]);
     
     return (
          <Row xs={1} md={4} className="g-4 pt-4">
               {    
                    // if makeSlice is true show sliced array elements else show all array elements 
                    isTrue ? courses.slice(0,4).map( course => <SingleCourse key={course.id} course={course}></SingleCourse>) : courses.map( course => <SingleCourse key={course.id} course={course}></SingleCourse>)
               }
          </Row>
     );
};

export default AllCourses;