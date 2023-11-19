import { useState } from "react";

interface CounterProps {
  initial?: number;
  step?: number;
}

const useCounter = ({ initial = 0, step = 1 }: CounterProps = {}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((count) => count + step);
  };
  const decrement = () => {
    setCount((count) => count - step);
  };

  const reset = () => {
    setCount(initial);
  };
  return { count, increment, decrement, reset };
  // return [ count, increment, decrement, reset ];   // we have to define the returnType for this hook in proper way .. for reference.
  // check useInput.tsx file ..
};

export default useCounter;
