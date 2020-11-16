const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_BALANCE":
      return {
        ...state,
        balance: action.payload,
      };
    case "GET_RECORDS":
      let given = action.payload.filter((record) => record.type === "given");
      let givenTotal = 0;
      let taken = action.payload.filter((record) => record.type === "taken");
      let takenTotal = 0;

      given.map((record) => {
        return (givenTotal += record.amount);
      });

      taken.map((record) => {
        return (takenTotal += record.amount);
      });

      return {
        ...state,
        loansGiven: given,
        loansTaken: taken,
        totalLoansGiven: givenTotal,
        totalLoansTaken: takenTotal,
      };
    case "ADD_RECORD":
      let payloadType;
      let payloadTotalName;

      if (action.payload.type === "given") {
        payloadType = "loansGiven";
        payloadTotalName = "totalLoansGiven";
      } else {
        payloadType = "loansTaken";
        payloadTotalName = "totalLoansTaken";
      }

      return {
        ...state,
        [`${payloadType}`]: [...state[`${payloadType}`], action.payload],
        [`${payloadTotalName}`]: (state[`${payloadTotalName}`] +=
          action.payload.amount),
      };
    case "DELETE_RECORD":
      const { _id, type, amount } = action.payload;
      let payloadDept;
      let payloadTotal;

      if (type === "given") {
        payloadDept = "loansGiven";
        payloadTotal = "totalLoansGiven";
      } else {
        payloadDept = "loansTaken";
        payloadTotal = "totalLoansTaken";
      }

      let newRecords = state[`${payloadDept}`].filter(
        (record) => record._id !== _id
      );
      return {
        ...state,
        [`${payloadDept}`]: newRecords,
        [`${payloadTotal}`]: state[`${payloadTotal}`] - +amount,
      };
    default:
      return state;
  }
};

export default AppReducer;
