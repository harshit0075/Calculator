import React, { useState } from "react";
import reducer from "../redux/reducer";
import store from "../redux/store";

const calc = store(reducer);

export const HomePage = () => {
  const [count, setCount] = useState(calc.getState());

  calc.subscribe(() => {
    setCount(calc.getState());
  });

  const handleIncrement = () => {
    calc.dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    calc.dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h2>Count Value: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

// export default HomePage;
