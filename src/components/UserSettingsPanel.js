import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from "@material-ui/core";
import { logout } from "../actions/auth/index";
import CreateNewBoard from "./Home/CreateNewBoard";
import Panel from "./Panel";

class UserSettingsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Panel
        closePanel={this.props.toggleUserSettings}
        classes="navbar-container__user-setings-panel"
      >
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
          <Link to={`/${this.props.user.id}/profile`}>
            <li>Profile and Visibility</li>
          </Link>
          <Link to={`/${this.props.user.id}/activity`}>
            <li>Activity</li>
          </Link>
          <Link to={`/${this.props.user.id}/cards`}>
            <li>Cards</li>
          </Link>
          <Link to={`/${this.props.user.id}/settings`}>
            <li>Settings</li>
          </Link>
        </ul>
        <ul>
          <Link to={`/${this.props.user.id}/help`}>
            <li>Help</li>
          </Link>
          <Link to={`/${this.props.user.id}/shortcuts`}>
            <li>Shortcuts</li>
          </Link>
          <Link to={`/${this.props.user.id}/language`}>
            <li>Change Language...</li>
          </Link>
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

export default withRouter(
  connect(mapStateToProps, { logout })(UserSettingsPanel)
);
