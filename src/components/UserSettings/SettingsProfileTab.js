import React from "react";
import { Icon } from "@material-ui/core";
import "../../styles/Models/SettingsProfileTab.scss";

const SettingsProfileTab = () => {
  return (
    <div className="settings-tabs__profile-tab">
      <div>
        <img src="#" alt="" />

        <h2>Manage your personal information</h2>
        <p>
          Control which information people see and Power-Ups may access. To
          learn more, view our{" "}
          <span className="fake-link">Terms of Service</span> or{" "}
          <span className="fake-link">Privacy Policy.</span>
        </p>
        <div className="settings-tabs__about">
          <h4>About</h4>
          <div className="settings-tabs__about-inputs">
            <div>
              <div className="settings-tabs__input">
                <span className="settings-tabs-about-inputs--visibility">
                  <Icon>public</Icon> Always visible
                </span>
                <label htmlFor="username">Full Name</label>
                <input name="username" className="default-input" type="text" />
              </div>
              <div className="settings-tabs__input">
                <span className="settings-tabs-about-inputs--visibility">
                  <Icon>public</Icon> Always visible
                </span>
                <label htmlFor="username">Initials</label>
                <input name="username" className="default-input" type="text" />
              </div>
              <div className="settings-tabs__input">
                <span className="settings-tabs-about-inputs--visibility">
                  <Icon>public</Icon> Always visible
                </span>
                <label htmlFor="username">Username</label>
                <input name="username" className="default-input" type="text" />
              </div>
              <div className="settings-tabs__input">
                <span className="settings-tabs-about-inputs--visibility">
                  <Icon>public</Icon> Always visible
                </span>
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" type="text" />
                <button className="btn btn--success">Save</button>
              </div>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Creative-Tail-People-police-women.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="settings-tabs__profile-tab--contact">

        <h4>Contact</h4>
        <div className="settings-tabs__input">
          <label htmlFor="username">Email</label>
          <textarea
            name="email"
            className="default-input settings-tabs__input--email"
            type="text"
          />
        </div>
        <button className="btn btn--gray">Change email address</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileTab;
