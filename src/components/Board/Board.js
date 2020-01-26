import React, { Fragment, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import BoardBase from "./BoardBase";
import "../../styles/Models/Board.scss";
import AddACard from "./Add/AddACard";
import {
  getUserBoard,
  updateUserTask,
  addLaneToBoard
} from "../../actions/boards/index";
import LaneTasks from "./LaneTasks";
import Icon from "@material-ui/core/Icon";
import { Lane } from "../../TestingData/Boards/BoardBlueprint";

const Board = ({
  userBoard,
  getUserBoard,
  updateUserTask,
  user,
  match,
  location,
  addLaneToBoard
}) => {

 const [nameLaneTabVisible, setNameLaneTabVisible] = useState(false);
 const [laneCreateButtonVisible, setLaneCreateButtonVisible] = useState(true);
 const [newLaneName, setNewLaneName] = useState("");

 const toggleLaneNameTabVisibility = () => {
   setNameLaneTabVisible(!nameLaneTabVisible);
   setLaneCreateButtonVisible(!laneCreateButtonVisible);
 };

 const createLane = () => {
   if (!newLaneName.length) return;

   toggleLaneNameTabVisibility();
   const payload = new Lane(newLaneName);
   addLaneToBoard(payload);
   updateLaneName("");
 };

 const updateLaneName = value => {
   setNewLaneName(value);
 };


  const doesUserOwnBoard = () => {
    const hasBoard = user.involvedBoards.find(
      b => b.toString() === match.params.boardID
    );
    if (!hasBoard) {
      return (
        <Redirect to={{ pathname: "/boards", state: { from: location } }} />
      );
    }
    return (
      <BoardBase>
        <div className="board">
          <div className="lane-items">
            <Fragment>
              {userBoard.length
                ? userBoard.map(laneItem => (
                    <div>
                      <div key={laneItem.id.toString()} className="lane">
                        <div className="lane-title">
                          <h6>{laneItem.name}</h6>
                          <span>...</span>
                        </div>
                        {laneItem.tasks.length
                          ? laneItem.tasks.map(task => (
                              <LaneTasks
                                key={task.id}
                                task={task}
                                laneItem={laneItem}
                              />
                            ))
                          : null}
                        <AddACard key={laneItem.id} laneID={laneItem.id} />
                      </div>
                    </div>
                  ))
                : null}
            </Fragment>

            <div
              className={
                "lane-create-btn " +
                (laneCreateButtonVisible ? "" : "display-none")
              }
              onClick={() => toggleLaneNameTabVisibility()}
            >
              <Icon fontSize="small">add</Icon>Add another list
            </div>

            <div
              className={
                "lane-create-card " + (nameLaneTabVisible ? "" : "display-none")
              }
            >
              <input
                className="lane-create-card__input"
                type="text"
                placeholder="Enter list title..."
                value={newLaneName}
                onChange={e => updateLaneName(e.target.value)}
              ></input>
              <div className="lane-create-card__actions">
                <div
                  className="lane-create-card__confirm"
                  onClick={() => createLane()}
                >
                  Submit
                </div>
                <Icon
                  className="lane-create-card__exit"
                  onClick={() => toggleLaneNameTabVisibility()}
                >
                  close
                </Icon>
              </div>
            </div>
          </div>
        </div>
      </BoardBase>
    );
  };

  return (
    doesUserOwnBoard()
  )
};

const mapStateToProps = state => {
  return {
    user: state.user,
    userBoard: state.userBoard
  };
};

export default withRouter(
  connect(mapStateToProps, { getUserBoard, updateUserTask, addLaneToBoard })(
    Board
  )
);
