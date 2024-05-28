import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        {budget}
      </span>
      <input
        type="number"
        step="10"
        value={
          newBudget < totalExpenses
            ? alert(
                "You cannot reduce the budget value lower than the spending"
              )
            : newBudget
        }
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
