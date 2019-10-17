import React, { useState } from 'react';
import '../style/style.css';
import { Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const Hospital = () => {
  return (
    <div>
      
        <Form>
        <Row form>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" className="input" />
            </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
            </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
            </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
        </Col>
        </Row>
        
        <Button>Find</Button>
        </Form>
        
    </div>
  );
}


export default Hospital;