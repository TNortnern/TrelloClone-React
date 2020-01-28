import React, { useState } from "react";
import ScreenOverlay from "../Misc/ScreenOverlay";
import TaskNameForm from "./TaskNameForm";
import { Icon } from "@material-ui/core";

const LaneTasks = ({ task, laneItem, laneId }) => {
  const [namesToEdit, setNamesToEdit] = useState([]);
  const taskIcon = action => {
    if (action === "checklist") {
      return (
        <div className="d-flex justify-content-start">
          <Icon fontSize={'small'}>check_box</Icon><span className="task-text-muted">1/2</span>
        </div>
      );
    }
  };
  return (
    <>
      {namesToEdit.length ? <ScreenOverlay /> : null}

      <div className="card-item" id={laneId}>
        <div>
          <span>{task.name}</span>
          <span
            onClick={() => {
              setNamesToEdit([...namesToEdit, task.id]);
            }}
            className="card-edit-name"
          >
            &#9998;
          </span>
          {namesToEdit.includes(task.id) ? (
            <TaskNameForm
              setNamesToEdit={setNamesToEdit}
              laneItem={laneItem}
              task={task}
            />
          ) : null}
        </div>
        {task.actions.length
          ? task.actions.map(action => (
              <div key={action.id} className="card-actions">
                {taskIcon(action.type)}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default LaneTasks;
