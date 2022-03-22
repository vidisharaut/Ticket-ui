import React from "react";
import data from "../data/DataList";
import {
  BsSortUpAlt,
  BsChevronLeft,
  BsChevronRight,
  BsCaretDownFill,
} from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const TicketList = () => {
  return (
    <div className="ticketlist-container">
      <table className="ticketlist-header">
        <thead>
          <div className="table-header">
            <h3>All Tickets</h3>
            <div className="sort-filter">
              <p>
                <BsSortUpAlt /> Sort
              </p>
              <p>
                <FaFilter /> Filter
              </p>
            </div>
          </div>
          <tr>
            <th className="first-row">Ticket details</th>
            <th className="second-row">Customer name</th>
            <th className="third-row">Date</th>
            <th className="fourth-row">Priority</th>
            <th></th>
          </tr>
        </thead>
        {data.map((el) => (
          <tbody className="tbody-hover">
            <tr>
              <td className="first-row">
                <img src={el.img} alt="Person 1" />
                <div className="ticket-details">
                  <h5>{el.ticketname}</h5>
                  <small>Updated {el.updatedAt} ago</small>
                </div>
              </td>
              <td className="second-row">
                <h5>{el.customername}</h5>
                <small>on {el.createdAt}</small>
              </td>
              <td className="third-row">
                <h5>{el.date}</h5>
                <small>{el.time}</small>
              </td>

              <td className="fourth-row fourth">
                <p
                  className={
                    el.priority === "High"
                      ? "high"
                      : el.priority === "Low"
                      ? "low"
                      : "normal"
                  }
                >
                  {el.priority}
                </p>
              </td>
              <td>
                <p style={{ color: "#C5C7CD" }}>
                  <FiMoreVertical />
                </p>
              </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <div className="footer-table">
            <p>
              Rows per page:{" "}
              <span style={{ color: "#4B506D", margin: "0 9px" }}>8</span>
              <BsCaretDownFill />
            </p>
            <p>1-8 of 1240</p>
            <p>
              <BsChevronLeft
                style={{ strokeWidth: "1", marginRight: "25px" }}
              />
              <BsChevronRight style={{ strokeWidth: "1" }} />
            </p>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
