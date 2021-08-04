import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class City extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return ( 
      <Form onSubmit={this.handleSubmit}>
        <Row>
            <Col>
            <Form.Control placeholder="Ville" value={this.state.value} onChange={this.handleChange} />
            </Col>
            <Col>
            <Button type="submit" variant="light">Submit form</Button>
            </Col>
        </Row>
    </Form>
    
      );
    }
  }

export default City;


