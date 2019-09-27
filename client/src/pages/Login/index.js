import React from "react";
import useFormvalidation from "./useFormValidation";
import validateAuth from "./validateAuth";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const INITIAL_STATE = {
    email: "",
    password: ""
}

function Contact(props) {

  const { handleSubmit, handleChange, handleBlur, errors, isSubmitting, cantSub, values } = 
        useFormvalidation(INITIAL_STATE, validateAuth)

  return (
    <Container fluid>     
    {/* <div className="container" style={getStyle_container}> */}
      <Row>
      <Col size="md-6">
      <Jumbotron>
          <h1>Register Here</h1>
      </Jumbotron>          
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
            //className={errors.email && 'error-input'}
          name="email"
          value={values.email}
          autoComplete="off"
          placeholder="Your email address"
          style={errors.email ? {border: "1px solid red"} : {border: "1px solid #ced4da"}}
          />
        <div style={getStyle_errortext}>
            {/* // report email errors  */}
            {errors.email ? <p>{errors.email}</p> : <p>{'\u00A0'}</p>}
        </div>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
        //    className={errors.password && 'error-input'}
          name="password"
          type="password"
          value={values.password}
          placeholder="Choose a safe password"
           style={errors.password ? {border: "1px solid red"} : {border: "1px solid #ced4da"}}
        />
        <div style={getStyle_errortext}>
            {/* // report password errors  */}
            {errors.password ? <p>{errors.password}</p> : <p>{'\u00A0'}</p>}
        </div>
        <div>
          <FormBtn 
                disabled={cantSub} 
                type="submit" 
                //style={getStyle_button} 
            >
            Submit
          </FormBtn>
        </div>
      </form>
      </Col>      
      </Row>
    {/* </div> */}
    </Container>
  );
}

// const getStyle_container = {
//     margin: "0 auto",
//     width: "500px",
//   }

// const getStyle_input = {
//     width: "100%",
//     // color: "#000",
//     // fontSize: "1.5rem",
//     // padding: "0.25em",
//     // marginTop: "0.5em",
//     // border: "3px solid black",
//   }
  
//   const getStyle_button = {
//      background: "orange",
//      fontSize: "1.3rem",
//      margin: "1em",
//      padding: "0.2em 0.5em",
//   }
  
//   const getStyle_errorinput = {
//     margin: "0",
//     width: "100%",
//     color: "#000",
//     border: "2px solid red",
//     borderRadius: "4px"
//   }
  
  const getStyle_errortext = {
    margin: "0 0 0 0.25em",
    padding: "0",
    color: "red",
    fontStyle: "bold",
    fontSize: "1.0rem",
  }
  
export default Contact;
