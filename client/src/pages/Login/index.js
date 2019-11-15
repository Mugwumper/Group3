import React from "react";
//import { withRouter } from "react-router-dom";
import useFormvalidation from "./useFormValidation";
import validateAuth from "./validateAuth";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {fb, signin} from "../../utils/firebase";
//import API from "../../utils/API";
import { NavLink  } from 'react-router-dom';

//import { BrowserRouter as Router, Route } from "react-router-dom";
//import FamilyAdd from "../../pages/FamilyAdd";
import "./style.css";

const INITIAL_STATE = {
  email: "",
  password: ""
};
 




function Contact(props) {
  const signInUser = (e, email, password) => {
    if (e) e.preventDefault();
    signin(email, password)
    .then(res => { 
      ///if user is logged in...
      const isLogg =  (fb.auth().currentUser.providerData[0].email);
      if (isLogg) props.history.push('/add');
    });
  };
  const test1 = () => {
    signInUser(null, "crystal@bell.com", "1234567");
  }
  const test2 = () => {
    signInUser(null, "wwovno@sfsd.com", "1234567");
  }

  const {
    handleChange,
    handleBlur,
    errors,
    cantSub,
    values
  } = useFormvalidation(INITIAL_STATE, validateAuth);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Login</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              value={values.email}
              autoComplete="off"
              placeholder="Your email address"
              style={
                errors.email
                  ? { border: "1px solid red", marginBottom: "0rem" }
                  : { border: "1px solid #ced4da", marginBottom: "0rem" }
              }
            />
            <div className="errorText">
              {/* // report email errors  */}
              {errors.email ? <p>{errors.email}</p> : <p>{"\u00A0"}</p>}
            </div>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              type="password"
              value={values.password}
              placeholder="Choose a safe password"
              style={
                errors.password
                  ? { border: "1px solid red" }
                  : { border: "1px solid #ced4da" }
              }
            />
            <div className="errorText">
              {/* // report password errors  */}
              {errors.password ? <p>{errors.password}</p> : <p>{"\u00A0"}</p>}
            </div>
            <div>
              <FormBtn
                onClick={e => signInUser(e, values.email, values.password)}
                disabled={cantSub}
                type="submit"
              >
                Submit
              </FormBtn>
            </div>
            <button type="button" onClick={test1}>
              login "crystal"
            </button>
            <button type="button" onClick={test2}>
              login "wwovno@sfsd.com"
            </button>
          </form>
          <NavLink to="/signup">Sign Up</NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
