import React, { Component } from "react";
import { connect } from 'react-redux';
import Panel from "./Panel";
import "../styles/Models/BoardPanel.scss";
import BoardSection from "./BoardSection";
import CreateNewBoard from "./Home/CreateNewBoard";


class BoardPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { showRecent: true, showPersonal: true, creatingNew: false };
  }
  toggleRecent = () => {
    this.setState({ showRecent: !this.state.showRecent });
  };
  togglePersonal = () => {
    this.setState({ showPersonal: !this.state.showPersonal });
  };
  closeCreate = () => {
    this.setState({creatingNew: !this.state.creatingNew})
  }
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
        <span onClick={() => this.setState({creatingNew : true})} className="navbar-containet__board-panel--create-new">
          Create new board...
        </span>
        { this.state.creatingNew ? <CreateNewBoard closeCreate={this.closeCreate} /> : '' }
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
