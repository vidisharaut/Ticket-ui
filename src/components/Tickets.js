import React from "react";
import TicketList from "./TicketList";
import { BsSearch } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import Jones from "../images/Jones.svg";

const Tickets = () => {
  return (
    <div style={{ background: "#F7F8FC" }} className="ticket-screen">
      <div className="ticket-top">
        <h2>Tickets</h2>
        <div className="top-left">
          <BsSearch className="top-left-icons" />
          <VscBellDot className="top-left-icons" />
          <p>Jones Ferdinand</p>
          <img src={Jones} alt="Jones Ferdinamd" />
        </div>
      </div>
      <TicketList />
    </div>
  );
};

export default Tickets;
