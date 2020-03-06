import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios"; 
import styled from "styled-components";





const LoginForm = ({ values, errors, touched, status }) => {
  // console.log("values", values);
//   console.log("props -->", props);
  // console.log("errors", errors);
//   console.log("touched", touched);
//   const [resData, setResData] = useState('');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("STATUS has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);
//   const userId = users[0].id; 
//   console.log(userId);
//   useEffect(() => {
//     // console.log("THIS IS USERS", users);
//     setUserId(`${users[0].id}`);
//   }, [users]);
  return (
    <div >
        <div>
            <h2>Welcome</h2>
            <p>Hello, welcome back, please login!</p>
        </div>

        {/* Form Starts */}
        {/* onSubmit={event => handleSubmit(event)} PUT THIS IS FORM FOR POST REQST */}
      <Form  >


        <label htmlFor="username">
          Email/ Username: 
          <Field id="username" type="text" name="username" placeholder="Email/ Username" />
          {touched.username && errors.username && (
            <p >{errors.username}</p>
          )}
        </label>
        <label htmlFor="password">
          password: 
          <Field id="password" type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p >{errors.password}</p>
          )}
        </label>
        <Link to="">Forgot password?</Link>
        <button className="loginbtn" type="submit">Login In!</button>
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
            <li>Username: {login.username}</li>
            <li>password: {login.password}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({username, password}) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
      
      username: username || "",
      password: password || ""
    };
  },

  // Declare shape and requirement of values object (form state )
  validationSchema: Yup.object().shape({
    password: Yup.string().required("password required"),
    // passing a string in required makes a custom inline error msg
    username: Yup.string().required("Username is required")
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    console.log("submitting", values);
    console.log('props within axios scope', props);
    axios
      .post("https://spotify-song-suggester6.herokuapp.com/api/auth/login", values)
      .then(res => {
        //   debugger;
        console.log("success", res);
        // setUserId(res.data.id);
        setStatus(res.data);
        props.setUserId(res.data.id);
        //clears form inputs, from FormikBag
        resetForm();
        props.history.push('/User/4/home');
      })
      .catch(err => console.log(err.response));
  }
})(LoginForm);
export default FormikLoginForm;

  