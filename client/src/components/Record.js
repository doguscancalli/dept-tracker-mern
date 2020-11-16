import React, { useContext, useState } from "react";
import moment from "moment";

import { GlobalContext } from "../context/GlobalContext";

// Assets
import Arrow from "../assets/image/arrow.svg";
import Check from "../assets/image/check.svg";
// import Close from "../assets/image/close.svg";

function Record({ record, handleDeleteRecord }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { _id, name, startDate, dueDate, amount } = record;

  const context = useContext(GlobalContext);

  return (
    <li className="record">
      <div className="record-row">
        <div className="record-group">
          <p className="header">Name</p>
          <p className="value">{name}</p>
        </div>
        <div className="record-group">
          <p className="header">Amount</p>
          <p className="value">
            {context.state.currency}
            {amount}
          </p>
        </div>

        <div
          className="record-expand"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            transform: !isCollapsed ? "rotate(-90deg)" : "",
          }}
        >
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <div className={`record-row second ${!isCollapsed ? "show" : ""}`}>
        <div className="record-group">
          <p className="header">Loan date</p>
          <p className="value">
            {startDate && moment(startDate).format("MM/DD/YYYY")}
          </p>
        </div>
        {dueDate && (
          <div className="record-group">
            <p className="header">Due date</p>
            <p className="value">
              {dueDate && moment(dueDate).format("MM/DD/YYYY")}
            </p>
          </div>
        )}

        <div className="record-cta-group">
          {/* <div className="record-delete">
            <img src={Close} alt="Arrow" />
          </div> */}
          <div
            className="record-complete"
            onClick={() => handleDeleteRecord(_id, amount)}
          >
            <img src={Check} alt="Arrow" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Record;
