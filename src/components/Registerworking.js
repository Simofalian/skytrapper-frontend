import React, { Component } from "react";
import axios from "axios";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
    this.handleSubmit = this.handleSubmit.bind();
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://127.0.0.1:8000/api/v1/users/signup", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { name, email, password, passwordConfirm, dateofbirth } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1 className="form-control huge-heading">
              Register for our services
            </h1>
          </div>
          <div className="form-control">
            <div className="form-control__main">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <div className="form-control__main">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <div className="form-control__main">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <div className="form-control__main">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <div className="form-control__main">
              <label htmlFor="dateofbirth">Birth Date</label>
              <input
                type="text"
                name="dateofbirth"
                value={dateofbirth}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
