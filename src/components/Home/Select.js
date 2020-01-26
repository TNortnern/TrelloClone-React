import React from "react";
import SelectTrigger from "./SelectTrigger";
import Selecting from "./Selecting";

/* 
- show is the boolean that determines dropdown visibility, openDropdown should trigger the boolean to toggle to true 
- value of the value that will be selected on click 
- setValue is the function that sets the value but make sure the setValue function takes an event parameters and the value can be set by using e.target.textContent
- setValue probably should close the dropdown unless you want 'openDropdown' to trigger the close
- in that case just call your boolean toggle function in your parent setValue function
- collection is the items you're iterating over 
*/
const Select = ({
  openDropdown,
  value,
  show,
  setValue,
  collection,
  close
}) => {
  return (
    <>
      <SelectTrigger onTriggerClick={openDropdown} value={value} />
      {show ? (
        <Selecting
          close={close}
          setValue={setValue}
          value={value}
          collection={collection}
        />
      ) : null}
    </>
  );
};

export default Select;
