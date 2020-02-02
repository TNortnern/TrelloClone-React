import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import "../../styles/Models/TaskEditModal.scss";
import "../../styles/GlobalStyles.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { connect } from "react-redux";
import { setUserBoard, updateUserTask, addLaneToBoard, setUserBoardTask, setModalVisibility } from "../../actions/boards/index";


const TaskEditModal = ({ task, laneItem, taskData, laneData, userBoard, setModalVisibility }) => {

    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [titleChangeOpenStatus, setTitleChangeOpenStatus] = useState(false);
    const [taskTitle, setTaskTitle] = useState(taskData.name);
    const [taskDescription, setTaskDescription] = useState(taskData.description)
    const [showChecklist, setShowChecklist] = useState(taskData.checklist)
    const [addingItemToCheckList, setAddingItemToCheckList] = useState(false)
    const [checklistItemTitle, setChecklistItemTitle] = useState("")
    const [checklistItems, setChecklistItems] = useState(taskData.checklistItems)
    
    const toggleDescriptionOpen = (dontToggleIfOpen) => {
        if (dontToggleIfOpen && descriptionOpen) 
            return;
        setDescriptionOpen(!descriptionOpen);
    }

    const changeTaskData = (fieldName, newFieldValue) => {
        let newTaskData = taskData
        newTaskData[fieldName] = newFieldValue;
        setUserBoardTask(newTaskData, newTaskData.laneId)
    }

    const changeDescription = () => {
        changeTaskData('description', taskDescription)
        setDescriptionOpen(!descriptionOpen);
    }

    const cancelDescriptionEdit = () => {
        setTaskDescription(taskData.description)
        setDescriptionOpen(!descriptionOpen);
    }

    const closeTaskEditModal = () => {
        setModalVisibility(false);
    }

    const changeTaskName = (newName) => {
        changeTaskData('name', taskTitle)
        setTitleChangeOpenStatus(false)
    }

    const addItem = () => {
        let checklistItemObject = {
            "name": checklistItemTitle,
            "selected": false
        }
        let newChecklistItems = [...checklistItems, checklistItemObject]
        setChecklistItems(newChecklistItems)
        changeTaskData('checklistItems', newChecklistItems)
    }

    const toggleChecklistItem = (itemIndex) => {
        let checklistItemsObject = checklistItems
        checklistItemsObject[itemIndex].selected = !checklistItemsObject[itemIndex].selected
        setChecklistItems(checklistItemsObject)
        changeTaskData('checklistItems', checklistItems)
    }

    const revealChecklist = () => {
        setShowChecklist(true)
        changeTaskData('checklist', true)
    }

    const deleteChecklist = () => {
        setShowChecklist(false)
        changeTaskData('checklist', false)
        changeTaskData('checklistItems', [])
    }

    return (
        <>
        <div className="modal-shell">
            <div className="modal-body">
                <Icon className="modal-body__close-button" onClick={() => closeTaskEditModal()}>close</Icon>
                <div className="modal-body__block">
                    <Icon className="modal-body__block__icon">assignment</Icon>
                    <div className="modal-body__block__title__section" style={{'flexDirection': 'column'}}>
                        <div style={{'width': '100%'}}>
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                changeTaskName()
                            }}>
                            <input className={
                                        "modal-body__block__title title--large-text " + (titleChangeOpenStatus ? "open" : "")
                                     }
                                    type="text" 
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    onClick={() => setTitleChangeOpenStatus(true)}/>
                        </OutsideClickHandler>
                        </div>
                        <div className="modal-body__block__title__subtext">in list {laneData.name}</div>
                    </div>
                </div>
                <div className="modal-body__block">
                    <Icon className="modal-body__block__icon">format_align_left</Icon>
                    <div className="modal-body__block__title__section">
                        <div className="modal-body__block__title">Description</div>
                        {descriptionOpen ? null : (<div className="btn btn--gray"
                             onClick={() => toggleDescriptionOpen()}>
                                 Edit
                        </div>)}
                    </div>
                    <textarea placeholder="Add a more detailed description…"
                              onClick={() => toggleDescriptionOpen(true)}
                              onChange={(e) => setTaskDescription(e.target.value)}
                              value={taskDescription}
                              className={
                                "modal-body__block__textarea " + (descriptionOpen ? "open" : "closed")
                              }></textarea>
                    <div className={
                            "lane-create-card__actions " + (descriptionOpen ? "" : "display-none")
                         }>
                        <div className="lane-create-card__confirm" 
                             onClick={() => changeDescription()}>
                            Save
                        </div>
                        <Icon className="lane-create-card__exit" 
                              onClick={() => cancelDescriptionEdit()}>
                            close
                        </Icon>
                    </div>
                </div>
                {showChecklist ? (<div className="modal-body__block">
                    <Icon className="modal-body__block__icon">check_box</Icon>
                    <div className="modal-body__block__title__section">
                        <div className="modal-body__block__title">Checklist</div>
                        <div className="btn btn--gray btn--float-right" onClick={() => deleteChecklist()}>Delete</div>
                    </div>

                    <div className="modal-body__block__checklist">
                    {checklistItems.length ? checklistItems.map((value, index) => {
                            return <div className="checklist__item" 
                                        onClick={() => toggleChecklistItem(index)}
                                        key={index}>
                                {value.selected ? (
                                    <Icon fontSize="small">check_box</Icon>
                                ):(
                                    <Icon fontSize="small">check_box_outline_blank</Icon>
                                )}
                                {value.name}
                            </div>
                        }) : null}
                    </div>

                    {addingItemToCheckList ? 
                    (
                        <div>
                            <input className="checklist__name-input"
                                    type="text" 
                                    placeholder="Add an Item"
                                    value={checklistItemTitle}
                                    onChange={(e) => setChecklistItemTitle(e.target.value)}/>
                            <div className="lane-create-card__actions">
                                <div className="lane-create-card__confirm" 
                                    onClick={() => addItem()}>
                                    Add
                                </div>
                                <Icon className="lane-create-card__exit" 
                                    onClick={() => {setAddingItemToCheckList(!addingItemToCheckList); setChecklistItemTitle("")}}>
                                    close
                                </Icon>
                            </div>
                        </div>
                    ):(
                        <div onClick={() => setAddingItemToCheckList(!addingItemToCheckList)}
                            className="btn btn--gray modal-btn">Add Item</div>
                    )}
                    
                </div>) : null}



                <div className="modal-body__tabs">
                    <div className="modal-body__tabs__title">Suggested</div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">person</Icon>
                        Join
                    </div>
                    <br/>
                    <div className="modal-body__tabs__title">Add To Card</div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">person</Icon>
                        Members
                    </div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">label</Icon>
                        Labels
                    </div>
                    <div className="modal-body__tabs__btn" onClick={() => revealChecklist()}>
                        <Icon fontSize="small">check_box</Icon>
                        Checklist
                    </div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">access_time</Icon>
                        Due Date
                    </div>
                    <br/>
                    <div className="modal-body__tabs__title">Actions</div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">arrow_forward</Icon>
                        Move
                    </div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">file_copy</Icon>
                        Copy
                    </div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">remove_red_eye</Icon>
                        Watch
                    </div>
                    <div className="modal-body__tabs__btn">
                        <Icon fontSize="small">archive</Icon>
                        Archive
                    </div>

                </div>
            </div>
        </div>
        </> 
    )
};

const mapStateToProps = state => {
    return {
        userBoard: state.userBoard,
        taskData: state.taskData,
        laneData: state.laneData
    };
  };

export default connect(mapStateToProps, { 
    setUserBoard, 
    updateUserTask, 
    setUserBoardTask, 
    addLaneToBoard,
    setModalVisibility 
})(TaskEditModal);