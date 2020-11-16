import React from "react";

// Components
import Record from "./Record";

function Records({ records, handleDeleteRecord }) {
  return (
    <ul className="records">
      {records.map((record) => {
        return (
          <Record
            record={record}
            key={record._id}
            handleDeleteRecord={handleDeleteRecord}
          />
        );
      })}
    </ul>
  );
}

export default Records;
