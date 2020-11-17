import React, { useEffect, useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

// Assets
import WomanIllustration from "../assets/image/woman-illustration.svg";
// import ManIllustration from "../assets/image/man-illustration.svg";

const BalanceBanner = () => {
  const context = useContext(GlobalContext);

  useEffect(() => {
    let totalLoansGiven = 0;
    let totalLoansTaken = 0;

    context.state.loansGiven.map((item) => {
      return (totalLoansGiven += +item.amount);
    });
    context.state.loansTaken.map((item) => {
      return (totalLoansTaken += +item.amount);
    });

    context.setBalance(totalLoansTaken - totalLoansGiven);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.state.loansGiven, context.state.loansTaken]);

  return (
    <div className="balance-banner">
      <div className="balance-banner-content">
        <h1 className="welcome-text">Welcome back!</h1>
        <div className="balance-display">
          <p>Total balance</p>
          <h1>
            <span>{context.state.currency}</span> {context.state.balance}
          </h1>
        </div>
      </div>
      <div className="balance-banner-illustration">
        <img src={WomanIllustration} alt="Woman Illustration" />
      </div>
    </div>
  );
};

export default BalanceBanner;
