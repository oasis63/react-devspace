import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const CounterOne = () => {
  const { count, increment, decrement, reset } = useCounter();
  //   const useCounterState1 = useCounter();
  //   console.log("usecounterState1  :  ", useCounterState1);

  return (
    <>
      {"countOne"}

      <h1>
        {"Count : "} {count}
      </h1>
      <button onClick={increment}> increment </button>
      <button onClick={decrement}> decrement </button>
      <button onClick={reset}> reset </button>
    </>
  );
};

export default CounterOne;
