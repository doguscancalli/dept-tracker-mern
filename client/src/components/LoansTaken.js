import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

// Components
import Card from "./Card";
import Records from "./Records";

// Assets
import Illustration from "../assets/image/no-data-illustration-3.svg";

const LoansTaken = () => {
  const context = useContext(GlobalContext);

  const handleDeleteRecord = (_id, amount) => {
    context.deleteRecord({ _id, type: "taken", amount });
  };

  return (
    <div className="loans-given">
      <Card>
        <h1 className="card-title">Loans taken</h1>

        {context.state.loansTaken <= 0 && (
          <div
            className="no-data-illustration"
            style={{
              display: "grid",
              placeItems: "center",
              marginTop: "100px",
            }}
          >
            <img src={Illustration} alt="No data illustration" />
            <p style={{ marginTop: "1.25rem", textAlign: "center" }}>
              No records yet
            </p>
          </div>
        )}

        <Records
          records={context.state.loansTaken}
          handleDeleteRecord={handleDeleteRecord}
        />
      </Card>
    </div>
  );
};

export default LoansTaken;
