import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Nav from '../components/nav'
import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css'
const Login = (props) => {
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
        
        <Button>Log in</Button>
        </Form>
    </div>
  );
}

export default Login;