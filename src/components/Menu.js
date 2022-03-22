import React from "react";
import { FaChartPie, FaTicketAlt, FaLightbulb } from "react-icons/fa";
import { IoIosPeople, IoMdSettings } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { RiBook2Fill } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import logo from "../images/logo.svg";

const Menu = () => {
  return (
    <div className="menu">
      <h3>
        <img src={logo} alt="" />
        Dashboard Kit
      </h3>

      <div className="list-menu">
        <div className="first-sec">
          <p>
            <FaChartPie /> Overview
          </p>
          <p className="active-menu">
            <FaTicketAlt /> Tickets
          </p>
          <p>
            <FaLightbulb /> Ideas
          </p>
          <p>
            <IoIosPeople />
            Contacts
          </p>
          <p>
            <BsFillPersonFill />
            Agents
          </p>
          <p>
            <RiBook2Fill />
            Articles
          </p>
        </div>
        <div className="second-sec">
          <p>
            <IoMdSettings />
            Settings
          </p>
          <p>
            <GiAchievement />
            Subscription
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
