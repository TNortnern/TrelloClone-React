import React, { Component } from 'react';
import Card from './Card';
import Icon from "@material-ui/core/Icon";


class BoardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  boardsExist() {
    return this.props.boards && (this.props.boards.length > 0);
  }
  recentlyViewed() {
    const recently = this.props.boards.filter(b => b.recent === true);
    if (recently.length) {
      return (
        <>
          <div className="content-container__title">
            <Icon>access_time</Icon>Recently Viewed
          </div>
          <div className="card-container">
            {recently.map(recent => (
              <Card key={recent.name} board={recent} type="default">{recent.name}</Card>
            ))}
          </div>
        </>
      );
    }
  }
  render() {
    return (
      <div className="content-container">
        <div className="boards-content">
          {this.boardsExist() ? this.recentlyViewed() : null}
          <div className="content-container__title">
            <Icon>person</Icon>Personal Boards
          </div>
          <div className="card-container">
            {this.boardsExist()
              ? this.props.boards.map(board => (
                  <Card key={board.id} board={board} type="default">{board.name}</Card>
                ))
              : null}
            <Card type="create-board">Create new board</Card>
          </div>
        </div>
        <div className="home-content"></div>
      </div>
    );
  }
}

export default BoardContent;