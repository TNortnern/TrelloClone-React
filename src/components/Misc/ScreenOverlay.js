import React from "react";
import "../../styles/Models/Misc/ScreenOverlay.scss";
import "../../styles/GlobalStyles.scss";

const ScreenOverlay = ({ children, classes, centerHorizontally }) => {
  // set container styling of content within overlay based on props passed, if not default to centering content
  const setContainerClasses = () => {
    if (classes !== undefined || centerHorizontally) {
      let horizontal = centerHorizontally !== undefined ? 'd-flex justify-content-center' : ''
      return horizontal + ' ' + classes;
    }
    return "d-flex justify-content-center align-items-center";
  };
  return (
    <div className={`screen-overlay ${setContainerClasses()}`}>
      <div>{children}</div>
    </div>
  );
};

export default ScreenOverlay;
