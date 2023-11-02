import { useEffect, useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const[amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div>
        <h1>Currency App</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label={"From"}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount) =>  setAmount(amount)}
          />
          <button onClick={swap}>swap</button>
          <InputBox
            label={"To"}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={from}
            // amountDisable
          />
          <div>
            <button className="convert-btn" >Convert {from} to {to}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
