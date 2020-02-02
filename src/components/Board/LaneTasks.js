import React, { useState } from "react";
import ScreenOverlay from "../Misc/ScreenOverlay";
import TaskNameForm from "./TaskNameForm";
import { connect } from "react-redux";
import { Icon } from "@material-ui/core";
import { storeTaskForModal, storeLaneForModal, setModalVisibility } from "../../actions/boards/index";


const LaneTasks = ({ task, laneItem, storeTaskForModal, storeLaneForModal, setModalVisibility }) => {
  const [namesToEdit, setNamesToEdit] = useState([]);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const openModal = (task) => {
      if (isEditSelected || namesToEdit.includes(task.id))
        return
      storeTaskForModal(task);
      storeLaneForModal(laneItem)
      setModalVisibility(true);
  }

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

      <div className="card-item" onClick={() => openModal(task)}>
        <div>
          <span>{task.name}</span>
          <div className="card-edit-name" 
               onMouseEnter={() => setIsEditSelected(true)}
               onMouseLeave={() => setIsEditSelected(false)}
               onClick={() => {
                setNamesToEdit([...namesToEdit, task.id]);
              }}>
            <Icon fontSize="small">edit</Icon>
          </div>

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

export default connect(null,{ 
  storeTaskForModal, 
  storeLaneForModal,
  setModalVisibility
})(LaneTasks);