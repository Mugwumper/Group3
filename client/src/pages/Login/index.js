import React from "react";
import useFormvalidation from "./useFormValidation";
import validateAuth from "./validateAuth";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {signin} from "../../firebase";
//import API from "../../utils/API";
import { NavLink  } from 'react-router-dom';

//import { BrowserRouter as Router, Route } from "react-router-dom";
//import FamilyAdd from "../../pages/FamilyAdd";
import "./style.css";

const INITIAL_STATE = {
  email: "",
  password: ""
};
 
const test1 = () => {
  signInUser(null, "a1@b.com", "1234567");
}
const test2 = () => {
  signInUser(null, "b2@b.com", "1234567");
}


const signInUser = (e, email, password) => {
  if (e) e.preventDefault();
  signin(email, password).then(
    // navigate to the next screen
    
  );
};

function Contact(props) {
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
        <Col size="md-6">
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
              login "a1@b.com"
            </button>
            <button type="button" onClick={test2}>
              login "b2@b.com"
            </button>
          </form>
          <NavLink to="/signup">Sign Up</NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
