import React, { Component } from "react";
import Home from "./Home";
import { connect } from "react-redux";
import { setUserBoards } from "../../actions/boards/index";
import { withRouter } from 'react-router-dom'
import Icon from "@material-ui/core/Icon";
import Navbar from "./../Navbar";
import "../../styles/Models/HomePage.scss";
import "../../styles/GlobalStyles.scss";
import BoardContent from "./BoardContent";

class HomePage extends Component {
  componentDidMount() {
    this.props.setUserBoards(this.props.boards, this.props.user);
  }

  render() {
    return (
      <Home>
        <Navbar bgColor="blue" />
        <div className="home-container">
          <div className="sidebar-container">
            <div className="sidebar-container__button sidebar-container__button--active">
              <Icon fontSize="small">view_week</Icon>Boards
            </div>
            <div onClick={() => {
              this.props.history.push('/')
            }} className="sidebar-container__button">
              <Icon fontSize="small">home</Icon>Home
            </div>
            <div className="teams-container">
              <div className="teams-container__title">Teams</div>
              <div className="sidebar-container__button teams-container__button">
                <Icon fontSize="small">add</Icon>Create A Team
              </div>
            </div>
          </div>
          <BoardContent boards={this.props.boards} />
        </div>
      </Home>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    boards: state.userBoards
  };
};

export default withRouter(connect(mapStateToProps, { setUserBoards })(HomePage));