import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchCity(props) {
  const [city, setCity] = useState('');
  const [userInput, setUserInput] = useState('');

  const onChange = (event) => {
    console.log(event.target.value)
    setUserInput(event.target.value);
     
  };

function handleSubmit(event){
    event.preventDefault();
    setCity(userInput)  
     props.newCitySearch(city);
    setUserInput("")
    props.api()
  }
  function api(){
    props.api()
  }
  return (
    <Form>
        <Row>
            <Col>
            <Form.Control placeholder="Ville" value={userInput} onChange={onChange} />
            </Col>
            <Col>
            <Button type="submit" variant="light" onClick={handleSubmit} >Submit form</Button>
            </Col>
        </Row>
    </Form>
  );
}

export default SearchCity;