import { hot } from "react-hot-loader/root";
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import { Route } from 'react-router';
import { connect } from 'react-redux';
import Layout from './components/Layout';
import Login from './components/Auth/Login';
import './custom.css'
import  Register from "./components/Auth/Register";
import HomePage  from "./components/Home/HomePage";
import Board from "./components/Board/Board";
import AuthProtected from "./components/AuthProtected";
import AlreadyAuthed from "./components/AlreadyAuthed";
// import ProtectedByUser from "./components/ProtectedByUser";


class App extends Component {
  static displayName = App.name;
  constructor(props) {
    super(props);
    this.state = { navHidden: false };
    this.setNav = this.setNav.bind(this);
  }
  setNav (state) {
    this.setState({
      navHidden: state
    })
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.user)
  }
  render() {
    return (
      <>
        <Layout>
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route path="/register" component={Register} /> */}
          {/* <Route path="/board" component={Board} /> */}
          {/* <Route path="/boards" component={HomePage} /> */}
          <AuthProtected
            authed={this.props.user}
            exact
            path="/board"
            component={Board}
          />
          <AuthProtected
            authed={this.props.user}
            key={this.props.location.key}
            match={this.props.match}
            path="/board/:boardID"
            component={Board}
          />
          <AuthProtected
            authed={this.props.user}
            path="/boards"
            component={HomePage}
          />
          <AlreadyAuthed
            authed={this.props.user}
            exact
            path="/"
            component={Login}
          />
          <AlreadyAuthed
            authed={this.props.user}
            path="/register"
            component={Register}
          />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps)(hot(App)))
