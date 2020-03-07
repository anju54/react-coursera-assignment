import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Row,
 Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length<=len);
const minLength = (len) => (val) => !(val) || (val.length>=len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component{

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values){
    console.log("Current state is: " +JSON.stringify(values));
    alert("Current state is: " +JSON.stringify(values));
  }

  render(){

    return (
      <div className="container">
        <Row>
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </Row>
        
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone" />: +852 1234 5678
              <br />
              <i className="fa fa-fax" />: +852 8765 4321
              <br />
              <i className="fa fa-envelope" />:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+85212345678">
                <i className="fa fa-phone" /> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype" /> Skype
              </a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                <i className="fa fa-envelope-o" /> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <LocalForm onSubmit={ (values) => this.handleSubmit(values) } >
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>First Name</Label>
                <Col md={10}>
                  <Control.text model=".firstName" id="firstName" name="firstName" placeholder="First Name" 
                     className="form-control"
                     validators={{
                       required, minLength:minLength(3), maxLength:maxLength(15)
                     }}
                     />
                  <Errors 
                      className="text-danger" model=".firstName" show="touched"
                      messages={{
                        required : 'Reqioured',
                        minLength : 'Must be > 2',
                        maxLength : 'Must be < 15'
                      }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>last Name</Label>
                <Col md={10}>
                  <Control.text model=".lastName" id="lastName" name="lastName" placeholder="Last Name" 
                    className="form-control"  
                    validators={{
                      required, minLength:minLength(3), maxLength:maxLength(15)
                    }}/>
                  <Errors 
                      className="text-danger" model=".lastName" show="touched"
                      messages={{
                        required : 'Reqioured',
                        minLength : 'Must be > 2',
                        maxLength : 'Must be < 15'
                  }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telName" md={2}>Contact tel number</Label>
                <Col md={10}>
                  <Control.text model=".telName" id="telName" name="telName" placeholder="Tel number" 
                     className="form-control"
                     validators={{
                      required, minLength:minLength(3), maxLength:maxLength(15),
                      isNumber
                    }}/>
                    
                </Col>
                <Errors 
                      className="text-danger" model=".telName" show="touched"
                      messages={{
                        required : 'Reqioured',
                        minLength : 'Must be > 2',
                        maxLength : 'Must be < 15',
                        isNumber : 'It must be a number'
                }}/>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>email</Label>
                <Col md={10}>
                  <Control.text model=".email" id="email" name="email" placeholder="email" 
                     className="form-control"
                     validators={{
                      required,  isNumber
                    }}
                      />
                  <Errors
                    className="text-danger" model=".email" show="touched"
                    messages={{
                      required : 'Reqioured',
                      validEmail : 'Invalid email address'
                  }}/>   
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:6, offset:2}}>
                  <Row className="form-group" check>
                    <Label check>
                      <Control.checkbox model=".agree" name="agree" 
                       className="form-check" />  {'  '}
                      <strong> May we contact you?</strong>
                    </Label>
                  </Row>
                  </Col>
                <Col md={{size:3, offset:1}}>
                  <Control.select model=".contactType" name="contactType" >
                    <option>Tel</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Control.textarea id="message" model=".message" name="message" placeholder="Your Feedback" 
                     className="form-control"
                     rows="12"
                     />
                </Col>
              </Row>
                <Row className="form-group">
                  <Col md={{size:10, offset:2}}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;