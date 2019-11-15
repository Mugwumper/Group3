import React from "react";
import useFormvalidation from "./useFormValidation";
import validateAuth from "./validateAuth";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {createuser} from "../../utils/firebase";
import API from "../../utils/API";
import "./style.css";
import { NavLink } from 'react-router-dom';

const INITIAL_STATE = {
  email: "",
  password: ""
};

const createUser = (e, email, password) => {
  e.preventDefault();
  createuser(email, password).then(
    API.newUser({
      email: email
    }).then(res => {
      console.log(res.data);
      // use router to get us to the next screen
    })
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
        <Col size="md-12">
          <Jumbotron>
            <h1>Sign Up</h1>
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
              <FormBtn onClick={(e) => createUser(e, values.email, values.password)}  disabled={cantSub} type="submit">
                Submit
              </FormBtn>
            </div>
          </form>
          <NavLink to="/login">Login</NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
