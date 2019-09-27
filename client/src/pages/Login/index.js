import React from "react";
import useFormvalidation from "./useFormValidation";
import validateAuth from "./validateAuth";

const INITIAL_STATE = {
    email: "",
    password: ""
}

function Contact(props) {

  const { handleSubmit, handleChange, handleBlur, errors, isSubmitting, values } = 
        useFormvalidation(INITIAL_STATE, validateAuth)

  return (
    <div className="container" style={getStyle_container}>
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && 'error-input'}
          name="email"
          value={values.email}
          autoComplete="off"
          placeholder="Your email address"
          style={errors.email ? getStyle_errorinput : getStyle_input}
        />
        {errors.email && <p style={getStyle_errortext}>{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && 'error-input'}
          name="password"
          type="password"
          value={values.password}
          placeholder="Choose a safe password"
          style={errors.password ? getStyle_errorinput : getStyle_input}
        />
        {errors.password && <p style={getStyle_errortext}>{errors.password}</p>}
        <div>
          <button disabled={isSubmitting} type="submit" style={getStyle_button} >Submit</button>
        </div>
      </form>
    </div>
  );
}

const getStyle_container = {
    margin: "0 auto",
    width: "500px",
  }

const getStyle_input = {
    width: "100%",
    color: "#000",
    fontSize: "1.5rem",
    padding: "0.25em",
    marginTop: "0.5em",
    border: "3px solid black",
  }
  
  const getStyle_button = {
    background: "orange",
    fontSize: "1.3rem",
    margin: "1em",
    padding: "0.2em 0.5em",
  }
  
  const getStyle_errorinput = {
    width: "100%",
    color: "#000",
     border: "2px solid red",
    borderRadius: "4px"
  }
  
  const getStyle_errortext = {
    margin: "0.25em 0 0 0",
    padding: "0",
    color: "red",
    fontStyle: "bold",
    fontSize: "1.2rem",
  }
  
export default Contact;
