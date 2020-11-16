import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";

import { GlobalContext } from "../context/GlobalContext";

// Components
import Card from "./Card";

// Assets
import Illustration from "../assets/image/no-data-illustration-1.svg";

const StatsDisplay = () => {
  const context = useContext(GlobalContext);

  const data = {
    labels: ["Loan taken", "Loan given"],
    datasets: [
      {
        data: [context.state.totalLoansTaken, context.state.totalLoansGiven],
        backgroundColor: ["#0559ff", "#ebf2ff"],
      },
    ],
  };

  return (
    <div className="stats-display">
      <Card>
        <h1 className="card-title">Your stats</h1>

        <div className="stats-wrapper">
          {context.state.totalLoansGiven === 0 &&
            context.state.totalLoansTaken === 0 && (
              <div className="no-data-illustration">
                <img src={Illustration} alt="No data illustration" />
                <p style={{ marginTop: "1.25rem", textAlign: "center" }}>
                  Create new records to see your stats!
                </p>
              </div>
            )}

          {(context.state.totalLoansGiven !== 0 ||
            context.state.totalLoansTaken !== 0) && <Doughnut data={data} />}
        </div>
      </Card>
    </div>
  );
};

export default StatsDisplay;
