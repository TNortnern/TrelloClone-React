import React, { Component } from "react";
import { connect } from "react-redux";
import { register, resetErrors, login } from "../../actions/auth";
import AuthBase from "./AuthBase";
import { Link, withRouter } from "react-router-dom";
import "../../styles/Models/AuthCard.scss";
import "../../styles/GlobalStyles.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "user@user.user",
      password: "123456",
      confirmPassword: "123456"
    };
  }
  registerUser(e) {
    e.preventDefault();
    this.props.resetErrors();
    if (this.state.password === this.state.confirmPassword) {
      const email = this.state.email;
      const exists = this.props.users.filter(
        user => user.email === this.state.email
      );
      if (exists.length) {
        alert("That email is already in use.");
        return;
      }
      const password = this.state.password;
      const user = {
        email,
        password
      };
      this.props.register(user);
      this.props.login(user);
      return;
    }
    alert("Passwords must match!");
  }
  componentDidUpdate() {
    // when component updates, we check if user got logged in, if so redirect
    if (this.props.user) {
      this.props.history.push(`/boards/${this.props.user.id}`);
    }
  }
  render() {
    return (
      <AuthBase>
        <div className="auth-card">
          <div className="auth-card__title">
            <h6 onClick={() => this.registerUser()}>
              Sign up for your account
            </h6>
          </div>
          <form>
            {/* this in reality would be an array to map through */}
            {this.props.errors.length ? (
              <ul className="errors">
                <li>{this.props.errors}</li>
              </ul>
            ) : null}
            <input
              type="text"
              className="auth-card__input"
              placeholder="Enter email address"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
            <input
              type="password"
              className="auth-card__input"
              placeholder="Enter password"
              value={this.state.password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
            <input
              type="password"
              className="auth-card__input"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={e => {
                this.setState({ confirmPassword: e.target.value });
              }}
            />
            <button
              onClick={e => {
                this.registerUser(e);
              }}
              type="submit"
              className="auth-card__submit__button--register blue"
            >
              Sign Up
            </button>
          </form>
          <hr />
          <Link
            onClick={() => this.props.resetErrors()}
            to={`/`}
            className="gt-link"
          >
            Already have an Atlassian account? Log in
          </Link>
        </div>
      </AuthBase>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, users: state.users, errors: state.errors };
};

export default connect(mapStateToProps, { register, resetErrors, login })(
  withRouter(Register)
);
