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
}

function Contact(props) {

  const { handleSubmit, handleChange, handleBlur, errors, isSubmitting, cantSub, values } = 
        useFormvalidation(INITIAL_STATE, validateAuth)

  return (
    <Container fluid>     
      <Row>
      <Col size="md-6">
      <Jumbotron>
          <h1>Register / Login</h1>
      </Jumbotron>          
      <form onSubmit={handleSubmit} >
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
            //className={errors.email && 'error-input'}
          name="email"
          value={values.email}
          autoComplete="off"
          placeholder="Your email address"
          style={errors.email ? {border: "1px solid red", marginBottom: "0rem"} : {border: "1px solid #ced4da", marginBottom: "0rem"}}
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

        {/* <a href="/auth/google" className="button">
          <div>
            <span className="svgIcon t-popup-svg">
              <svg
                className="svgIcon-use"
                width="25"
                height="37"
                viewBox="0 0 25 25"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                    fill="#EA4335"
                  />
                </g>
              </svg>
            </span>
          <span className="button-label">Sign in with Google</span>
        </div>
      </a> */}



      </form>
      </Col>      
      </Row>
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
