import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import ChooseOption from '../ChooseOption/ChooseOption';

const WhyChooseUs = () => {
     // using state
     const [options, setOptions] = useState([]);
     // fetching data
     useEffect( () => {
          fetch('./whyus.json')
               .then(res => res.json())
                    .then(data => setOptions(data));
     },[])

     return (
          <Row xs={1} md={3} className="g-4 pt-4">
               {    
                    // mapping options and forwarding to ChooseOption
                    options.map( option => <ChooseOption key={option.id} option={option}></ChooseOption>)
               }
          </Row>
     );
};

export default WhyChooseUs;