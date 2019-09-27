import React from "react";

function Contact_formvalidation(initialState, validate) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                console.log("Authenticated!", values.email, values.password);
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }        
    }, [errors, isSubmitting, values.password, values.email]);

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        }) 
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

    return { handleSubmit, handleChange, handleBlur, errors, isSubmitting, values }
}

export default Contact_formvalidation;