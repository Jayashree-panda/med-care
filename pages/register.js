import React,{useState} from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Modal, 
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button } from 'reactstrap';
import Nav from '../components/nav';
import Login from'./login';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
const Register = (props) => {
    const [modalPatient, setModalPatient] = useState(false);
    const {
        className
      } = props;
    const submitRegister = async() =>{
        //validate registration here

        Router.push({
            pathname: '/patient_report',
            query: { name: 'Zeit' },
          })
    }
    
    const togglePatient = () => setModalPatient(!modalPatient);
    
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
        
        <Button onClick={ submitRegister }>Sign Up</Button>
        <Button onClick={togglePatient}>Log In</Button>
        <Modal isOpen={modalPatient} toggle={togglePatient} className={className}>
                <ModalHeader toggle={togglePatient}>Modal title</ModalHeader>
                <ModalBody>
                  <Login />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={togglePatient}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={togglePatient}>Cancel</Button>
                </ModalFooter>
              </Modal>
        </Form>
    </div>
  );
}

export default Register;