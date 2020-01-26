import React, { Component } from "react";
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import "../styles/Models/Navbar.scss";
import "../styles/GlobalStyles.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className={`navbar-container navbar-${this.props.bgColor}`}>
        <Link to={"/boards"}>
          <div className="navbar-container__button navbar-container__button--home">
            <Icon>home</Icon>
          </div>
        </Link>
        <div className="navbar-container__button navbar-container__button--boards">
          <Icon>view_week</Icon>Boards
        </div>
        <div className="navbar-container__button navbar-container__button--profile">
          CB
        </div>
      </div>
    );
  }
}
