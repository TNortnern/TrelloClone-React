import React, { Component } from "react";
import '../../styles/Models/AuthBase.scss'

export default class AuthBase extends Component {
  render() {
    return ( 
        <div className="auth-base">
            <img className="auth-trello-image" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" alt="trello logo"/>
        {this.props.children}
    </div>
    );
  }
}
