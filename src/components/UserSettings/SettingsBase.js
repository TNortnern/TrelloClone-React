import React from 'react';
import { connect } from 'react-redux';
import '../../styles/Models/SettingsBase.scss';
import Navbar from '../Navbar';
import SettingsTabs from './SettingsTabs';

const SettingsBase = ({user}) => {
    return (
      <div className="settings-base">
        <Navbar bgColor="blue" />
        <div className="d-flex justify-content-center align-items-center settings-base__user">
          <img
            className="board-header__user-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Creative-Tail-People-police-women.svg"
            alt=""
          />
          <h3>
            {user.email}
          </h3>
        </div>
        <SettingsTabs />
      </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SettingsBase);