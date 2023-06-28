import React, { useState } from "react";
import store from "../redux/store";
import reducer from "../redux/reducer";

const calc = store(reducer);

export const CalculatorPage = () => {
  const [count, setCount] = useState(calc.getState());
  const [operand, setOperand] = useState("");

  calc.subscribe(() => {
    setCount(calc.getState());
  });

  const handleMathOperation = (operator) => {
    if (isNaN(operand)) {
      alert("Please enter a valid number!");
      return;
    }

    let payload = parseInt(operand);

    if (operator === "DIVIDE" && payload === 0) {
      alert("Cannot divide by zero!");
      return;
    }

    calc.dispatch({ type: operator, payload });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setOperand(value);
  };

  return (
    <div>
      <h2>Count Value: {count}</h2>
      <input type="text" value={operand} onChange={handleInputChange} />
      <button onClick={() => handleMathOperation("INCREMENT_BY")}>
        Increment by X
      </button>
      <button onClick={() => handleMathOperation("DECREMENT_BY")}>
        Decrement by X
      </button>
      <button onClick={() => handleMathOperation("MULTIPLY")}>
        Multiply by X
      </button>
      <button onClick={() => handleMathOperation("DIVIDE")}>
        Divide by X
      </button>
    </div>
  );
};

// export default CalculatorPage;
