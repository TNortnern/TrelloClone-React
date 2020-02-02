import { hot } from "react-hot-loader/root";
import React, { Component } from 'react';
import { withRouter, Switch } from "react-router-dom";
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
import SettingsBase from "./components/UserSettings/SettingsBase";
// import ProtectedByUser from "./components/ProtectedByUser";
import { CSSTransition, TransitionGroup} from 'react-transition-group';


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
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch location={this.props.location}>
                <AuthProtected
                  authed={this.props.user}
                  exact
                  path="/board"
                  component={Board}
                />
                <AuthProtected
                  authed={this.props.user}
                  exact
                  path="/:userId/settings"
                  component={SettingsBase}
                />
                <AuthProtected
                  authed={this.props.user}
                  key={this.props.location.key}
                  match={this.props.match}
                  exact
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
              </Switch>
            </CSSTransition>
          </TransitionGroup>
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
