import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import "../styles/Models/Navbar.scss";
import "../styles/GlobalStyles.scss";
import UserSettingsPanel from "./UserSettingsPanel";
import BoardPanel from "./BoardPanel";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { openUserSettings: false, openBoards: false };
  }
  toggleUserSettings = () => {
    this.setState({ openUserSettings: !this.state.openUserSettings });
  };
  toggleOpenBoards = () => {
    this.setState({ openBoards: !this.state.openBoards });
  };
  render() {
    return (
      <>
        {this.state.openUserSettings ? (
          <UserSettingsPanel toggleUserSettings={this.toggleUserSettings} />
        ) : null}
        {this.state.openBoards ? <BoardPanel toggleOpenBoards={this.toggleOpenBoards} /> : null}
        <div className={`navbar-container navbar-${this.props.bgColor}`}>
          <Link to={"/boards"}>
            <div className="navbar-container__button navbar-container__button--home">
              <Icon>home</Icon>
            </div>
          </Link>
          <div onClick={() => {
            this.toggleOpenBoards()
          }} className="navbar-container__button navbar-container__button--boards">
            <Icon>view_week</Icon>Boards
          </div>
          <div
            onClick={() => {
              this.toggleUserSettings();
            }}
            className="navbar-container__button navbar-container__button--profile"
          >
            <img
              className="board-header__user-icon"
              width="30px"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Creative-Tail-People-police-women.svg"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}
