import React from "react";
import { teams, visibilities } from "../../TestingData/Boards/BoardTraits";
import Select from "./Select";
import { Icon } from "@material-ui/core";

const CreateBoardContent = ({
  setName,
  name,
  selectTeam,
  team,
  setTeam,
  showTeamDropDown,
  setVisibility,
  selectVisibility,
  showVisibilityDropDown,
  visibility,
  closeCreate,
  createBoard,
  theme,
  setTheme
}) => {
  const getButtonClass = () => {
    if (name) {
      return "success";
    }
    return "disabled";
  };
  const isActiveTheme = (t) => {
    if (t === theme) {
     return 'create-new-board__theme-active'
    }
    return ''
  }
  const themes = [
    "https://www.publicdomainpictures.net/pictures/40000/nahled/blue-nature-background.jpg",
    "https://www.publicdomainpictures.net/pictures/50000/nahled/nature-background-32.jpg",
    "https://images.pexels.com/photos/1909259/pexels-photo-1909259.jpeg?cs=srgb&dl=hillside-nature-nature-background-nature-photography-1909259.jpg&fm=jpg",
    "https://live.staticflickr.com/4430/35923839924_d9d3cba229_b.jpg",
    "https://p2.piqsels.com/preview/762/996/942/twist-rural-road-nature.jpg",
    "https://media.macphun.com/img/uploads/customer/blog/1563197047/15632023525d2c9330b67118.07554864.jpg?q=85&w=2520",
    "https://www.publicdomainpictures.net/download-picture.php?id=28763&check=40d0c7d2a335794339b3a2023655e58f"
  ];
  return (
    <div className="create-new-board">
      <div className="create-new-board__content">
        <input
          autoFocus
          onChange={e => {
            setName(e);
          }}
          value={name}
          type="text"
          placeholder="Add Board Title"
        />
        <button onClick={closeCreate} className="create-new-board__close">
          X
        </button>
        <div className="create-new-board__select">
          <div>
            <Select
              show={showTeamDropDown}
              openDropdown={selectTeam}
              value={team}
              setValue={setTeam}
              collection={teams}
              close={selectTeam}
            />
          </div>
          <div>
            <Select
              show={showVisibilityDropDown}
              openDropdown={selectVisibility}
              value={visibility}
              setValue={setVisibility}
              collection={visibilities}
              close={selectVisibility}
            />
          </div>
        </div>
        <button
          onClick={() => {
            createBoard();
          }}
          type="button"
          className={`btn btn--${getButtonClass()}`}
        >
          Create Board
        </button>
        <span className="create-new-board__template-start">
          <Icon>calendar_today</Icon> Start with a Template
        </span>
      </div>
      <div className="create-new-board__themes">
        {themes.map((t, i) => (
          <div key={i} className={`create-new-board__themes-item ${isActiveTheme(t)}`}>
            <img onClick={(e) => {
              setTheme(e)
            }} src={t} alt="theme" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateBoardContent;
