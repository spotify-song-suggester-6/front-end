import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";


const SignUpForm = ({ values, errors, touched, status }) => {
  // console.log("values", values);
  // console.log("errors", errors);
  // console.log("touched", touched);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("status has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);
  return (
    <div >
       <div>
            <h2>Welcome</h2>
            <p>Hello, please go through our sign up process to set up your account!</p>
        </div>

        {/* Form Begins */}
      <Form >
      <label htmlFor="Username">
          Username: 
          <Field id="Username" type="text" name="Username" placeholder="Username" />
          {touched.Username && errors.Username && (
            <p >{errors.Username}</p>
          )}
        </label>
        <label htmlFor="Email">
          Email: 
          <Field id="Email" type="email" name="Email" placeholder="Email" />
          {touched.Email && errors.Email && (
            <p >{errors.Email}</p>
          )}
        </label>
        <label htmlFor="Password">
          Password: 
          <Field id="Password" type="password" name="Password" placeholder="Password" />
          {touched.Password && errors.Password && (
            <p >{errors.Password}</p>
          )}
        </label>
        <label htmlFor="PasswordConfirm">
          Password Confirmation: 
          <Field id="PasswordConfirm" type="password" name="PasswordConfirm" placeholder="Password Confirmation" />
          {touched.PasswordConfirm && errors.PasswordConfirm && (
            <p >{errors.PasswordConfirm}</p>
          )}
        </label>
        <button type="submit">SignUp!</button>
      </Form>
{/* Form Ends */}

      <footer>
          <p>have an account? 
              <Link to="/Login">Sign In!</Link>
          </p>
      </footer>
      {/* <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre> */}
      {users.map(SignUp => {
        return (
            <ul key={SignUp.id}>
            <li>Username: {SignUp.Username}</li>
            <li>Email: {SignUp.Email}</li>
            <li>Password: {SignUp.Password}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
      Username: props.Username || "",
      Email: props.Email || "",
      Password: props.Password || "",
      PasswordConfirm: props.PasswordConfirm || "",
    };
  },

  // Declare shape and requirement of values object (form state )
  validationSchema: Yup.object().shape({
    Password: Yup.string().required("password is required"),
    Username: Yup.string().required("Username is required"),
    Email: Yup.string().required("Email is required")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        // console.log("success", res);
        setStatus(res.data);

        //clears form inputs, from FormikBag
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SignUpForm);
export default FormikSignUpForm;

  