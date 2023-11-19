import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const CounterTwo = () => {
  const { count, increment, decrement, reset } = useCounter({
    initial: 5,
    step: 10,
  });
  //   const usecounterstate = useCounter({
  //     initial: 5,
  //     step: 10,
  //   });

  //   console.log("usecounterstate  :  ", usecounterstate);

  return (
    <>
      {"countwo"}
      <h1>
        {"Count : "} {count}
      </h1>
      <button onClick={increment}> increment </button>
      <button onClick={decrement}> decrement </button>
      <button onClick={reset}> reset </button>
    </>
  );
};

export default CounterTwo;
