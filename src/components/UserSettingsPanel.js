import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from "@material-ui/core";
import { logout } from '../actions/auth/index';
import Panel from './Panel';

class UserSettingsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Panel closePanel={this.props.toggleUserSettings} classes="navbar-container__user-setings-panel">
          <Icon
            onClick={() => {
              this.props.toggleUserSettings();
            }}
            className="navbar-container__user-settings--close"
          >
            close
          </Icon>
          <h6>{`${this.props.user.email}`}</h6>
          <ul>
            <li>
              <Link to="/profile">Profile and Visibility</Link>
            </li>
            <li>
              <Link to="/activity">Activity</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/shortcuts">Shortcuts</Link>
            </li>
            <li>
              <Link to="/language">Change Language...</Link>
            </li>
          </ul>
          <span
            className="navbar-container__user-settings--logout"
            onClick={() => {
              this.props.logout();
              this.props.history.push("/");
            }}
          >
            Log Out
          </span>
        </Panel>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps, { logout })(UserSettingsPanel));
