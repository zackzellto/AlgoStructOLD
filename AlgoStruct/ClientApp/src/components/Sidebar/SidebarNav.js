import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

import React from "react";

const SidebarNav = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        {
          <MenuItem icon={<FaIcons.FaGem />}>
            AlgoStruct
            <Link to="/" />
          </MenuItem>
        }
      </SidebarHeader>
      <SidebarContent>
        {
          <Menu iconShape="square">
            <MenuItem icon={<FaIcons.FaGem />}>About AlgoStruct</MenuItem>
            <SubMenu title="Components" icon={<FaIcons.FaHeart />}>
              <MenuItem>The Mission</MenuItem>
              <MenuItem>The Idea</MenuItem>
              <MenuItem>The Future</MenuItem>
            </SubMenu>
          </Menu>
        }
      </SidebarContent>
      <SidebarFooter>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SidebarNav;
