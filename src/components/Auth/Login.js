import React, { Component } from "react";
import AuthBase from "./AuthBase";
import { Link, withRouter } from "react-router-dom";
import "../../styles/Models/AuthCard.scss";
import "../../styles/GlobalStyles.scss";
import { connect } from "react-redux";
import { login, resetErrors } from "../../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "user@user.user", password: "123456" };
  }
  login(e) {
    e.preventDefault();
    const valid = this.props.users.filter(
      user =>
        user.email === this.state.email && user.password === this.state.password
    );
    if (!valid.length) {
      // temporary, this should actually trigger a redux action "set errors" e.g. this.props.setErrors('invalid')
      alert("Invalid login credentials");
      return;
    }
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
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
            {this.props.errors.length ? (
              <ul className="errors">
                <li>{this.props.errors}</li>
              </ul>
            ) : null}
            <h6>Log in to Trello</h6>
          </div>
          <form onSubmit={e => this.login(e)}>
            <input
              type="text"
              className="auth-card__input"
              placeholder="Enter email"
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
            <button type="submit" className="auth-card__submit__button--login">
              Login
            </button>
          </form>
          <hr />
          <Link
            onClick={() => this.props.resetErrors()}
            to={`/register`}
            className="gt-link"
          >
            Sign up for an account
          </Link>
        </div>
      </AuthBase>
    );
  }
}

const mapStatetoProps = state => {
  return { user: state.user, users: state.users, errors: state.errors };
};

export default connect(mapStatetoProps, { login, resetErrors })(
  withRouter(Login)
);
