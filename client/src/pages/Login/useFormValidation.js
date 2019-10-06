import React from "react";
import API from "../../utils/API";

// this was taken from https://www.youtube.com/watch?v=8yo44xN7-nQ
// the version here is improved upon with regard to handling errors
// and the state of the button enable.

function Contact_formvalidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [cantSub, setCantSub] = React.useState(true);
  React.useEffect(() => {
    // this fires on every keystroke within the input fields
    //console.log("React.useEffect");
    const eE = Boolean(errors.email);
    const eP = Boolean(errors.password);
    const noErrors = !eE && !eP;
    const hasValues = values.email && values.password;
    if (isSubmitting) {
      if (noErrors) {
        console.log("Authenticated!", values.email, values.password);
        API.login({
          email: values.email,
          password: values.password
        })
          .then(res => {
            if ((res.status === 200) && (res.data == null)) {
                // prompt to create a new user TODO
                
                API.NewUser({
                    email: values.email,
                    password: values.password
                })
                .then(res => {
                    console.log(res.data);
                    // use router to get us to the next screen
                })
                .catch({
                    // bark about whatever is wrong and hold here
                })
            } else {
                if (res.data.password === values.password) {
                    console.log("valid");
                    // use router to get us to the next screen
                } else {
                    console.log(
                        "NOT valid: " + res.data.password + "<>" + values.password
                    );
                    // bark about invalid password and hold here
                }
            }
          })
          .catch(err => console.log(err));

        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    } else {
      if (noErrors && hasValues) {
        setCantSub(false);
      } else {
        setCantSub(true);
      }
    }
  }, [errors, isSubmitting, cantSub, values.password, values.email]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    /// if we have errors already, check to see if they are cleared
    const hasErrors = errors.email || errors.password;
    if (hasErrors) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    isSubmitting,
    cantSub,
    values
  };
}

export default Contact_formvalidation;
