import { useState } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaSignal } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import Avatar from "../images/avatar.png";
import SideMenuOpen from "./SideMenuOpen";

const SideMenu = ({ onClick }) => {
  return (
    <div className="sidemenu">
      <div className="sideicons">
        <RiMenuUnfoldLine
          className="sm"
          onClick={() => {
            onClick();
          }}
        />
        <FiUsers className="sm" />
        <FaSignal className="sm" />
        <BiLayer className="sm" />
        <FiClock className="sm" />
        <div className="sm smset">
          <FiSettings className="smfiset" />
        </div>
        <div className="avatar"><strong>JR</strong></div>
      </div>
    </div>
  );
};

export default SideMenu;
