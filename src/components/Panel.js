import React from "react";
import OutsideClickHandler from "react-outside-click-handler";


const Panel = ({ children, classes, closePanel }) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        closePanel()
      }}
    >
      <div className={`navbar-container__panel ${classes}`}>{children}</div>
    </OutsideClickHandler>
  );
};

export default Panel;
