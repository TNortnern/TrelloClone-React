import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserTask } from "../../actions/boards/index";

const TaskNameForm = ({setNamesToEdit, laneItem, task, updateUserTask}) => {
     const [name, setName] = useState("");
  const editName = (lane, task) => {
    const payload = {
      name,
      lane,
      task,
      update: 'task_name'
    };
    updateUserTask(payload)
  };
  const archiveTask = (lane, task) => {
    const payload = {
      lane,
      task,
      update: "task_archive"
    };
    updateUserTask(payload)
  }
     useEffect(() => {
         setName(task.name)
     }, [task])
    return (
      <div className="d-flex task__edit-name">
        <form
          onSubmit={e => {
            editName(laneItem.id, task.id);
            e.preventDefault();
            setNamesToEdit([]);
            setName("");
          }}
        >
          <textarea
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            cols="35"
            rows="6"
          ></textarea>
          <br />
          <button className="btn btn--success" type="submit">
            Save
          </button>
        </form>
        <div className="task__edit-name-action-list">
          <div>
            <button className="btn btn--transparent">Edit Labels</button>
          </div>
          <div>
            <button className="btn btn--transparent">Change Members</button>
          </div>
          <div>
            <button className="btn btn--transparent">Move</button>
          </div>
          <div>
            <button className="btn btn--transparent">Copy</button>
          </div>
          <div>
            <button className="btn btn--transparent">Change Due Date</button>
          </div>
          <div>
            <button onClick={() => {
                archiveTask(laneItem.id, task.id)
                setNamesToEdit([])
            }} className="btn btn--transparent">Archive</button>
          </div>
        </div>
      </div>
    );
}

export default connect(null, { updateUserTask })(TaskNameForm);