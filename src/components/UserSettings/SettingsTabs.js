import React, { useState } from "react";

import { Nav, NavItem, NavLink } from "reactstrap";

import "../../styles/Models/SettingsTabs.scss";
import Tab from "./Tab";
import SettingsProfileTab from "./SettingsProfileTab";

const SettingsTabs = () => {
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [activeTab, setActiveTab] = useState(1);
  const isActiveTab = tab => {
    return activeTab === tab ? "settings-tabs__tab--active" : "";
  };
  return (
    <div className="settings-tabs">
      <Nav className="d-flex justify-content-center" tabs>
        <NavItem>
          <NavLink
            className={`settings-tabs__tab ${isActiveTab(1)}`}
            onClick={() => {
              toggle(1);
            }}
          >
            Profile and Visibility
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`settings-tabs__tab ${isActiveTab(2)}`}
            onClick={() => {
              toggle(2);
            }}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <Tab tab={{ current: activeTab, assigned: 1 }}>
        <SettingsProfileTab />
      </Tab>
      <Tab tab={{ current: activeTab, assigned: 2 }}>
        <SettingsProfileTab />
      </Tab>
      <Tab tab={{ current: activeTab, assigned: 3 }}></Tab>
    </div>
  );
};

export default SettingsTabs;
