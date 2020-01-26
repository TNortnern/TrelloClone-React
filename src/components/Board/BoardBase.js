import React from "react";
import "../../styles/GlobalStyles.scss";
import "../../styles/Models/BoardBase.scss";
import BoardTitle from "./BoardTitle";
import Navbar from "../Navbar";
import Icon from "@material-ui/core/Icon";

const BoardBase = ({children}) => {
  return (
    <div className="board-base">
      <Navbar bgColor="gray" />
      <div className="board-base__option-header">
        <div></div>
        <BoardTitle />
        <div>
          <button className="btn btn--gray board-star">&#9734;</button>
        </div>
        <span className="board-base-vertical-rule"> | </span>
        <div>
          <button className="btn btn--gray">Personal</button>
        </div>
        <span className="board-base-vertical-rule"> | </span>
        <div>
          <button className="btn btn--gray btn--with-icon">
            <Icon fontSize="small">lock</Icon>Private
          </button>
        </div>
        <span className="board-base-vertical-rule"> | </span>
        <div>
          <img className="board-header__user-icon" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Creative-Tail-People-police-women.svg" alt=""/>
        </div>
        <div>
          <button className="btn btn--gray">Invite</button>
        </div>
        <button className="btn btn--float-right btn--gray ">... Show Menu</button>
      </div>
      {children}
    </div>
  );
};

export default BoardBase;
