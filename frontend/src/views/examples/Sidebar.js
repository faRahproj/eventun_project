import React, { useState } from "react";

import {
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import SubMenu from "views/examples/SubMenu";


function Sidebar() {
    const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };


    return (
      <>
              <div className="title">
                <h3>Navigation Tabs</h3>
              </div>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav vertical>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient. With a smooth metal surface that
                    seamlessly meets the new Retina HD display.
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>Here is your profile.</p>
                </TabPane>
                <TabPane tabId="3">
                  <p>Here are your messages.</p>
                </TabPane>
              </TabContent>
      </>
    );
}

export default Sidebar;
