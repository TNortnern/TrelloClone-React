import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNewBoard } from '../../actions/boards/index';
import ScreenOverlay from "../Misc/ScreenOverlay";
import "../../styles/GlobalStyles.scss";
import "../../styles/Models/CreateNewBoard.scss";
import CreateBoardContent from "./CreateBoardContent";
import { Board } from "../../TestingData/Boards/BoardBlueprint";
import OutsideClickHandler from 'react-outside-click-handler'

class CreateNewBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      team: "No Team",
      visibility: "Public",
      theme: "https://www.publicdomainpictures.net/pictures/50000/nahled/blue-nature-background-3.jpg",
      showTeamDropDown: false,
      showVisibilityDropDown: false
    };
  }
  setName = e => {
    this.setState({name: e.target.value})
  }
  setTeam = e => {
    this.setState({ team: e.target.textContent });
    this.setState({ showTeamDropDown: false });
  };
  setVisibility = e => {    
    this.setState({ visibility: e.target.textContent });
    this.setState({ showVisibilityDropDown: false });
  };
  setTheme = e => {
    this.setState({theme: e.target.src})
  }
  selectTeam = () => {
    this.setState({
      showTeamDropDown: !this.state.showTeamDropDown
    });
  };
  selectVisibility = () => {
    this.setState({
      showVisibilityDropDown: !this.state.showVisibilityDropDown
    });
  };
  resetState = () => {
    this.setState({name: ''})
    this.setState({team: 'No Team'})
    this.setState({visibility: 'Public'})
    this.setState({
      theme:
        "https://www.publicdomainpictures.net/pictures/50000/nahled/blue-nature-background-3.jpg"
    });
  }
  createBoard = () => {
    const payload = new Board(this.state.name, this.state.team, this.state.visibility, this.state.theme)
    this.props.addNewBoard(payload)
    this.resetState()
    this.props.closeCreate()
  }
  render() {
    return (
      <ScreenOverlay centerHorizontally>
        <OutsideClickHandler
          onOutsideClick={() => {
            this.props.closeCreate()
          }}
        >
          <CreateBoardContent
            name={this.state.name}
            setName={this.setName}
            selectTeam={this.selectTeam}
            team={this.state.team}
            setTeam={this.setTeam}
            setVisibility={this.setVisibility}
            selectVisibility={this.selectVisibility}
            visibility={this.state.visibility}
            showTeamDropDown={this.state.showTeamDropDown}
            showVisibilityDropDown={this.state.showVisibilityDropDown}
            closeCreate={this.props.closeCreate}
            createBoard={this.createBoard}
            theme={this.state.theme}
            setTheme={this.setTheme}
          />
        </OutsideClickHandler>
      </ScreenOverlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { addNewBoard })(CreateNewBoard);
