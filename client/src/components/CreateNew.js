import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { GlobalContext } from "../context/GlobalContext";

// Assets
import Exhance from "../assets/image/exchance.svg";

// Components
import Card from "./Card";
import CustomInput from "./CustomInput";

const CreateNew = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [amount, setAmount] = useState("");

  const context = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !startDate || !amount) {
      return alert("Please enter required fields");
    }

    let data = {
      name,
      startDate,
      dueDate,
      amount,
      type: toggleForm === true ? "given" : "taken",
    };

    context.addRecord(data);

    // Reset  form
    setName("");
    setStartDate(null);
    setDueDate(null);
    setAmount("");
  };

  return (
    <div className="create-new">
      <Card>
        <h1 className="card-title">
          Create new
          <div className="options">
            <span className={`option ${toggleForm ? "option-active" : ""}`}>
              Give
            </span>
            <span
              className="exchance"
              onClick={() => setToggleForm(!toggleForm)}
            >
              <img src={Exhance} alt="Exhance Icon" />
            </span>
            <span className={`option ${toggleForm ? "" : "option-active"}`}>
              Take
            </span>
          </div>
        </h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fromWho">
              {toggleForm ? "Borrower's name" : "Lender's name"}
            </label>
            <CustomInput
              id="fromWho"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateBorrowed">
              {toggleForm ? "Loan date" : "Borrow date"}
            </label>
            <DatePicker
              className="custom-input"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="01/01/2020"
              id="dateBorrowed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount({context.state.currency})</label>
            <CustomInput
              id="amount"
              type="number"
              placeholder="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due date(optional)</label>
            <DatePicker
              className="custom-input"
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              placeholderText="01/01/2020"
              id="dueDate"
            />
          </div>
          <input type="submit" value="Save" />
        </form>
      </Card>
    </div>
  );
};

export default CreateNew;
