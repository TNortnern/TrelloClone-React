import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import "../../styles/Models/TaskEditModal.scss";

const TaskEditModal = ({ task, laneItem }) => {

    const closeTaskEditModal = () => {
        // toggleTaskEditModalVisibility()
        console.log("closing")
    }

    return (
        <>
        <div className="modal-shell">
            <div className="modal-body">
                <Icon className="modal-body__close-button" onClick={() => closeTaskEditModal()}>close</Icon>
                <div className="modal-body__block">
                    <Icon className="modal-body__block__icon">close</Icon>
                    <div className="modal-body__block__interior">
                        <div className="modal-body__title">Build Task Modal</div>
                    </div>
                </div>
                <div className="modal-body__tabs">
                    
                </div>
            </div>
        </div>
        </> 
    )
};

export default TaskEditModal;