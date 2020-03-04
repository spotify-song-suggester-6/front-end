import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios"; 


const LoginForm = ({ values, errors, touched, status }) => {
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
            <p>Hello, welcome back, please login!</p>
        </div>

        {/* Form Starts */}
      <Form >
        <label htmlFor="EmailUsername">
          Email/ Username: 
          <Field id="EmailUsername" type="email" name="EmailUsername" placeholder="Email/ Username" />
          {touched.EmailUsername && errors.EmailUsername && (
            <p >{errors.EmailUsername}</p>
          )}
        </label>
        <label htmlFor="Password">
          Password: 
          <Field id="Password" type="password" name="Password" placeholder="Password" />
          {touched.Password && errors.Password && (
            <p >{errors.Password}</p>
          )}
        </label>
        <Link to="">Forgot Password?</Link>
        <button type="submit">Login In!</button>
      </Form>
      {/* Form Ends */}

      <footer>
          <p>Don't have an account? 
              <Link to="/SignUp">Sign Up</Link>
          </p>
      </footer>
      {/* <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre> */}
      {users.map(login => {
        return (
          <ul key={login.id}>
            <li>Email/ Username: {login.EmailUsername}</li>
            <li>Password: {login.Password}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues(props) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
      
      EmailUsername: props.EmailUsername || "",
      Password: props.Password || "",
    };
  },

  // Declare shape and requirement of values object (form state )
  validationSchema: Yup.object().shape({
    Password: Yup.string().required("password required"),
    // passing a string in required makes a custom inline error msg
    EmailUsername: Yup.string().required("Email/ Username is required")
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
})(LoginForm);
export default FormikLoginForm;

  