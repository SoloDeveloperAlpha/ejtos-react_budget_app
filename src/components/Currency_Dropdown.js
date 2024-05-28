import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";

export const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [moneda, setMoneda] = useState("£");
  const CambiarMoneda = (event) => {
    const newMoneda = event.target.value;
    setMoneda(newMoneda);
    dispatch({
      type: "CHG_CURRENCY",
      payload: newMoneda,
    });
  };

  console.log(moneda);
  return (
    <div className="currency-container">
      Currency
      <select className="currency" id="currency" onChange={CambiarMoneda}>
        <option value="£" id="£">
          £ Pound
        </option>
        <option value="$" id="$">
          $ Dolar
        </option>
        <option value="€" id="€">
          € Euro
        </option>
        <option value="₹" id="₹">
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};
