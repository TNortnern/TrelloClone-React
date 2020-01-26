import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
