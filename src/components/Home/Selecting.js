import React, { Component } from "react";
import "../../styles/Models/Selecting.scss";
import { Icon } from "@material-ui/core";

class Selecting extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      // collection is what you are iterating over
      // setValue is the function that updates the value
      // value is value
      <div className="selecting">
        {this.props.collection.map((c, i) => (
          <div
            key={i}
            onClick={e => {
              if (c === this.props.value) {
                this.props.close()
                return
              }
              this.props.setValue(e);
            }}
            className="selecting__item"
          >
            <span>{c}</span>
            {c === this.props.value ? <Icon>done</Icon> : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Selecting;
