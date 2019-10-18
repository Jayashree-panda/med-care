import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal, 
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
}
  from 'reactstrap';
import Hospital from '../pages/hospital';
import Register from '../pages/register';
import Login from '../pages/login';

import 'bootstrap/dist/css/bootstrap.css';
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    const {
      className
    } = props;
    const [modalPatient, setModalPatient] = useState(false);
    const [modalHospital, setModalHospital] = useState(false);
    const [modalMedicine, setModalMedicine] = useState(false);
    const togglePatient = () => setModalPatient(!modalPatient);
    const toggleHospital = () => setModalHospital(!modalHospital);
    const toggleMedicine = () => setModalMedicine(!modalMedicine);
    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Med Care</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={togglePatient}>Patient Register</NavLink>
                <Modal isOpen={modalPatient} toggle={togglePatient} className={className} className="form-register">
                <ModalHeader toggle={togglePatient}>Modal title</ModalHeader>
                <ModalBody>
                  <Register />
                </ModalBody>
                
              </Modal>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggleHospital}>Medicine</NavLink>
                <Modal isOpen={modalHospital} toggle={toggleHospital} className={className}>
                <ModalHeader toggle={toggleHospital}>Modal title</ModalHeader>
                <ModalBody>
                  <Register />
                </ModalBody>
                
              </Modal>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggleMedicine}>Hospitals </NavLink>
                <Modal isOpen={modalHospital} toggle={toggleHospital} className={className}>
                <ModalHeader toggle={toggleHospital}>Modal title</ModalHeader>
                <ModalBody>
                  <Register />
                </ModalBody>
                
              </Modal>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
export default NavBar