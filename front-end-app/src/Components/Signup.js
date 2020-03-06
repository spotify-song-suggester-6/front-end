import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
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
    <div>
      <div>
        <h2>Welcome</h2>
        <p>
          Hello, please go through our sign up process to set up your account!
        </p>
      </div>

      {/* Form Begins */}
      <Form>
        <label htmlFor="username">
          Username:
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </label>
        {/* <label htmlFor="Email">
          Email:
          <Field id="Email" type="email" name="Email" placeholder="Email" />
          {touched.Email && errors.Email && <p>{errors.Email}</p>}
        </label> */}
        <label htmlFor="password">
          Password:
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        {/* <label htmlFor="PasswordConfirm">
          Password Confirmation:
          <Field
            id="PasswordConfirm"
            type="password"
            name="PasswordConfirm"
            placeholder="Password Confirmation"
          />
          {touched.PasswordConfirm && errors.PasswordConfirm && (
            <p>{errors.PasswordConfirm}</p>
          )}
        </label> */}
        <button type="submit">SignUp!</button>
      </Form>
      {/* Form Ends */}

      <footer>
        <p>
          have an account?
          <Link to="/login">Sign In!</Link>
        </p>
      </footer>
      {/* <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre> */}
      {/* {users.map(SignUp => {
        return (
          <ul key={SignUp.id}>
            <li>Username: {SignUp.Username}</li>
            <li>Email: {SignUp.Email}</li>
            <li>Password: {SignUp.Password}</li>
          </ul>
        );
      })} */}
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
      username: props.username || "",
      // Email: props.Email || "",
      password: props.password || ""
      // PasswordConfirm: props.PasswordConfirm || ""
    };
  },

  // Declare shape and requirement of values object (form state )
  validationSchema: Yup.object().shape({
    password: Yup.string().required("password is required"),
    username: Yup.string().required("username is required")
    // Email: Yup.string().required("Email is required")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post(
        "https://spotify-song-suggester6.herokuapp.com/api/auth/register",
        values
      )
      .then(res => {
        // console.log("success", res);
        setStatus(res.data);

        //clears form inputs, from FormikBag
        resetForm();
      })
      .catch(err => console.log("This shit broke,", err.response));
  }
})(SignUpForm);
export default FormikSignUpForm;
