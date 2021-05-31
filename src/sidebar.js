import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiAlignJustify,FiUsers,FiFile,FiLoader,FiArchive } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";



import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {


    const [menuCollapse, setMenuCollapse] = useState(false)


  const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (

      <div id="header">

        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">

              <p>{menuCollapse ? "A" : "Artemis"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>

              {menuCollapse ? (
                <FiAlignJustify/>
              ) : (
                <FiAlignJustify/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}>Dashboard</MenuItem>
              <MenuItem icon={<FiUsers/>}>Users</MenuItem>
              <MenuItem icon={<FiFile/>}>Documents</MenuItem>
              <MenuItem icon={<FiLoader />}>Applications</MenuItem>
              <MenuItem icon={<FiArchive />}>Pages</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
  
  );
};

export default Header;
