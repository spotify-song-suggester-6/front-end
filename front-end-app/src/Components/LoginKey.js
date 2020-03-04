import React from "react";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://spotify-song-suggester6.herokuapp.com/api/auth/login",
        this.state.credentials
      )
      .then(res => {
        console.log("Auth Obj:", res.data.token);
        window.localStorage.setItem("token", res.data.token);
        this.props.history.push("/protected");
      })
      .catch(err => console.log("We aint got dirt!", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        <h3>
          Don't have an account? <Link to="/signup">Sign up!</Link>{" "}
        </h3>
      </div>
    );
  }
}
export default Login;
