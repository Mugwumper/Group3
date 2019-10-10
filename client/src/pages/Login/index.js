import React from "react";
import useFormvalidation from "./useFormValidation";
import validateAuth from "./validateAuth";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./style.css";

const INITIAL_STATE = {
  email: "",
  password: ""
};

function Contact(props) {
  const {
    handleSubmit,
    test1,
    test2,
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
            <h1>Register / Login</h1>
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
              <FormBtn disabled={cantSub} type="submit">
                Submit
              </FormBtn>
            </div>
            <button type="button" onClick={test1}>login "a1@b.com"</button>
            <button type="button" onClick={test2}>login "b2@b.com"</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
