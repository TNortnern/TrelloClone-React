import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CreateNewBoard from "./CreateNewBoard";



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [], addingNew: false };
  }
  goToBoard = () => {
      this.props.history.push(`/board/${this.props.board.id}`)
  }
  closeCreate = () => {
    this.setState({addingNew: false})
  }
  render() {
    return (
      <>
        {this.state.addingNew ? <CreateNewBoard closeCreate={this.closeCreate} /> : null}
        <div
          onClick={
            this.props.type !== "default"
              ? () => this.setState({ addingNew: true })
              : () => {
                  this.goToBoard();
                }
          }
          className={`card-container__card card-container__card--${this.props.type}`}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default withRouter(Card);
