import React, { useState } from "react";
import { connect } from "react-redux";
import { cardify } from "../../../TestingData/Boards/cardify";
import { addTaskToLane } from "../../../actions/boards/index";
import { Alert } from "reactstrap";
import Icon from "@material-ui/core/Icon";

const AddACard = ({ laneID, addTaskToLane }) => {
  const [newTask, setNewTask] = useState("");
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");
  // const [templating, setTempating] = useState(false);
  const errorAlert = () => {
    if (error) {
      return <Alert color="danger">{error}</Alert>;
    }
  };
  const addNewCard = e => {
    e.preventDefault();
    if (!newTask.length) {
      setError("Card can't be empty");
      return;
    }
    // here we set our new task into basic card form
    const task = cardify(newTask);
    const payload = {
      lane: laneID,
      newTask: task
    };
    addTaskToLane(payload);
    setAdding(false);
    setNewTask("")
  };
  const renderAdd = () => {
    if (!adding) {
      return (
        <div className="card-add-card">
          <span onClick={() => setAdding(true)}>+ Add a Card</span>
          <Icon fontSize="small">flip_to_back</Icon>
        </div>
      );
    }
    return (
      <div>
        {error ? errorAlert() : ""}
        <form
          onSubmit={e => {
            addNewCard(e);
          }}
        >
          <div>
            <textarea
              cols="35"
              rows="4"
              placeholder="Enter a title for this card..."
              value={newTask}
              onChange={e => {
                if (error) {
                  setError("");
                }
                setNewTask(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="card-confirm-add-card">
            <div>
              <button className="button button-success">Add Card</button>
              <span
                onClick={() => {
                  setAdding(false);
                  setNewTask("");
                  setError("");
                }}
              >
                X
              </span>
            </div>
            <div>...</div>
          </div>
        </form>
      </div>
    );
  };
  return <div className="add-card">{renderAdd()}</div>;
};

export default connect(null, { addTaskToLane })(AddACard);
