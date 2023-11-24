import { useCounterStore } from "../../states/counterStore";

const StoreDemo1 = () => {
  const { count, step, increment, decrement, reset } = useCounterStore();

  console.log(count, step, increment, decrement, reset);

  return (
    <>
      {"StoreDemo1 "}
      <h1>
        {"Count : "} {count}
      </h1>
      <button onClick={increment}> increment </button>
      <button onClick={decrement}> decrement </button>
      <button onClick={reset}> reset </button>
    </>
  );
};

export default StoreDemo1;
