import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import ChooseOption from '../ChooseOption/ChooseOption';

const WhyChooseUs = () => {
     const [options, setOptions] = useState([]);
     useEffect( () => {
          fetch('./whyus.json')
               .then(res => res.json())
                    .then(data => setOptions(data));
     },[])

     return (
          <Row xs={1} md={3} className="g-4 pt-4">
               {
                    options.map( option => <ChooseOption key={option.id} option={option}></ChooseOption>)
               }
          </Row>
     );
};

export default WhyChooseUs;