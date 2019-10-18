import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Head from 'next/head'
import * as Scroll from 'react-scroll';
import { Shake } from 'reshake'




import Nav from '../components/nav'
import { Card,CardImg, Button, CardTitle, CardText, Row, Col, Jumbotron } from 'reactstrap';
import '../style/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Hospital from './hospital';
import Register from './register';
import Login from './login';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Jump from 'react-reveal/Jump';
import Swing from 'react-reveal/Swing';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import LightSpeed from 'react-reveal/LightSpeed';
// const styles = {
//   bounce: {
//     animation: 'x 5s',
//     animationName: Radium.keyframes(bounce, 'bounce')
//   },
//   slideInUp5:{
//     animation:'1s',
//     animationName: Radium.keyframes(slideInUp, 'slideInUp')
//   },
//   slideInUp4:{
//     animation:'4s',
//     animationName: Radium.keyframes(slideInUp, 'slideInUp')
//   },
//   fadeIn:{
//     animation:'3s',
//     animationName: Radium.keyframes(fadeIn, 'fadeIn')
//   },
// }

class Home extends React.Component{
  

      constructor(props) {
        super(props);
        this.toggleHospital = this.toggleHospital.bind(this)
        this.togglePatient = this.togglePatient.bind(this)
        this.toggleMedicine = this.toggleMedicine.bind(this)
        this.state = {
          modalMedicine:false,
          modalHospital:false,
          modalPatient:false,
        };
      }
      
      togglePatient = () => this.setState({ modalPatient:!this.state.modalPatient });
      toggleHospital = () => this.setState({ modalHospital:!this.state.modalHospital });
      toggleMedicine = () => this.setState({ modalMedicine:!this.state.modalMedicine });
       
  render() {
  	return (
  <div id="page">
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />
      <div class="div-first">
        <div class="div-second">
          <div class="div-third">
                <Roll>
                  <h1 id="img-over1">Med Care</h1>
                </Roll>
                <Slide left>
                  <h1 id="img-over2">Med....</h1>
                </Slide>
            </div>
        </div>
      </div>
        <Jumbotron className="jumbotron-first">
          <Bounce top>
            <h1 className="display-3">Hello, world!</h1>
          </Bounce>
          <LightSpeed>
            <p id="jumbo-content">Our goal is to reach people from all over the world. We aim 
            at providing best facilities to p. You can find quick medicine suggestions. You can
            search the 
            </p>
            
          </LightSpeed>
        </Jumbotron>
        
          <div class="outer-div"  >
            <Swing>
              <img id="demo" src="/background.jpg"  />
            </Swing>
            <Shake h={5} v={5} r={3} dur={300} int={10} max={100} fixed={true} fixedStop={false} freez={false}>
             
              <span id="svg-first">
              <svg width="100" height="100">
                
                  <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="yellow" />
                
              </svg>
              </span>
            </Shake>
            <span id="svg-second">
              <svg width="100" height="100" >
                  <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="blue" />
              </svg>
            </span>
            <span id="svg-third">
              <svg width="300" height="200" class="polygon">
                  <polygon points="100,10 40,198 190,78 10,78 160,198"  />
              </svg>
            </span>
            <div class="inner-div">
              <Jump>
                <h1 class="h1">We </h1>
                <span id="svg-second">
                  <svg width="100" height="100" >
                      <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="blue" />
                  </svg>
                </span>
              </Jump>
              <RubberBand>
                <p class="para">
                  We deal the best. jfgjfjgfjThe following is the stress test for
                  the chosen effect. A 100 paragraphs of lorem ipsum text will be revealed as you scroll down. 
                  To reset the test select an option from the button toolbar above. The following whitespace is 
                  intentionally left blank. Scroll down to begin stress test.
                  </p>
              </RubberBand>
            </div>
          </div>
        
        
        <Slide left>
          <Row className="div-class">
            <Col xs="6">
              <Shake h={5} v={5} r={3} dur={300} int={10} max={100} fixed={true} fixedStop={false} freez={false}>
                <div class="outer-div-class">
                  We provide you with the best feature from all over the world.
                </div>
              </Shake>
            </Col>
            <Col xs="6">
              <Shake h={5} v={5} r={3} dur={300} int={10} max={100} fixed={true} fixedStop={false} freez={false}>
                <div class="outer-div-class">
                </div>
              </Shake>
            </Col>
            
              
            
          
            </Row>
        </Slide>
        <div class="outer-class">  
          <RubberBand>
            <div id="service">
              Service
            </div>
          </RubberBand>
          <Row id="outer-container" > 
            <Col sm="3" lg="3" xs="3">
              <Slide bottom>
                <Card body className="card">
                <CardImg top width="100%" src="/background.jpg" alt="Card image cap" />
            
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText className="card-text">With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="button" onClick={this.togglePatient}>Patient Register/Login</Button>
                  <Modal isOpen={this.state.modalPatient} toggle={this.togglePatient} className={this.props.className}>
                    <ModalHeader toggle={this.togglePatient}>Modal title</ModalHeader>
                    <ModalBody>
                      <Register />
                    </ModalBody>
                    
                  </Modal>
                </Card>
              </Slide>
              
            </Col>
            <Col xs="3">
            <Slide bottom>
              <Card body className="card">
              <CardImg top width="100%" src="/background.jpg" alt="Card image cap" />       
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="button" onClick={this.toggleHospital}>Find Hospital</Button>
                <Modal isOpen={this.state.modalHospital} toggle={this.toggleHospital} className={this.props.className}>
                  <ModalHeader toggle={this.toggleHospital}>Modal title</ModalHeader>
                  <ModalBody>
                    <Hospital />
                  </ModalBody>
                  
                </Modal>
              </Card>
              </Slide>
            </Col>
            <Col xs="3">
            <Slide bottom>
              <Card body className="card">
              <CardImg top width="100%" src="/background.jpg" alt="Card image cap" />
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button className="buttonn" onClick={this.toggleMedicine}>Consult Doctor</Button>
                  <div class="form-register">
                    <Modal isOpen={this.state.modalMedicine} toggle={this.toggleMedicine} className={this.props.className} >
                      <ModalHeader toggle={this.toggleMedicine}>Modal title</ModalHeader>
                      <ModalBody>
                        <Login />
                      </ModalBody>
                  
                    </Modal>
                  </div>
              </Card>
            </Slide>
            </Col>
          </Row>
        </div>
    
    </div>
    
    )}}

    
// class Home extends React.Component (props)  {
//   const {
//     className
//   } = props;

//   const [modalPatient, setModalPatient] = useState(false);
//   const [modalHospital, setModalHospital] = useState(false);
//   const [modalMedicine, setModalMedicine] = useState(false);
//   const togglePatient = () => setModalPatient(!modalPatient);
//   const toggleHospital = () => setModalHospital(!modalHospital);
//   const toggleMedicine = () => setModalMedicine(!modalMedicine);


//   return(
  

    
  
//   )
// }

export default Home
