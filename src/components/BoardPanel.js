import React, { Component } from "react";
import { connect } from 'react-redux';
import Panel from "./Panel";
import "../styles/Models/BoardPanel.scss";
import BoardSection from "./BoardSection";

class BoardPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { showRecent: true, showPersonal: true };
  }
  toggleRecent = () => {
    this.setState({ showRecent: !this.state.showRecent });
  };
  togglePersonal = () => {
    this.setState({ showPersonal: !this.state.showPersonal });
  };
  render() {
    return (
      <Panel
        closePanel={this.props.toggleOpenBoards}
        classes="navbar-container__board-panel"
      >
        <div>
          <input
            className="default-input"
            type="text"
            placeholder="Find boards by name..."
          />
        </div>
        <BoardSection
          toggle={this.toggleRecent}
          shown={this.state.showRecent}
          title="Recent Boards"
          icon="access_time"
          collection={this.props.boards.find(board => board.recent === true)}
        />
        <BoardSection
          toggle={this.togglePersonal}
          shown={this.state.showPersonal}
          title="Personal Boards"
          icon="developer_board"
          collection={this.props.boards}
        />
      </Panel>
    );
  }
}
const mapStateToProps = state => {
    return {
        boards: state.userBoards,
        user: state.user
    }
}

export default connect(mapStateToProps)(BoardPanel);
