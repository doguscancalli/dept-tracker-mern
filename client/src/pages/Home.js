import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../context/GlobalContext";

// Components
import BalanceBanner from "../components/BalanceBanner";
import StatsDisplay from "../components/StatsDisplay";
import CreateNew from "../components/CreateNew";
import LoansGiven from "../components/LoansGiven";
import LoansTaken from "../components/LoansTaken";

const Home = () => {
  const context = useContext(GlobalContext);

  useEffect(() => {
    context.getRecords();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <BalanceBanner />
      <div className="cards-wrapper">
        <StatsDisplay />
        <CreateNew />
        <LoansGiven />
        <LoansTaken />
      </div>
    </div>
  );
};

export default Home;
