import { useState, useId } from "react";
import "./styles.css";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  currencyDisable,
  amountDisable,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  className = "",
}) {
  const [fromVal, setFromVal] = useState(0);
  const [toVal, setToVal] = useState(0);
  const [val, setVal] = useState(0);

  const amountInputId = useId();

  return (
    <div className="box">
      <div className="box-label">
        <label htmlFor={amountInputId}>{label}</label>
        <span>Currency Type</span>
      </div>
      <br />
      <div className="box-label">
        <input
          id={amountInputId}
          type="number"
          value={amount}
          placeholder="Amount"
          disabled={amountDisable}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <select
          name="cars"
          id="cars"
          onChange={(e) => onCurrencyChange(e.target.select)}
        >
          {currencyOptions.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      {/* <button>swap</button> */}
    </div>
  );
}
