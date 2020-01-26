import React, { Component } from 'react';
import { Icon } from '@material-ui/core';

class SelectTrigger extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        // this triggers the dropdown on click so onClick is the function/prop you should pass to open the dropdown
        // e.g. openDropdownMenu = bool => { this.setState({ showDropDown: bool }) }, this component says this.props.onTriggerClick, call openDropDownMenu
        return (
          <button
            onClick={() => {
              this.props.onTriggerClick(true);
            }}
          >
            <span>{this.props.value}</span> <Icon>keyboard_arrow_down</Icon>
          </button>
        );
    }
}

export default SelectTrigger;